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
import { PeopleService } from './people.service';
import { CreatePeopleDto, PaginatePeopleDto } from './people.dto';
import { ParamIdDto } from '@/global/dto/param-id.dto';
export declare class PeopleController {
    private readonly peopleService;
    constructor(peopleService: PeopleService);
    paginate(query: PaginatePeopleDto): Promise<import("mongoose").AggregatePaginateResult<import("./people.model").PeopleDocument>>;
    create(body: CreatePeopleDto, { user }: {
        user: any;
    }): Promise<import("mongoose").Document<unknown, {}, import("./people.model").PeopleDocument> & Omit<import("./people.model").PeopleModel & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(body: CreatePeopleDto, { id }: ParamIdDto): Promise<import("mongoose").UpdateWriteOpResult>;
    delete({ id }: ParamIdDto): Promise<import("mongodb").DeleteResult>;
}
