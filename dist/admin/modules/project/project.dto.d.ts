import { UserDto } from '@/global/dto/user.dto';
export declare class PaginateProjectDto {
    page: number;
    limit: number;
    search?: string;
}
export declare class CreateProjectDto {
    name: string;
    code: string;
    description: string;
    leader: UserDto;
    picture?: string;
}
