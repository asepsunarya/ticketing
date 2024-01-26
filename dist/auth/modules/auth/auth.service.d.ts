import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
export declare class AuthService {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string, role?: string | string[]): Promise<any>;
    login(email: string, password: string): Promise<{
        user: any;
        accessToken: string;
    }>;
    loginAdmin(email: string, password: string): Promise<{
        user: any;
        accessToken: string;
    }>;
}
