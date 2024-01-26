import { Strategy } from 'passport-jwt';
import { UserService } from '../../user/user.service';
declare const JwtAdminStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtAdminStrategy extends JwtAdminStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: any): Promise<import("../../user/user.model").UserDocument>;
}
export {};
