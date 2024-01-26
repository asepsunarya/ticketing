"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModule = void 0;
const mongoosePaginate = require("mongoose-paginate-v2");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const ticket_controller_1 = require("./ticket.controller");
const ticket_service_1 = require("./ticket.service");
const ticket_model_1 = require("./ticket.model");
const core_auth_module_1 = require("../../../auth/modules/auth/core.auth.module");
let TicketModule = exports.TicketModule = class TicketModule {
};
exports.TicketModule = TicketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            core_auth_module_1.CoreAuthModule,
            mongoose_1.MongooseModule.forFeatureAsync([
                {
                    name: 'ticket',
                    useFactory: () => {
                        const schema = ticket_model_1.TicketSchema;
                        schema.plugin(mongoosePaginate);
                        return schema;
                    },
                },
            ]),
        ],
        providers: [ticket_service_1.TicketService],
        controllers: [ticket_controller_1.TicketController],
    })
], TicketModule);
//# sourceMappingURL=ticket.module.js.map