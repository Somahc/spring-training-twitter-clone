import { TweetService } from './tweet.service';
import { GetTweetResponse, SearchTweetResponse, PostTweetResponse } from './dto/response';
import { PostTweetDTO, SearchTweetDTO } from './dto/request';
export declare class TweetController {
    private readonly tweetService;
    constructor(tweetService: TweetService);
    getTweet(): Promise<GetTweetResponse>;
    postTweet({ id, content }: PostTweetDTO): Promise<PostTweetResponse>;
    searchTweet({ text }: SearchTweetDTO): Promise<SearchTweetResponse>;
}
