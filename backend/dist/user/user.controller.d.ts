import { UserService } from './user.service';
import { CreateUserResponse, LoginResponse } from './dto/response';
import { CreateUserDTO, LoginDTO } from './dto/request';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser({ name, email, password }: CreateUserDTO): Promise<CreateUserResponse>;
    login({ email, password }: LoginDTO): Promise<LoginResponse>;
}
