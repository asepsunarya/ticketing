"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamMemberController = void 0;
const common_1 = require("@nestjs/common");
const team_member_service_1 = require("./team-member.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_admin_guard_1 = require("../../../auth/modules/auth/guards/jwt-auth-admin.guard");
const team_member_dto_1 = require("./team-member.dto");
const param_id_dto_1 = require("../../../global/dto/param-id.dto");
let TeamMemberController = exports.TeamMemberController = class TeamMemberController {
    constructor(teamMemberService) {
        this.teamMemberService = teamMemberService;
    }
    async paginate(query) {
        return await this.teamMemberService.paginate(query);
    }
    async create(body, { user }) {
        return await this.teamMemberService.create(body, user);
    }
    async update(body, { id }) {
        return await this.teamMemberService.update(body, id);
    }
    async delete({ id }) {
        return await this.teamMemberService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_member_dto_1.PaginateTeamMemberDto]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "paginate", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_member_dto_1.CreateTeamMemberDto, Object]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [team_member_dto_1.CreateTeamMemberDto, param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], TeamMemberController.prototype, "delete", null);
exports.TeamMemberController = TeamMemberController = __decorate([
    (0, swagger_1.ApiTags)('Team Member'),
    (0, common_1.Controller)('team-member'),
    __metadata("design:paramtypes", [team_member_service_1.TeamMemberService])
], TeamMemberController);
//# sourceMappingURL=team-member.controller.js.map