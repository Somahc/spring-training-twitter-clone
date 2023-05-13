import { TweetService } from './tweet.service';
export declare class TweetController {
    private readonly tweetService;
    constructor(tweetService: TweetService);
    getTweet(): Promise<any[]>;
    postTweet(): Promise<any>;
    searchTweet(): Promise<any[]>;
}
