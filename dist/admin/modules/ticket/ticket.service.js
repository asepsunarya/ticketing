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
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let TicketService = exports.TicketService = class TicketService {
    constructor(ticketModel) {
        this.ticketModel = ticketModel;
    }
    async paginate(query, userId) {
        const filter = {
            projectId: new mongoose_2.Types.ObjectId(query.projectId),
            createdAt: {
                $gte: new Date(Number(query.year), 0, 1),
                $lt: new Date(Number(query.year) + 1, 0, 1),
            },
        };
        if (query.status != 'me' && query.status != 'undefined') {
            filter['status'] = query.status;
        }
        else if (query.status == 'me') {
            filter['assignedBy._id'] = new mongoose_2.Types.ObjectId(userId);
        }
        if (query.search) {
            filter['$or'] = [
                { feature: new RegExp(query.search, 'i') },
                { description: new RegExp(query.search, 'i') },
            ];
        }
        if (query.isAssigned)
            filter['assignedBy'] = { $exists: false };
        return await this.ticketModel.paginate(filter, {
            page: query.page,
            limit: query.limit,
        });
    }
    async findOne(id) {
        return await this.ticketModel.findOne({ _id: new mongoose_2.Types.ObjectId(id) });
    }
    async count(projectId, user) {
        const [all, me, open, inprogress, closed, pending] = await Promise.all([
            this.generateCount(projectId, 'all'),
            this.generateCount(projectId, 'all', user._id),
            this.generateCount(projectId, 'open'),
            this.generateCount(projectId, 'inprogress'),
            this.generateCount(projectId, 'closed'),
            this.generateCount(projectId, 'pending'),
        ]);
        return { all, me, open, inprogress, closed, pending };
    }
    async create(body, { _id, name, email, photo }) {
        var _a;
        const ticket = Object.assign(Object.assign({}, body), { projectId: new mongoose_2.Types.ObjectId(body.projectId), reportBy: {
                _id: new mongoose_2.Types.ObjectId(body.reportBy._id),
                name: body.reportBy.name,
                email: body.reportBy.email,
                photo: body.reportBy.photo,
            }, createdBy: {
                _id: new mongoose_2.Types.ObjectId(_id),
                name,
                email,
                photo,
            } });
        if ((_a = body.assignedBy) === null || _a === void 0 ? void 0 : _a._id) {
            ticket['assignedBy._id'] = new mongoose_2.Types.ObjectId(body.assignedBy._id);
        }
        return await this.ticketModel.create(ticket);
    }
    async update(body, id, user) {
        var _a, _b, _c, _d, _e;
        const ticket = Object.assign(Object.assign({}, body), { lastUpdatedBy: {
                _id: new mongoose_2.Types.ObjectId(user === null || user === void 0 ? void 0 : user._id),
                name: user === null || user === void 0 ? void 0 : user.name,
                email: user === null || user === void 0 ? void 0 : user.email,
                photo: user === null || user === void 0 ? void 0 : user.photo,
            } });
        if ((_a = body.assignedBy) === null || _a === void 0 ? void 0 : _a._id) {
            ticket['assignedBy'] = {
                _id: new mongoose_2.Types.ObjectId((_b = body.assignedBy) === null || _b === void 0 ? void 0 : _b._id),
                name: (_c = body.assignedBy) === null || _c === void 0 ? void 0 : _c.name,
                email: (_d = body.assignedBy) === null || _d === void 0 ? void 0 : _d.email,
                photo: (_e = body.assignedBy) === null || _e === void 0 ? void 0 : _e.photo,
            };
        }
        return await this.ticketModel.updateOne({ _id: new mongoose_2.Types.ObjectId(id) }, { $set: ticket });
    }
    async delete(id) {
        return await this.ticketModel.deleteOne({ _id: new mongoose_2.Types.ObjectId(id) });
    }
    async generateCount(projectId, status, userId) {
        const query = { projectId: new mongoose_2.Types.ObjectId(projectId) };
        if (status != 'all')
            query['status'] = status;
        if (userId)
            query['assignedBy._id'] = new mongoose_2.Types.ObjectId(userId);
        return this.ticketModel.countDocuments(query);
    }
};
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('ticket')),
    __metadata("design:paramtypes", [Object])
], TicketService);
//# sourceMappingURL=ticket.service.js.map