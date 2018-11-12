"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecipeController_1 = require("../controllers/RecipeController");
var express_1 = require("express");
/**
 * @class RecipeRouter
 */
var RecipeRouter = /** @class */ (function () {
    function RecipeRouter() {
        this.router = express_1.Router();
        this.routes();
    }
    RecipeRouter.prototype.routes = function () {
        this.router.get('/', RecipeController_1.default.getRecipes);
        this.router.post('/', RecipeController_1.default.createRecipe);
    };
    return RecipeRouter;
}());
exports.default = RecipeRouter;
//# sourceMappingURL=RecipeRouter.js.map