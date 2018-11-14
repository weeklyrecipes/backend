"use strict";
// import RecipeModel from '../models/RecipeModel';
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRecipe(recipe) {
    recipe.macro = {};
    if (recipe.ingredients) {
        recipe.macro.kcal = 0;
        recipe.macro.lipids = 0;
        recipe.macro.proteins = 0;
        recipe.macro.carbs = 0;
        var x = 0;
        while (x < recipe.ingredients.length) {
            console.log("ingredient macro kcal");
            var ingredient = recipe.ingredients[x];
            var ratio = ingredient.quantity.n / 100;
            recipe.macro.kcal += (ingredient.data.kcal * ratio);
            console.log(ingredient.data.kcal * ratio);
            recipe.macro.lipids += (ingredient.data.lipids * ratio);
            recipe.macro.proteins += (ingredient.data.proteins * ratio);
            recipe.macro.carbs += (ingredient.data.carbs * ratio);
            // for (var macroKey in ingredient.data.macro) {
            //   (Recipe[macroKey]) ? (Recipe[macroKey] += ingredient.macro[macroKey]) : Recipe[macroKey] = ingredient.macro[macroKey]
            // }
            x++;
        }
        console.log(recipe);
    }
}
exports.calculateRecipe = calculateRecipe;
//# sourceMappingURL=calculateRecipe.js.map