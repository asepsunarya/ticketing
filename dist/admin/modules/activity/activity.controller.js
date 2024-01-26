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
exports.ActivityController = void 0;
const common_1 = require("@nestjs/common");
const activity_service_1 = require("./activity.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_admin_guard_1 = require("../../../auth/modules/auth/guards/jwt-auth-admin.guard");
const activity_dto_1 = require("./activity.dto");
const param_id_dto_1 = require("../../../global/dto/param-id.dto");
let ActivityController = exports.ActivityController = class ActivityController {
    constructor(activityService) {
        this.activityService = activityService;
    }
    async paginate(query) {
        return await this.activityService.paginate(query);
    }
    async create(body, { user }) {
        return await this.activityService.create(body, user);
    }
    async update(body, { id }) {
        return await this.activityService.update(body, id);
    }
    async delete({ id }) {
        return await this.activityService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activity_dto_1.PaginateActivityDto]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "paginate", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activity_dto_1.CreateActivityDto, Object]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [activity_dto_1.CreateActivityDto, param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], ActivityController.prototype, "delete", null);
exports.ActivityController = ActivityController = __decorate([
    (0, swagger_1.ApiTags)('Activity'),
    (0, common_1.Controller)('activity'),
    __metadata("design:paramtypes", [activity_service_1.ActivityService])
], ActivityController);
//# sourceMappingURL=activity.controller.js.map