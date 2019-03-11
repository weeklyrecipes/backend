"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeController_1 = require("../controllers/RecipeController");
const express_1 = require("express");
/**
 * @class RecipeRouter
 */
class RecipeRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', RecipeController_1.default.getRecipes);
        this.router.post('/', RecipeController_1.default.createRecipe);
        this.router.delete('/:id', RecipeController_1.default.deleteRecipe);
    }
}
exports.default = RecipeRouter;
//# sourceMappingURL=RecipeRouter.js.map