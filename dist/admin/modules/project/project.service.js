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
exports.ProjectService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const people_service_1 = require("../people/people.service");
let ProjectService = exports.ProjectService = class ProjectService {
    constructor(projectModel, peopleService) {
        this.projectModel = projectModel;
        this.peopleService = peopleService;
    }
    async find(query) {
        const results = await this.projectModel.aggregate([
            { $match: query },
            {
                $lookup: {
                    from: 'users',
                    localField: 'leader._id',
                    foreignField: '_id',
                    as: 'leader',
                },
            },
            {
                $unwind: '$leader',
            },
        ]);
        return results[0] || {};
    }
    async paginate(query) {
        const filter = {};
        if (query.search)
            filter['name'] = new RegExp(query.search, 'i');
        const pipeline = this.projectModel.aggregate([
            { $match: filter },
            {
                $lookup: {
                    from: 'users',
                    localField: 'leader._id',
                    foreignField: '_id',
                    as: 'leader',
                },
            },
            {
                $unwind: '$leader',
            },
        ]);
        return await this.projectModel.aggregatePaginate(pipeline, {
            page: query.page,
            limit: query.limit,
        });
    }
    async create(body, { _id, email }) {
        const project = Object.assign(Object.assign({}, body), { leader: {
                _id: new mongoose_2.Types.ObjectId(body.leader._id),
                email: body.leader.email,
            }, createdBy: {
                _id: new mongoose_2.Types.ObjectId(_id),
                email,
            } });
        const result = await this.projectModel.create(project);
        const people = {
            projectId: result._id,
            userId: _id,
            role: 'admin',
        };
        await this.peopleService.create(people, { _id, email });
        return result;
    }
    async update(body, id) {
        return await this.projectModel.updateOne({ _id: new mongoose_2.Types.ObjectId(id) }, {
            $set: Object.assign(Object.assign({}, body), { leader: {
                    _id: new mongoose_2.Types.ObjectId(body.leader._id),
                    email: body.leader.email,
                } }),
        });
    }
    async delete(id) {
        return await this.projectModel.deleteOne({ _id: new mongoose_2.Types.ObjectId(id) });
    }
};
exports.ProjectService = ProjectService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('project')),
    __metadata("design:paramtypes", [Object, people_service_1.PeopleService])
], ProjectService);
//# sourceMappingURL=project.service.js.map