import RecipeModel from '../models/RecipeModel';
import diets from './tables';

let critical = false;

function calculateRecipe(diet: any, recipe: any, type: any) {
  let ingredients = [];
  let i = 0;
  for (let key in recipe.macro) {
    let macroLength = recipe.macro[key].length;
    let quantityDifference = 0;
    while (i < macroLength) {
      let quantity = Math.floor(((diet[type][key]/recipe.macro[key][i].ration) / macroLength)*10);
      if (macroLength > 1 && quantity > 50 && quantity%50 > 10) {
        quantity = (i%2 == 0 ? Math.floor(quantity / 50) * 50 : Math.ceil(quantity / 50) * 50);
      }
      else {
        quantity = Math.round(quantity / 10) * 10;
      }
      ingredients.push({ingredient: recipe.macro[key][i], quantity: quantity})
      i++;
    }
    i = 0;
  }
  return ingredients;
  // console.log(ingredients);
}

function noDup(menus, recipe) {
  var i = 0;
  var duplicateFree = true;
  for (let k in menus) {
    for (let key in menus[k]) {
      if (menus[k][key] && menus[k][key] == recipe) {
        duplicateFree = false;
        break;
      }
    }
    i++;
  }
  return duplicateFree;
}

function getDates(startDate, daysToAdd) {
    var aryDates = [];

    for (var i = 0; i <= daysToAdd; i++) {
        var currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        aryDates.push(currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear());
    }
    return aryDates;
}

export async function calculateRecipes(user: any) {
  let dates = getDates(new Date(), 4);
  let i = 0;
  let finished = false;
  let toFind = {breakfast: 0, snack1: 0, lunch: 0, snack2: 0, dinner: 0};
  while (dates[i]) {
    if (!user.menus[dates[i]]) user.menus[dates[i]] = {breakfast: false, snack1: false, lunch: false, snack2: false, dinner: false};
    for (let key in user.menus[dates[i]]) {
      if (!user.menus[dates[i]][key]) toFind[key]++;
    }
    i++;
  }
  console.log("ALL MENUS");
  console.log(user.menus);
  for (let i of Array(toFind.lunch)) {
    let recipe = await findLunch(user);
    console.log("RECIPE")
    console.log(recipe);
  }
  // for (let i of Array(toFind.dinner)) {
  //   await findDinner(user);
  // }
}

// function lunches(user, toFind) : any {
//   let i = 0;
//   return new Promise(() => {
//     let int = setInterval(() => {
//       if (i >= toFind.lunch) {
//         clearInterval(int);
//         resolve(true);
//       }
//       if (!critical) {
//         findLunch(user);
//         i++;
//       }
//     }, 200)
//   })
// }
//
// function dinners(user, toFind) : any {
//   let i = 0;
//   let int = setInterval(() => {
//     if (i >= toFind.lunch) {
//       clearInterval(int);
//     }
//     if (!critical) {
//       findDinner(user);
//       i++;
//     }
//   }, 200)
// }


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

function findLunch(user: any) : any {
  return new Promise((resolve) => {
    let diet = diets[user.week+String(Math.floor(user.calories/100)*100)];
    RecipeModel.count({type: 'lunch'}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'lunch'}).skip(random).exec((err, recipe) => {
        if (recipe && noDup(user.menus, recipe)) {
          let final = calculateRecipe(diet, recipe, "lunch");
          for (let key in user.menus) {
            if (!user.menus[key]['lunch']) {
              user.menus[key]['lunch'] = final;
              user.save(() => {
                resolve(final)
              });
              break;
            }
          }

        }
        else {
          resolve(findLunch(user));
        }
      })
    })
  })
}

export function findSnack2(week: String, calories: Number) {

}

function findDinner(user: any) : any {
  return new Promise((resolve) => {
    let diet = diets[user.week+String(Math.floor(user.calories/100)*100)];
    RecipeModel.count({type: 'dinner'}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'dinner'}).skip(random).exec((err, recipe) => {
        if (recipe && noDup(user.menus, recipe)) {
          let final = calculateRecipe(diet, recipe, "dinner");
          for (let key in user.menus) {
            if (!user.menus[key]['dinner']) user.menus[key]['dinner'] = final;
            console.log("RECIPE");
            console.log(final);
            user.save(() => {
              resolve(final)
            });
          }

        }
        else {
          resolve(findLunch(user));
        }
      })
    })
  })
}
