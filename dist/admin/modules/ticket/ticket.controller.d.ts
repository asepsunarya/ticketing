/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="@types/mongoose-aggregate-paginate-v2" />
/// <reference types="mongoose-paginate-v2" />
import { TicketService } from './ticket.service';
import { CreateTicketDto, PaginateTicketDto } from './ticket.dto';
import { ParamIdDto } from '@/global/dto/param-id.dto';
import { User } from '@/global/entity/user.entity';
export declare class TicketController {
    private readonly ticketService;
    constructor(ticketService: TicketService);
    paginate(query: PaginateTicketDto, { user }: {
        user: User;
    }): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, import("./ticket.model").TicketDocument> & Omit<import("./ticket.model").TicketModel & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>>;
    detail({ id }: ParamIdDto): Promise<import("mongoose").Document<unknown, {}, import("./ticket.model").TicketDocument> & Omit<import("./ticket.model").TicketModel & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    countTicket({ id }: ParamIdDto, { user }: {
        user: any;
    }): Promise<{
        all: number;
        me: number;
        open: number;
        inprogress: number;
        closed: number;
        pending: number;
    }>;
    create(body: CreateTicketDto, { user }: {
        user: any;
    }): Promise<import("mongoose").Document<unknown, {}, import("./ticket.model").TicketDocument> & Omit<import("./ticket.model").TicketModel & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(body: CreateTicketDto, { id }: ParamIdDto, { user }: {
        user: any;
    }): Promise<import("mongoose").UpdateWriteOpResult>;
    delete({ id }: ParamIdDto): Promise<import("mongodb").DeleteResult>;
}
