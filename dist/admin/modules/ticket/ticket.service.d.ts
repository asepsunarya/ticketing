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
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="@types/mongoose-aggregate-paginate-v2" />
/// <reference types="mongoose-paginate-v2" />
import { Ticket, PaginateTicket } from './ticket.entity';
import { TicketDocument } from './ticket.model';
import { Model, PaginateModel, Types } from 'mongoose';
import { User } from '@/global/entity/user.entity';
export declare class TicketService {
    private ticketModel;
    constructor(ticketModel: Model<TicketDocument> & PaginateModel<TicketDocument>);
    paginate(query: PaginateTicket, userId: string): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, TicketDocument> & Omit<import("./ticket.model").TicketModel & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>>>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, TicketDocument> & Omit<import("./ticket.model").TicketModel & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>>;
    count(projectId: string, user: User): Promise<{
        all: number;
        me: number;
        open: number;
        inprogress: number;
        closed: number;
        pending: number;
    }>;
    create(body: Ticket, { _id, name, email, photo }: User): Promise<import("mongoose").Document<unknown, {}, TicketDocument> & Omit<import("./ticket.model").TicketModel & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>>;
    update(body: Ticket, id: string, user: User): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
    generateCount(projectId: string, status?: string, userId?: string | Types.ObjectId): Promise<number>;
}
