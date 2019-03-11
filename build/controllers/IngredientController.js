"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = require('../helpers/ingredients.json');
class IngredientController {
    /**
    * @param  {express.Request} req
    * @param  {express.Response} res
    * @param  {express.NextFunction} next
    */
    getIngredients(req, res, next) {
        res.status(200).json(data);
    }
    /**
    * @param  {express.Request} req
    * @param  {express.Response} res
    * @param  {express.NextFunction} next
    */
    editIngredient(req, res, next) {
    }
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    searchIngredients(req, res, next) {
        // console.log(req.query)
        // console.log(data)
        let searchArg = req.query.searchArg.toLowerCase();
        let ingredientsFiltered = data.filter((ingredient) => ingredient.name.toLowerCase().search(searchArg) >= 0);
        res.status(200).json(ingredientsFiltered);
        // res.status(200).json({hey: 2})
    }
}
exports.default = new IngredientController();
//# sourceMappingURL=IngredientController.js.map