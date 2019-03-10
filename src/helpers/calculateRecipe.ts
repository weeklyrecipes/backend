import RecipeModel from '../models/RecipeModel';
import diets from './tables';


var recipeWeekA = {
  prot: [{name: "Poulet", ratio: 0.2}],
  lip: [{name: "Avocat", ratio: 0.125}], // 1/0.125*10 1 ration d'avocat
  carbs: [{name: "Pain", ratio: 0.5}],
  veg: [{name: "Courgette", ratio: 0.04}]
}

// function calculateRecipe() {
//   var repas = "lunch";
//   var ratios = semaineA1600["lunch"];
//   var ingredients = [];
//   ingredients.push({name: recipeWeekA.prot[0].name, quantity: (ratios.prot/recipeWeekA.prot[0].ratio) * 10});
//   ingredients.push({name: recipeWeekA.lip[0].name, quantity: (ratios.lip/recipeWeekA.lip[0].ratio) * 10});
//   ingredients.push({name: recipeWeekA.carbs[0].name, quantity: (ratios.carbs/recipeWeekA.carbs[0].ratio) * 10});
//   ingredients.push({name: recipeWeekA.veg[0].name, quantity: (ratios.veg/recipeWeekA.veg[0].ratio) * 10});
//   console.log(ingredients);
// }
export function calculateRecipes(user: any) {
  findLunch(user.week, Math.floor(user.calories/100)*100);
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

export function findLunch(week: String, calories: Number) {
  let diet = diets[week+String(calories)];
  console.log("DIETS");
  console.log(diet)
  RecipeModel.findOne({type: 'lunch'}).then((recipes) => {

  })
}

export function findSnack2(week: String, calories: Number) {

}

export function findDinner(week: String, calories: Number) {
  RecipeModel.find({type: 'dinner'}).then((recipes) => {
    console.log(recipes)
  })
}
