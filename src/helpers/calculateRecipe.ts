// import RecipeModel from '../models/RecipeModel';

function calcMacro(macro: any, ratio: any) {
  if (typeof macro == "string") macro = macro.replace(",", ".")
  var result = parseFloat(macro) * ratio;
  console.log(result);
  return result ? result : 0;
}

export function calculateRecipe(recipe: any) {
  recipe.macro = {};
  if (recipe.ingredients) {
    recipe.macro.kcal = 0;
    recipe.macro.lipids = 0;
    recipe.macro.proteins = 0;
    recipe.macro.carbs = 0;
    var x = 0;
    while (x < recipe.ingredients.length) {
      var ingredient = recipe.ingredients[x];
      var ratio = ingredient.quantity.n / 100;
      recipe.macro.kcal +=  calcMacro(ingredient.data.kcal, ratio);
      recipe.macro.lipids  += calcMacro(ingredient.data.lipids, ratio);
      recipe.macro.proteins  += calcMacro(ingredient.data.proteins, ratio);
      recipe.macro.carbs  += calcMacro(ingredient.data.carbs, ratio);
      x++;
    }
    console.log(recipe)
  }
}
