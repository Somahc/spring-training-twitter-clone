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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TweetController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const tweet_service_1 = require("./tweet.service");
let TweetController = class TweetController {
    constructor(tweetService) {
        this.tweetService = tweetService;
    }
    async getTweet() {
        return [];
    }
    async postTweet() {
        return;
    }
    async searchTweet() {
        return;
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'ツイート取得' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TweetController.prototype, "getTweet", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'ツイート投稿' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TweetController.prototype, "postTweet", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'ツイート検索' }),
    (0, swagger_1.ApiResponse)({ status: 200 }),
    (0, common_1.HttpCode)(200),
    (0, common_1.Post)('search'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TweetController.prototype, "searchTweet", null);
TweetController = __decorate([
    (0, swagger_1.ApiTags)('tweets'),
    (0, common_1.Controller)('tweets'),
    __metadata("design:paramtypes", [typeof (_a = typeof tweet_service_1.TweetService !== "undefined" && tweet_service_1.TweetService) === "function" ? _a : Object])
], TweetController);
exports.TweetController = TweetController;
//# sourceMappingURL=tweet.controller.js.map