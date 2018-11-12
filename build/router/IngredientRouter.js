"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IngredientController_1 = require("../controllers/IngredientController");
var express_1 = require("express");
/**
 * @class IngredientRouter
 */
var IngredientRouter = /** @class */ (function () {
    function IngredientRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    IngredientRouter.prototype.routes = function () {
        this.router.get('/', IngredientController_1.default.getIngredients);
        this.router.get('/search', IngredientController_1.default.searchIngredients);
    };
    return IngredientRouter;
}());
exports.default = IngredientRouter;
//# sourceMappingURL=IngredientRouter.js.map