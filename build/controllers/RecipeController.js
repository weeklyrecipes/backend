"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecipeModel_1 = require("../models/RecipeModel");
var RecipeController = /** @class */ (function () {
    function RecipeController() {
    }
    /**
    * @param  {express.Request} req
    * @param  {express.Response} res
    * @param  {express.NextFunction} next
    */
    RecipeController.prototype.getRecipes = function (req, res, next) {
        console.log("Arrived here");
        RecipeModel_1.default
            .find({})
            .then(function (data) {
            // console.log("ney")
            res.status(200).json({ data: data });
        })
            .catch(function (error) {
            console.log("error");
            console.log(error);
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    };
    /**
     * @param  {express.Request} req
     * @param  {express.Response} res
     * @param  {express.NextFunction} next
     */
    RecipeController.prototype.createRecipe = function (req, res, next) {
        var ingredients = req.body.ingredients;
        var macros = {};
        var i = 0;
        while (ingredients[i]) {
            if (macros[ingredients[i].macroType]) {
                macros[ingredients[i].macroType].push(ingredients[i]);
            }
            else {
                macros[ingredients[i].macroType] = [ingredients[i]];
            }
            i++;
        }
        RecipeModel_1.default
            .create({
            ingredients: req.body.ingredients,
            name: req.body.name,
            photo_url: req.body.photo_url,
            instructions: req.body.instructions,
            type: req.body.type
        })
            .then(function (recipe) {
            // calculateRecipe(recipe);
            recipe.save();
            res.status(200).json({ recipe: recipe });
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    };
    RecipeController.prototype.deleteRecipe = function (req, res, next) {
        RecipeModel_1.default.remove({ _id: req.params.id })
            .then(function (recipe) {
            res.status(200).json({ recipe: recipe });
        })
            .catch(function (error) {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    };
    return RecipeController;
}());
exports.default = new RecipeController();
//# sourceMappingURL=RecipeController.js.map