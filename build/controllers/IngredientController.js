"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = require('../helpers/ingredients.json');
var IngredientController = /** @class */ (function () {
    function IngredientController() {
    }
    /**
    * @param  {express.Request} req
    * @param  {express.Response} res
    * @param  {express.NextFunction} next
    */
    IngredientController.prototype.getIngredients = function (req, res, next) {
        res.status(200).json(data);
    };
    /**
    * @param  {express.Request} req
    * @param  {express.Response} res
    * @param  {express.NextFunction} next
    */
    IngredientController.prototype.editIngredient = function (req, res, next) {
    };
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    IngredientController.prototype.searchIngredients = function (req, res, next) {
        // console.log(req.query)
        // console.log(data)
        var searchArg = req.query.searchArg.toLowerCase();
        var ingredientsFiltered = data.filter(function (ingredient) { return ingredient.name.toLowerCase().search(searchArg) >= 0; });
        res.status(200).json(ingredientsFiltered);
        // res.status(200).json({hey: 2})
    };
    return IngredientController;
}());
exports.default = new IngredientController();
//# sourceMappingURL=IngredientController.js.map