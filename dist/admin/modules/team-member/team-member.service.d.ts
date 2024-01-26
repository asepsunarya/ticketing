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
import { TeamMember, PaginateTeamMember } from './team-member.entity';
import { TeamMemberDocument } from './team-member.model';
import { Model, PaginateModel, Types } from 'mongoose';
import { User } from '@/global/entity/user.entity';
export declare class TeamMemberService {
    private teamMemberModel;
    constructor(teamMemberModel: Model<TeamMemberDocument> & PaginateModel<TeamMemberDocument>);
    paginate(query: PaginateTeamMember): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, TeamMemberDocument> & Omit<import("./team-member.model").TeamMemberModel & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>>>;
    create(body: TeamMember, { _id, email }: User): Promise<import("mongoose").Document<unknown, {}, TeamMemberDocument> & Omit<import("./team-member.model").TeamMemberModel & import("mongoose").Document<any, any, any> & {
        _id: Types.ObjectId;
    }, never>>;
    update(body: TeamMember, id: string): Promise<import("mongoose").UpdateWriteOpResult>;
    delete(id: string): Promise<import("mongodb").DeleteResult>;
}
