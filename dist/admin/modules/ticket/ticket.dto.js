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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTicketDto = exports.PaginateTicketDto = void 0;
const pagination_dto_1 = require("../../../global/dto/pagination.dto");
const user_dto_1 = require("../../../global/dto/user.dto");
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class PaginateTicketDto extends pagination_dto_1.PaginationDto {
}
exports.PaginateTicketDto = PaginateTicketDto;
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], PaginateTicketDto.prototype, "projectId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '2024' }),
    __metadata("design:type", String)
], PaginateTicketDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], PaginateTicketDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: '', required: false }),
    __metadata("design:type", String)
], PaginateTicketDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: false, required: false }),
    __metadata("design:type", Boolean)
], PaginateTicketDto.prototype, "isAssigned", void 0);
class CreateTicketDto {
}
exports.CreateTicketDto = CreateTicketDto;
__decorate([
    (0, swagger_1.ApiProperty)({ default: '658d2611d9a82ee5abff1fef' }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "projectId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "feature", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({ default: '' }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'user@manypage.id' }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 1 }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "urgencyLevel", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", user_dto_1.UserDto)
], CreateTicketDto.prototype, "reportBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'old' }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "releaseStatus", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ default: 'open' }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: user_dto_1.UserDto }),
    __metadata("design:type", user_dto_1.UserDto)
], CreateTicketDto.prototype, "assignedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateTicketDto.prototype, "files", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "solution", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false }),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "note", void 0);
//# sourceMappingURL=ticket.dto.js.map