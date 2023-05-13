import { Tweet } from './tweet.entity';
export declare class User {
    id: number;
    name: string;
    password: string;
    email: string;
    accessedAt: Date | null;
    userTweetList: Tweet[];
    constructor(name: string, password: string, email: string, accessedAt: Date | null);
}
