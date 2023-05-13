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
exports.User = void 0;
const typeorm_1 = require("typeorm");
const tweet_entity_1 = require("./tweet.entity");
let User = class User {
    constructor(name, password, email, accessedAt) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.accessedAt = accessedAt;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id' }),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'name' }),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'password' }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'email', unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'accesses_at',
        type: 'timestamp without time zone',
        default: null,
    }),
    __metadata("design:type", Date)
], User.prototype, "accessedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => tweet_entity_1.Tweet, (tweet) => tweet.user, {
        cascade: ['insert', 'update', 'remove'],
    }),
    __metadata("design:type", Array)
], User.prototype, "userTweetList", void 0);
User = __decorate([
    (0, typeorm_1.Entity)('users'),
    __metadata("design:paramtypes", [String, String, String, Date])
], User);
exports.User = User;
//# sourceMappingURL=user.entity%E3%81%AE%E3%82%B3%E3%83%92%E3%82%9A%E3%83%BC.js.map