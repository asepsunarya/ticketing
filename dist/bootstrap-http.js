"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const express = require("express");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
async function bootstrap(expressInstance, module, path) {
    const app = await core_1.NestFactory.create(module, new platform_express_1.ExpressAdapter(expressInstance));
    app.enableCors();
    app.use((req, res, next) => {
        console.log(new Date(), ' ', req.method, ' ', req.path);
        next();
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Boosticket API')
        .setDescription('API Documentation For Boosticket API')
        .setVersion('1.0')
        .addServer(`${process.env.BASE_URL}/${path}/`)
        .addTag('Boosticket')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.init();
}
class Http {
    constructor(module, name) {
        this.initServer = false;
        this.module = module;
        this.name = name;
        this.server = express();
        this.server;
    }
    start() {
        bootstrap(this.server, this.module, this.name)
            .then(() => {
            this.initServer = true;
            console.log(`Nest ${this.name} Ready`);
        })
            .catch((error) => console.error(error));
        return async (req, res) => {
            while (!this.initServer) {
                await delay(1500);
                console.log(`waiting ${this.name}`);
            }
            return this.server(req, res);
        };
    }
}
exports.Http = Http;
async function delay(delay) {
    return new Promise((resolve) => setTimeout(resolve, delay));
}
//# sourceMappingURL=bootstrap-http.js.map