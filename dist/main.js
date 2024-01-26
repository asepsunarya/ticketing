"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const expressFileUpload = require("express-fileupload");
const timeout = require("connect-timeout");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const functions_http_1 = require("./functions-http");
dotenv.config();
const PORT = 80;
const server = express();
server.use(expressFileUpload({
    limits: { fileSize: 8 * (1024 * 1024) },
    abortOnLimit: true,
}));
server.use(timeout('300s'));
server.use(bodyParser.json({ limit: '25mb' }));
server.use(bodyParser.urlencoded({ limit: '25mb', extended: true }));
server.use('/admin', functions_http_1.adminServer.start());
server.use('/auth', functions_http_1.authServer.start());
server.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at port ${PORT}`, new Date());
});
//# sourceMappingURL=main.js.map