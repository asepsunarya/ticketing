import { PaginationDto } from '@/global/dto/pagination.dto';
export declare class SignupDto {
    email: string;
    name: string;
    role: string;
    password: string;
    photo?: string;
}
export declare class GetUserDto extends PaginationDto {
    role: string;
    search?: string;
    includeSelf?: boolean;
}
