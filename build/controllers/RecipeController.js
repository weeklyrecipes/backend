"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeModel_1 = require("../models/RecipeModel");
class RecipeController {
    /**
    * @param  {express.Request} req
    * @param  {express.Response} res
    * @param  {express.NextFunction} next
    */
    getRecipes(req, res, next) {
        RecipeModel_1.default
            .find({})
            .then((data) => {
            res.status(200).json({ data });
        })
            .catch((error) => {
            console.log("error");
            console.log(error);
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
    createRecipe(req, res, next) {
        let ingredients = req.body.ingredients;
        let macros = {};
        let i = 0;
        console.log("INGREDIENTS");
        console.log(JSON.stringify(ingredients));
        while (ingredients[i]) {
            if (macros[ingredients[i]["macroType"]]) {
                macros[ingredients[i]["macroType"]].push(ingredients[i]);
            }
            else {
                macros[ingredients[i]["macroType"]] = [ingredients[i]];
            }
            i++;
        }
        RecipeModel_1.default
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
            .catch((error) => {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    }
    deleteRecipe(req, res, next) {
        RecipeModel_1.default.remove({ _id: req.params.id })
            .then((recipe) => {
            res.status(200).json({ recipe });
        })
            .catch((error) => {
            res.status(500).json({
                error: error.message,
                errorStack: error.stack
            });
            next(error);
        });
    }
}
exports.default = new RecipeController();
//# sourceMappingURL=RecipeController.js.map