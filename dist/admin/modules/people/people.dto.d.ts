export declare class PaginatePeopleDto {
    page: number;
    limit: number;
    projectId: string;
    search?: string;
}
export declare class CreatePeopleDto {
    projectId: string;
    userId: string;
    role: string;
}
