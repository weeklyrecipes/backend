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
        res.status(200).json(data);
    }

      /**
      * @param  {express.Request} req
      * @param  {express.Response} res
      * @param  {express.NextFunction} next
      */
     public editIngredient(req: express.Request, res: express.Response, next: express.NextFunction): void {
         data[req.query.id].
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
