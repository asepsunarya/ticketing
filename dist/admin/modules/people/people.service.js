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
exports.PeopleService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PeopleService = exports.PeopleService = class PeopleService {
    constructor(peopleModel) {
        this.peopleModel = peopleModel;
    }
    async paginate(query) {
        const filter = {
            projectId: new mongoose_2.Types.ObjectId(query.projectId),
        };
        const searchFilter = {};
        if (query.search)
            searchFilter['$or'] = [
                { name: new RegExp(query.search, 'i') },
                { email: new RegExp(query.search, 'i') },
            ];
        const pipeline = this.peopleModel.aggregate([
            {
                $match: filter,
            },
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'user',
                },
            },
            {
                $unwind: '$user',
            },
            {
                $project: {
                    role: '$role',
                    userId: '$user._id',
                    name: '$user.name',
                    email: '$user.email',
                    photo: '$user.photo',
                },
            },
            { $match: searchFilter },
        ]);
        return await this.peopleModel.aggregatePaginate(pipeline, {
            page: query.page,
            limit: query.limit,
        });
    }
    async create(body, { _id, email }) {
        const people = Object.assign(Object.assign({}, body), { userId: new mongoose_2.Types.ObjectId(body.userId), projectId: new mongoose_2.Types.ObjectId(body.projectId), createdBy: {
                _id: new mongoose_2.Types.ObjectId(_id),
                email,
            } });
        return await this.peopleModel.create(people);
    }
    async update(body, id) {
        return await this.peopleModel.updateOne({ _id: new mongoose_2.Types.ObjectId(id) }, { $set: body });
    }
    async delete(id) {
        return await this.peopleModel.deleteOne({ _id: new mongoose_2.Types.ObjectId(id) });
    }
};
exports.PeopleService = PeopleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('people')),
    __metadata("design:paramtypes", [Object])
], PeopleService);
//# sourceMappingURL=people.service.js.map