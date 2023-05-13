declare class Tweet {
    userName: string;
    content: string;
    createdAt: Date;
}
export declare class GetTweetResponse {
    tweetList: Tweet[];
}
export declare class SearchTweetResponse extends GetTweetResponse {
}
export declare class PostTweetResponse {
    message: '成功';
}
export {};
