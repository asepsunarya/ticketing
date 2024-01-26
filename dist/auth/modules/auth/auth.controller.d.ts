import { AuthService } from './auth.service';
import { LoginDto } from './dto/auth.dto';
import { SignupDto } from '../user/dto/user.dto';
import { UserDocument } from '../user/user.model';
import { UserService } from '../user/user.service';
export declare class AuthController {
    private authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UserService);
    login({ email, password }: LoginDto): Promise<{
        user: any;
        accessToken: string;
    }>;
    loginAdmin({ email, password }: LoginDto): Promise<{
        user: any;
        accessToken: string;
    }>;
    createUser(body: SignupDto): Promise<UserDocument>;
}
