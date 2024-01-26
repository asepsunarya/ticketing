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
exports.ActivityService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ActivityService = exports.ActivityService = class ActivityService {
    constructor(activityModel) {
        this.activityModel = activityModel;
    }
    async paginate(query) {
        const filter = {};
        if (query.search)
            filter['search'] = query.search;
        return await this.activityModel.paginate(filter, {
            page: query.page,
            limit: query.limit,
        });
    }
    async create(body, { _id, email }) {
        const activity = Object.assign(Object.assign({}, body), { createdBy: {
                _id: new mongoose_2.Types.ObjectId(_id),
                email,
            } });
        return await this.activityModel.create(activity);
    }
    async update(body, id) {
        return await this.activityModel.updateOne({ _id: new mongoose_2.Types.ObjectId(id) }, { $set: body });
    }
    async delete(id) {
        return await this.activityModel.deleteOne({
            _id: new mongoose_2.Types.ObjectId(id),
        });
    }
};
exports.ActivityService = ActivityService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('activity')),
    __metadata("design:paramtypes", [Object])
], ActivityService);
//# sourceMappingURL=activity.service.js.map