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
exports.TweetRepository = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const tweet_entity_1 = require("../entity/tweet.entity");
let TweetRepository = class TweetRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(tweet_entity_1.Tweet, dataSource.createEntityManager());
        this.dataSource = dataSource;
    }
    async searchByQueryBuilder(text) {
        let tweetQueryBuilder = this.dataSource
            .getRepository(tweet_entity_1.Tweet)
            .createQueryBuilder('tweet');
        tweetQueryBuilder = tweetQueryBuilder
            .leftJoinAndSelect('tweet.user', 'user')
            .where(`tweet.content like :text`, { text: `%${text}%` })
            .orderBy('tweet.createdAt', 'DESC')
            .take(100);
        console.log(tweetQueryBuilder.getSql(), '-----sqlllllllll-----');
        const tweerList = await tweetQueryBuilder.getMany();
        return tweerList;
    }
};
TweetRepository = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], TweetRepository);
exports.TweetRepository = TweetRepository;
//# sourceMappingURL=tweet.repository.js.map