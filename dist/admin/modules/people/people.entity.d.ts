import { Types } from 'mongoose';
export declare class PaginatePeople {
    page: number;
    limit: number;
    projectId: string;
    search?: string;
}
export declare class People {
    projectId: string;
    userId: string | Types.ObjectId;
    role: string;
}
