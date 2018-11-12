// import IngredientModel from '../models/IngredientModel';
// import calulcateIngredient from '../helpers/calculateIngredient';
import * as express from 'express';
var data = require('../helpers/ingredients.json');

class IngredientController {
     /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public getIngredients(req: express.Request, res: express.Response, next: express.NextFunction): void {
        // IngredientModel
        //     .find({})
        //     .then((data) => {
        //         res.status(200).json({ data });
        //     })
        //     .catch((error: Error) => {
        //         res.status(500).json({
        //             error: error.message,
        //             errorStack: error.stack
        //         });
        //         next(error);
        //     });
    }

    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    public searchIngredients(req: express.Request, res: express.Response, next: express.NextFunction): void {
      // console.log(req.query)
      // console.log(data)
      let searchArg = req.query.searchArg.toLowerCase();
      let ingredientsFiltered = data.filter((ingredient: any) => ingredient.name.toLowerCase().search(searchArg) >= 0);
      res.status(200).json(ingredientsFiltered);
      // res.status(200).json({hey: 2})
    }
}

export default new IngredientController();
