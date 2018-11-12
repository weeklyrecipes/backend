import RecipeModel from '../models/RecipeModel';
// import calulcateRecipe from '../helpers/calculateRecipe';
import * as express from 'express';

class RecipeController {
     /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getRecipes(req: express.Request, res: express.Response, next: express.NextFunction): void {
        console.log("Arrived here")
        RecipeModel
            .find({})
            .then((data) => {
              // console.log("ney")
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
        RecipeModel
            .create({
                ingredients: req.body.ingredients,
                name: req.body.name,
                photo_url: req.body.photo_url,
                instructions: req.body.instructions,
                type: req.body.type
            })
            .then((data) => {
                res.status(200).json({ data });
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
