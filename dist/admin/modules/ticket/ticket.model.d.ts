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
import { Date, Document, Types } from 'mongoose';
export type TicketDocument = TicketModel & Document;
declare class User {
    _id: Types.ObjectId;
    email: string;
}
export declare class TicketModel {
    projectId: Types.ObjectId;
    feature: string;
    description: string;
    email: string;
    urgencyLevel: string;
    reportBy: User;
    releaseStatus: string;
    status: string;
    createdBy: User;
    createdAt: Date;
    updatedAt: Date;
    files: string[];
    assignedBy?: User;
    lastUpdatedBy?: User;
    solution?: string;
    reason?: string;
    note?: string;
}
export declare const TicketSchema: import("mongoose").Schema<TicketModel, import("mongoose").Model<TicketModel, any, any, any, Document<unknown, any, TicketModel> & Omit<TicketModel & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, TicketModel, Document<unknown, {}, import("mongoose").FlatRecord<TicketModel>> & Omit<import("mongoose").FlatRecord<TicketModel> & {
    _id: Types.ObjectId;
}, never>>;
export {};
