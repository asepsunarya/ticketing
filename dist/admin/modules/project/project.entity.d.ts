import { User } from '@/global/entity/user.entity';
export declare class PaginateProject {
    page: number;
    limit: number;
    search?: string;
}
export declare class Project {
    name: string;
    code: string;
    description: string;
    leader: User;
    picture?: string;
}
