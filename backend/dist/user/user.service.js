"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../entity/user.entity");
const user_repository_1 = require("../repository/user.repository");
const hasher = require("wordpress-hash-node");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async createUser(name, email, password) {
        let newUser;
        try {
            const existingUser = await this.userRepository.findOne({
                where: { email: email },
            });
            if (existingUser) {
                return { id: null, name: null };
            }
            const hashedPassword = hasher.HashPassword(password);
            newUser = await this.userRepository.save(new user_entity_1.User(name, hashedPassword, email, null));
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        return { id: newUser.id, name: newUser.name };
    }
    async login(email, password) {
        let result;
        try {
            const targetUser = await this.userRepository.findOne({
                where: { email: email },
            });
            if (!targetUser) {
                return { id: null, name: null };
            }
            const isSamePassword = hasher.CheckPassword(password, targetUser.password);
            if (isSamePassword) {
                result = { id: targetUser.id, name: targetUser.name };
            }
            else {
                return { id: null, name: null };
            }
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        return result;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_repository_1.UserRepository])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map