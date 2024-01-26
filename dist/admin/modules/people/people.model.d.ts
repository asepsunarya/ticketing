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
export type PeopleDocument = PeopleModel & Document;
declare class User {
    _id: Types.ObjectId;
    email: string;
}
export declare class PeopleModel {
    projectId: Types.ObjectId;
    userId: Types.ObjectId;
    role: string;
    createdBy: User;
    createdAt: Date;
    updatedAt: Date;
}
export declare const PeopleSchema: import("mongoose").Schema<PeopleModel, import("mongoose").Model<PeopleModel, any, any, any, Document<unknown, any, PeopleModel> & Omit<PeopleModel & {
    _id: Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, PeopleModel, Document<unknown, {}, import("mongoose").FlatRecord<PeopleModel>> & Omit<import("mongoose").FlatRecord<PeopleModel> & {
    _id: Types.ObjectId;
}, never>>;
export {};
