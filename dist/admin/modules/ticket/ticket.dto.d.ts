import { PaginationDto } from '@/global/dto/pagination.dto';
import { UserDto } from '@/global/dto/user.dto';
export declare class PaginateTicketDto extends PaginationDto {
    projectId: string;
    year: string;
    status?: string;
    search?: string;
    isAssigned?: boolean;
}
export declare class CreateTicketDto {
    projectId: string;
    feature: string;
    description: string;
    email: string;
    urgencyLevel: string;
    reportBy: UserDto;
    releaseStatus: string;
    status: string;
    assignedBy?: UserDto;
    files?: string[];
    solution?: string;
    note?: string;
}
