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
import { People, PaginatePeople } from './people.entity';
import { PeopleDocument } from './people.model';
import { Model, AggregatePaginateModel, Types } from 'mongoose';
import { User } from '@/global/entity/user.entity';
export declare class PeopleService {
    private peopleModel;
    constructor(peopleModel: Model<PeopleDocument> & AggregatePaginateModel<PeopleDocument>);
    paginate(query: PaginatePeople): Promise<import("mongoose").AggregatePaginateResult<PeopleDocument>>;
    create(body: People, { _id, email }: User): Promise<import("mongoose").Document<unknown, {}, PeopleDocument> & Omit<import("./people.model").PeopleModel & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>>;
    update(body: People, id: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
