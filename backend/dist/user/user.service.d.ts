import { UserRepository } from '../repository/user.repository';
export declare class UserService {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(name: string, email: string, password: string): Promise<{
        id: number | null;
        name: string | null;
    }>;
    login(email: string, password: string): Promise<{
        id: number;
        name: string;
    }>;
}
