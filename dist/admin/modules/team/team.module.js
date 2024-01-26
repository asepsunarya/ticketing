"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamModule = void 0;
const mongoosePaginate = require("mongoose-paginate-v2");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const team_controller_1 = require("./team.controller");
const team_service_1 = require("./team.service");
const team_model_1 = require("./team.model");
const core_auth_module_1 = require("../../../auth/modules/auth/core.auth.module");
let TeamModule = exports.TeamModule = class TeamModule {
};
exports.TeamModule = TeamModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_auth_module_1.CoreAuthModule,
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: 'team',
                    useFactory: () => {
                        const schema = team_model_1.TeamSchema;
                        schema.plugin(mongoosePaginate);
                        return schema;
                    },
                },
            ]),
        ],
        providers: [team_service_1.TeamService],
        controllers: [team_controller_1.TeamController],
    })
], TeamModule);
//# sourceMappingURL=team.module.js.map