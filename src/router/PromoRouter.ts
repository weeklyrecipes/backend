import PromoController from '../controllers/PromoController';
import { Router } from 'express';

/**
 * @class PromoRouter
 */

export default class PromoRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', PromoController.getCodes);
        this.router.post('/', PromoController.createCodes);
        // this.router.get('/:id', IngredientController.getIngredient);
        // this.router.put('/:id', IngredientController.editIngredient);
        // this.router.delete('/:id', IngredientController.deleteIngredient);
    }
}
