import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(): Promise<any>;
    login(): Promise<any>;
}
