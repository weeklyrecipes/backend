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
        this.router.put('/:id', UserController_1.default.editUser);
        this.router.put('/:id/code', UserController_1.default.enterCode);
        this.router.put('/:id/activate', UserController_1.default.activate);
    }
}
exports.default = UserRouter;
//# sourceMappingURL=UserRouter.js.map