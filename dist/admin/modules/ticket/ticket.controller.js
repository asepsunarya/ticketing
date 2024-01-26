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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const swagger_1 = require("@nestjs/swagger");
const jwt_auth_admin_guard_1 = require("../../../auth/modules/auth/guards/jwt-auth-admin.guard");
const ticket_dto_1 = require("./ticket.dto");
const param_id_dto_1 = require("../../../global/dto/param-id.dto");
let TicketController = exports.TicketController = class TicketController {
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    async paginate(query, { user }) {
        return await this.ticketService.paginate(query, String(user._id));
    }
    async detail({ id }) {
        return await this.ticketService.findOne(id);
    }
    async countTicket({ id }, { user }) {
        return await this.ticketService.count(id, user);
    }
    async create(body, { user }) {
        return await this.ticketService.create(body, user);
    }
    async update(body, { id }, { user }) {
        return await this.ticketService.update(body, id, user);
    }
    async delete({ id }) {
        return await this.ticketService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.PaginateTicketDto, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "paginate", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "detail", null);
__decorate([
    (0, common_1.Get)('count/:id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [param_id_dto_1.ParamIdDto, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "countTicket", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.CreateTicketDto, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "create", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [ticket_dto_1.CreateTicketDto,
        param_id_dto_1.ParamIdDto, Object]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.UseGuards)(jwt_auth_admin_guard_1.JwtAuthGuardAdmin),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [param_id_dto_1.ParamIdDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "delete", null);
exports.TicketController = TicketController = __decorate([
    (0, swagger_1.ApiTags)('Ticket'),
    (0, common_1.Controller)('ticket'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
//# sourceMappingURL=ticket.controller.js.map