"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserController_1 = require("../controllers/UserController");
const express_1 = require("express");
/**
 * @class UserRouter
 */
class UserRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/:id', UserController_1.default.getUser);
        this.router.post('/', UserController_1.default.createUser);
    }
}
exports.default = UserRouter;
//# sourceMappingURL=UserRouter.js.map