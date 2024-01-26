"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberModule = void 0;
const mongoosePaginate = require("mongoose-paginate-v2");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const team_member_controller_1 = require("./team-member.controller");
const team_member_service_1 = require("./team-member.service");
const team_member_model_1 = require("./team-member.model");
const core_auth_module_1 = require("../../../auth/modules/auth/core.auth.module");
let TeamMemberModule = exports.TeamMemberModule = class TeamMemberModule {
};
exports.TeamMemberModule = TeamMemberModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_auth_module_1.CoreAuthModule,
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: 'team-member',
                    useFactory: () => {
                        const schema = team_member_model_1.TeamMemberSchema;
                        schema.plugin(mongoosePaginate);
                        return schema;
                    },
                },
            ]),
        ],
        providers: [team_member_service_1.TeamMemberService],
        controllers: [team_member_controller_1.TeamMemberController],
    })
], TeamMemberModule);
//# sourceMappingURL=team-member.module.js.map