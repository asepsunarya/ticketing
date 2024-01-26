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
exports.ProjectSchema = exports.ProjectModel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
class User {
}
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.Types.ObjectId)
], User.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
let ProjectModel = exports.ProjectModel = class ProjectModel {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProjectModel.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, unique: true, required: true }),
    __metadata("design:type", String)
], ProjectModel.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProjectModel.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", User)
], ProjectModel.prototype, "leader", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", User)
], ProjectModel.prototype, "createdBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: (0, mongoose_2.now)() }),
    __metadata("design:type", Object)
], ProjectModel.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date, default: (0, mongoose_2.now)() }),
    __metadata("design:type", Object)
], ProjectModel.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], ProjectModel.prototype, "picture", void 0);
exports.ProjectModel = ProjectModel = __decorate([
    (0, mongoose_1.Schema)()
], ProjectModel);
exports.ProjectSchema = mongoose_1.SchemaFactory.createForClass(ProjectModel);
//# sourceMappingURL=project.model.js.map