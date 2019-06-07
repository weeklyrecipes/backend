"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PromoController_1 = require("../controllers/PromoController");
const express_1 = require("express");
/**
 * @class PromoRouter
 */
class PromoRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', PromoController_1.default.getCodes);
        this.router.post('/', PromoController_1.default.createCodes);
        // this.router.get('/:id', IngredientController.getIngredient);
        // this.router.put('/:id', IngredientController.editIngredient);
        // this.router.delete('/:id', IngredientController.deleteIngredient);
    }
}
exports.default = PromoRouter;
//# sourceMappingURL=PromoRouter.js.map