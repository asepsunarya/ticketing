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
import { Project, PaginateProject } from './project.entity';
import { ProjectDocument } from './project.model';
import { AggregatePaginateModel, Model, Types } from 'mongoose';
import { User } from '@/global/entity/user.entity';
import { PeopleService } from '../people/people.service';
export declare class ProjectService {
    private projectModel;
    private peopleService;
    constructor(projectModel: Model<ProjectDocument> & AggregatePaginateModel<ProjectDocument>, peopleService: PeopleService);
    find(query: any): Promise<any>;
    paginate(query: PaginateProject): Promise<import("mongoose").AggregatePaginateResult<ProjectDocument>>;
    create(body: Project, { _id, email }: User): Promise<import("mongoose").Document<unknown, {}, ProjectDocument> & Omit<import("./project.model").ProjectModel & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>>;
    update(body: Project, id: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
