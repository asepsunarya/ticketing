"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ticket_module_1 = require("./modules/ticket/ticket.module");
const project_module_1 = require("./modules/project/project.module");
const people_module_1 = require("./modules/people/people.module");
const team_module_1 = require("./modules/team/team.module");
const team_member_module_1 = require("./modules/team-member/team-member.module");
const activity_module_1 = require("./modules/activity/activity.module");
const user_module_1 = require("../auth/modules/user/user.module");
let AdminAppModule = exports.AdminAppModule = class AdminAppModule {
};
exports.AdminAppModule = AdminAppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forRoot('mongodb://mongo:1fdfhgFAHe6B24EBf5GBBg3fA56aHB1G@roundhouse.proxy.rlwy.net:39285'),
            ticket_module_1.TicketModule,
            project_module_1.ProjectModule,
            people_module_1.PeopleModule,
            team_module_1.TeamModule,
            team_member_module_1.TeamMemberModule,
            activity_module_1.ActivityModule,
            user_module_1.UserModule,
        ],
    })
], AdminAppModule);
//# sourceMappingURL=admin-app.module.js.map