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
import { TeamMemberService } from './team-member.service';
import { CreateTeamMemberDto, PaginateTeamMemberDto } from './team-member.dto';
import { ParamIdDto } from '@/global/dto/param-id.dto';
export declare class TeamMemberController {
    private readonly teamMemberService;
    constructor(teamMemberService: TeamMemberService);
    paginate(query: PaginateTeamMemberDto): Promise<import("mongoose").PaginateResult<import("mongoose").Document<unknown, import("mongoose").PaginateOptions, import("./team-member.model").TeamMemberDocument> & Omit<import("./team-member.model").TeamMemberModel & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>>;
    create(body: CreateTeamMemberDto, { user }: {
        user: any;
    }): Promise<import("mongoose").Document<unknown, {}, import("./team-member.model").TeamMemberDocument> & Omit<import("./team-member.model").TeamMemberModel & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    update(body: CreateTeamMemberDto, { id }: ParamIdDto): Promise<import("mongoose").UpdateWriteOpResult>;
    delete({ id }: ParamIdDto): Promise<import("mongodb").DeleteResult>;
}
