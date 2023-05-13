import { DataSource, Repository } from 'typeorm';
import { User } from '../entity/user.entity';
export declare class UserRepository extends Repository<User> {
    dataSource: DataSource;
    constructor(dataSource: DataSource);
}
