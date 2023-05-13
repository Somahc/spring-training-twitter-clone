import { TweetRepository } from '../repository/tweet.repository';
import { UserRepository } from '../repository/user.repository';
export declare class TweetService {
    private tweetRepository;
    private userRepository;
    constructor(tweetRepository: TweetRepository, userRepository: UserRepository);
    getTweet(): Promise<{
        tweetList: {
            userName: string;
            content: string;
            createdAt: Date;
        }[];
    }>;
    postTweet(userId: number, content: string): Promise<{
        message: '成功';
    }>;
    searchTweet(text: string): Promise<{
        tweetList: {
            userName: string;
            content: string;
            createdAt: Date;
        }[];
    }>;
    private convertTweetList;
}
