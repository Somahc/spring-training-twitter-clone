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
exports.PostTweetResponse = exports.SearchTweetResponse = exports.GetTweetResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class Tweet {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Tweet.prototype, "userName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], Tweet.prototype, "content", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Date)
], Tweet.prototype, "createdAt", void 0);
class GetTweetResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)({ isArray: true, type: Tweet }),
    __metadata("design:type", Array)
], GetTweetResponse.prototype, "tweetList", void 0);
exports.GetTweetResponse = GetTweetResponse;
class SearchTweetResponse extends GetTweetResponse {
}
exports.SearchTweetResponse = SearchTweetResponse;
class PostTweetResponse {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], PostTweetResponse.prototype, "message", void 0);
exports.PostTweetResponse = PostTweetResponse;
//# sourceMappingURL=response.js.map