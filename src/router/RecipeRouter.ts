import RecipeController from '../controllers/RecipeController';
import { Router } from 'express';
/**
 * @class RecipeRouter
 */
export default class RecipeRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    public routes(): void {
        this.router.get('/', RecipeController.getRecipes);
        this.router.post('/', RecipeController.createRecipe);
        this.router.delete('/:id', RecipeController.deleteRecipe);
    }
}
