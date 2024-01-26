"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const constants_1 = require("./constants");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password, role) {
        const query = { email };
        if (role)
            query['role'] = role;
        const user = await this.userService.getUser(query);
        if (!user)
            return null;
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!user) {
            throw new common_1.NotAcceptableException('could not find the user');
        }
        if (user && passwordValid) {
            return user;
        }
        return null;
    }
    async login(email, password) {
        const user = await this.validateUser(email, password, 'user');
        if (user) {
            const payload = { userId: user._id, email: user.email, role: user.role };
            return {
                user,
                accessToken: this.jwtService.sign(payload, {
                    secret: constants_1.jwtConstants.secret,
                }),
            };
        }
        throw new common_1.NotFoundException('user not found');
    }
    async loginAdmin(email, password) {
        const roles = ['admin', 'programmer', 'customer-service', 'product-owner'];
        const user = await this.validateUser(email, password, roles);
        if (user) {
            const payload = {
                userId: user._id,
                email: user.email,
                role: user.role,
            };
            return {
                user,
                accessToken: this.jwtService.sign(payload, {
                    secret: constants_1.jwtConstants.secret,
                }),
            };
        }
        throw new common_1.NotFoundException('user not found');
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map