import { DataSource, Repository } from 'typeorm';
import { Tweet } from '../entity/tweet.entity';
export declare class TweetRepository extends Repository<Tweet> {
    dataSource: DataSource;
    constructor(dataSource: DataSource);
    searchByQueryBuilder(text: string): Promise<Tweet[]>;
}
