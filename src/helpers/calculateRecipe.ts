import RecipeModel from '../models/RecipeModel';

export function calculateRecipes() {
  findLunch("A", 1600);
}


export function findBreakfast(week: String, calories: Number, breakfasts: any) {
  RecipeModel.find({type: 'breakfast'}).then((recipes) => {
    console.log(recipes)
  })
}

export function findSnack1(week: String, calories: Number, breakfasts: any) {
  RecipeModel.find({type: 'snack1'}).then((recipes) => {
    console.log(recipes)
  })
}

export function findLunch(week: String, calories: Number) {
  RecipeModel.find({type: 'lunch'}).then((recipes) => {
    console.log(recipes)
  })
}

export function findSnack2(week: String, calories: Number, breakfasts: any) {

}

export function findDinner(week: String, calories: Number, breakfasts: any) {
  RecipeModel.find({type: 'dinner'}).then((recipes) => {
    console.log(recipes)
  })
}
