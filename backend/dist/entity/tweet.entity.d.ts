import { User } from './user.entity';
export declare class Tweet {
    id: number;
    content: string;
    createdAt: Date;
    readonly user: User;
    constructor(content: string, user: User);
}
