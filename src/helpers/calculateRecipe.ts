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





function calculateTMB(data: any) {
  if (data.gender == "M") {
      return 66 + (13.7516 * data.weight) + (5 * data.height) - (6.8 * data.age);
  }
  else {
      return 655 + (9.5634 * data.weight) + (1.8 * data.height) - (4.6756 * data.age);
  }
}

function returnAF(data: any) {
  if(data.objective == 0) {
    return 1.375;
  }
  else if (data.objective == 1) {
    return 1.56;
  }
  else if (data.objective == 2) {
    return 1.64;
  }
  else if (data.objective == 3) {
    return 1.22;
  }
}
