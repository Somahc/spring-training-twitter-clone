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
exports.SearchTweetDTO = exports.PostTweetDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PostTweetDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsNumber)({}, { message: 'idは文字です' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'idは必須です' }),
    __metadata("design:type", Number)
], PostTweetDTO.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'contentは文字です' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'contentは必須です' }),
    (0, class_validator_1.Length)(1, 140, { message: 'ツイートは140字以内です' }),
    __metadata("design:type", String)
], PostTweetDTO.prototype, "content", void 0);
exports.PostTweetDTO = PostTweetDTO;
class SearchTweetDTO {
}
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsString)({ message: 'textは文字です' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'textは必須です' }),
    __metadata("design:type", String)
], SearchTweetDTO.prototype, "text", void 0);
exports.SearchTweetDTO = SearchTweetDTO;
//# sourceMappingURL=request.js.map