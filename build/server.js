"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const routes_1 = require("./router/routes");
const middleware_1 = require("./config/middleware");
const cron_1 = require("./config/cron");
/**
 * @class Server
 */
class Server {
    constructor() {
        this.app = express();
        cron_1.default.init();
        middleware_1.default.init(this);
        routes_1.default.init(this);
    }
}
exports.Server = Server;
// export
exports.default = new Server().app;
//# sourceMappingURL=server.js.map