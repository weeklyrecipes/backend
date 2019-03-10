import RecipeModel from '../models/RecipeModel';
import diets from './tables';


var recipeWeekA = {
  prot: [{name: "Poulet", ratio: 0.2}],
  lip: [{name: "Avocat", ratio: 0.125}], // 1/0.125*10 1 ration d'avocat
  carbs: [{name: "Pain", ratio: 0.5}],
  veg: [{name: "Courgette", ratio: 0.04}]
}

function calculateRecipe(diet: any, recipe: any, type: any) {
  let ingredients = [];
  let i = 0;
  for (let key in recipe.macro) {
    let macroLength = recipe.macro[key].length;
    while (i < macroLength) {
      ingredients.push({ingredient: recipe.macro[key][i], quantity: (recipe.macro[key][i].ration/diet[type][key])*10})
      i++;
    }
    i = 0;
  }

  console.log(ingredients);
}

function noDup(recipes, recipe) {
  var i = 0;
  var duplicateFree = true;
  while (i < recipes.length) {
    for (let key in recipes) {
      if (recipes[key] == recipe) {
        duplicateFree = false;
        break;
      }
    }
    i++;
  }
  return duplicateFree;
}

export function calculateRecipes(user: any) {
  findLunch(user);
}


export function findBreakfast(week: String, calories: Number) {
  RecipeModel.find({type: 'breakfast'}).then((recipes) => {
    console.log(recipes)
  })
}

export function findSnack1(week: String, calories: Number) {
  RecipeModel.find({type: 'snack1'}).then((recipes) => {
    console.log(recipes)
  })
}

export function findLunch(user: any) {
  let diet = diets[user.week+String(Math.floor(user.calories/100)*100)]
  // return new Promise((resolve) => {
    RecipeModel.count({type: 'lunch'}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'lunch'}).skip(random).exec((err, recipe) => {
        if (recipe && noDup(user.menus, recipe)) {
          let final = calculateRecipe(diet, recipe, "lunch");
          console.log("FINAL RECIPE")
          console.log(final);
          user.menus.push(final);
          return final;
        }
        else {
          return findLunch(user);
        }
      })
    })
  // })
}

export function findSnack2(week: String, calories: Number) {

}

export function findDinner(week: String, calories: Number) {
  RecipeModel.find({type: 'dinner'}).then((recipes) => {
    console.log(recipes)
  })
}
