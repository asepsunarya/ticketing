export declare class PaginateActivityDto {
    page: number;
    limit: number;
    search?: string;
}
export declare class CreateActivityDto {
    ticketId: string;
    description: string;
    teamId?: string;
}
