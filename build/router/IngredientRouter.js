"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IngredientController_1 = require("../controllers/IngredientController");
const express_1 = require("express");
/**
 * @class IngredientRouter
 */
class IngredientRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', IngredientController_1.default.getIngredients);
        this.router.get('/search', IngredientController_1.default.searchIngredients);
        // this.router.get('/:id', IngredientController.getIngredient);
        // this.router.put('/:id', IngredientController.editIngredient);
        // this.router.delete('/:id', IngredientController.deleteIngredient);
    }
}
exports.default = IngredientRouter;
//# sourceMappingURL=IngredientRouter.js.map