"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authServer = exports.adminServer = void 0;
const admin_app_module_1 = require("./admin/admin-app.module");
const auth_app_module_1 = require("./auth/auth-app.module");
const bootstrap_http_1 = require("./bootstrap-http");
exports.adminServer = new bootstrap_http_1.Http(admin_app_module_1.AdminAppModule, 'admin');
exports.authServer = new bootstrap_http_1.Http(auth_app_module_1.AuthAppModule, 'auth');
//# sourceMappingURL=functions-http.js.map