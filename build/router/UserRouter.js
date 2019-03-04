"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UserController_1 = require("../controllers/UserController");
var express_1 = require("express");
/**
 * @class UserRouter
 */
var UserRouter = /** @class */ (function () {
    function UserRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    UserRouter.prototype.routes = function () {
        this.router.get('/:id', UserController_1.default.getUser);
        this.router.post('/', UserController_1.default.createUser);
    };
    return UserRouter;
}());
exports.default = UserRouter;
//# sourceMappingURL=UserRouter.js.map