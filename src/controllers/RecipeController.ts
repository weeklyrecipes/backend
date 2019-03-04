import RecipeModel from '../models/RecipeModel';
import * as express from 'express';
import { calculateRecipes } from '../helpers/calculateRecipe';

class RecipeController {
     /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getRecipes(req: express.Request, res: express.Response, next: express.NextFunction): void {
        RecipeModel
            .find({})
            .then((data) => {
                calculateRecipes();
                res.status(200).json({ data });
            })
            .catch((error: Error) => {
              console.log("error")
              console.log(error)
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack
                });
                next(error);
            });
    }

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public createRecipe(req: express.Request, res: express.Response, next: express.NextFunction): void {
        let ingredients = req.body.ingredients;
        let macros = {};
        let i = 0;
        while (ingredients[i]) {
          if (macros[ingredients[i].macroType]) {
            macros[ingredients[i].macroType].push(ingredients[i]);
          }
          else {
            macros[ingredients[i].macroType] = [ingredients[i]];
          }
          i++;
        }
        RecipeModel
            .create({
                ingredients: req.body.ingredients,
                name: req.body.name,
                photo_url: req.body.photo_url,
                instructions: req.body.instructions,
                type: req.body.type,
                macro: macros
            })
            .then((recipe) => {
                // calculateRecipe(recipe);
                // recipe.save();
                res.status(200).json({ recipe });
            })
            .catch((error: Error) => {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack
                });
                next(error);
            });
    }

    public deleteRecipe(req: express.Request, res: express.Response, next: express.NextFunction): void {
        RecipeModel.remove({_id: req.params.id})
            .then((recipe) => {
                res.status(200).json({ recipe });
            })
            .catch((error: Error) => {
                res.status(500).json({
                    error: error.message,
                    errorStack: error.stack
                });
                next(error);
            });
    }
}

export default new RecipeController();
