import IngredientController from '../controllers/IngredientController';
import { Router } from 'express';

/**
 * @class IngredientRouter
 */

export default class IngredientRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', IngredientController.getIngredients);
        this.router.get('/search', IngredientController.searchIngredients);
        // this.router.get('/:id', IngredientController.getIngredient);
        // this.router.put('/:id', IngredientController.editIngredient);
        // this.router.delete('/:id', IngredientController.deleteIngredient);
    }
}
