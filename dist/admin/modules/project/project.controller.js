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
exports.ProjectController = void 0;
const common_1 = require("@nestjs/common");
const project_service_1 = require("./project.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_admin_guard_1 = require("../../../auth/modules/auth/guards/jwt-auth-admin.guard");
const project_dto_1 = require("./project.dto");
const param_id_dto_1 = require("../../../global/dto/param-id.dto");
let ProjectController = exports.ProjectController = class ProjectController {
    constructor(projectService) {
        this.projectService = projectService;
    }
    async get({ id }) {
        return await this.projectService.find({ code: id });
    }
    async paginate(query) {
        return await this.projectService.paginate(query);
    }
    async create(body, { user }) {
        return await this.projectService.create(body, user);
    }
    async update(body, { id }) {
        return await this.projectService.update(body, id);
    }
    async delete({ id }) {
        return await this.projectService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "get", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_dto_1.PaginateProjectDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "paginate", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_dto_1.CreateProjectDto, Object]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [project_dto_1.CreateProjectDto, param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], ProjectController.prototype, "delete", null);
exports.ProjectController = ProjectController = __decorate([
    (0, swagger_1.ApiTags)('Project'),
    (0, common_1.Controller)('project'),
    __metadata("design:paramtypes", [project_service_1.ProjectService])
], ProjectController);
//# sourceMappingURL=project.controller.js.map