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
exports.Tweet = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
let Tweet = class Tweet {
    constructor(content, user) {
        this.content = content;
        this.user = user;
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'integer', name: 'id' }),
    __metadata("design:type", Number)
], Tweet.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('character varying', { name: 'content' }),
    __metadata("design:type", String)
], Tweet.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamp without time zone',
    }),
    __metadata("design:type", Date)
], Tweet.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.userTweetList, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        nullable: false,
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'user_id', referencedColumnName: 'id' }]),
    __metadata("design:type", user_entity_1.User)
], Tweet.prototype, "user", void 0);
Tweet = __decorate([
    (0, typeorm_1.Entity)('tweets'),
    __metadata("design:paramtypes", [String, user_entity_1.User])
], Tweet);
exports.Tweet = Tweet;
//# sourceMappingURL=tweet.entity.js.map