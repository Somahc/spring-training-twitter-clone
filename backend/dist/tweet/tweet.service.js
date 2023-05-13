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
exports.TweetService = void 0;
const common_1 = require("@nestjs/common");
const tweet_entity_1 = require("../entity/tweet.entity");
const tweet_repository_1 = require("../repository/tweet.repository");
const user_repository_1 = require("../repository/user.repository");
let TweetService = class TweetService {
    constructor(tweetRepository, userRepository) {
        this.tweetRepository = tweetRepository;
        this.userRepository = userRepository;
    }
    async getTweet() {
        let tweetList;
        try {
            const originalTweetList = await this.tweetRepository.find({
                order: { createdAt: 'DESC' },
                take: 100,
                relations: { user: true },
            });
            tweetList = this.convertTweetList(originalTweetList);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        return { tweetList: tweetList };
    }
    async postTweet(userId, content) {
        try {
            const tweetUser = await this.userRepository.findOne({
                where: { id: userId },
            });
            const newTweet = new tweet_entity_1.Tweet(content, tweetUser);
            await this.tweetRepository.save(newTweet);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        return { message: '成功' };
    }
    async searchTweet(text) {
        let tweetList;
        try {
            const originalTweetList = await this.tweetRepository.searchByQueryBuilder(text);
            tweetList = this.convertTweetList(originalTweetList);
        }
        catch (e) {
            console.log(e);
            throw e;
        }
        return { tweetList: tweetList };
    }
    convertTweetList(tweetList) {
        const result = tweetList.map(({ content, createdAt, user }) => {
            return {
                userName: user.name,
                content: content,
                createdAt: createdAt,
            };
        });
        return result;
    }
};
TweetService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [tweet_repository_1.TweetRepository,
        user_repository_1.UserRepository])
], TweetService);
exports.TweetService = TweetService;
//# sourceMappingURL=tweet.service.js.map