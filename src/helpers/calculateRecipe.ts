import RecipeModel from '../models/RecipeModel';
import diets from './tables';

let critical = false;

function calculateRecipe(diet: any, recipe: any, type: any) {
  let ingredients = [];
  let i = 0;
  console.log("DIETTT")
  console.log(diet)
  for (let key in recipe.macro) {
    let macroLength = recipe.macro[key].length;
    let quantityDifference = 0;
    while (i < macroLength) {
      let quantity = Math.floor(((diet[type][key]/recipe.macro[key][i].ration) / macroLength)*10);
      if (macroLength > 1 && quantity > 25 && quantity%25 > 10) {
        quantity = (i%2 == 0 ? Math.floor(quantity / 25) * 25 : Math.ceil(quantity / 25) * 25);
      }
      else {
        quantity = Math.round(quantity / 5) * 5;
      }
      ingredients.push({ingredient: recipe.macro[key][i], quantity: quantity})
      i++;
    }
    i = 0;
  }
  recipe.ingredients = ingredients;
  return recipe;
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
        aryDates.push({formatted: currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear(), raw: currentDate});
    }
    return aryDates;
}

function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

function findDiet(user: any, date: any) {
  let diet;
  let week = 'A';
  if (user.objective == 0 || user.objective == 1) {
    week = weeksBetween(user.createdAt, date) % 2 ? "B" : "A";
  }
  else if (user.objective == 2) {
    let weeks = weeksBetween(user.createdAt, date);
    while (weeks > 13) {
      weeks /= 6;
    }
    week = weeks < 6 ? "C" : "D";
  }
  else if (user.objective == 3) {
    week = 'E';
  }
  console.log("WEEK THEN CALORIES")
  console.log(week)
  console.log(String(Math.floor(user.calories/100)*100))
  return {diet: diets[week][String(Math.floor(user.calories/100)*100)], week: week};
}

export function calculateRecipes(user: any) {
  return new Promise((resolve) => {
    let dates = getDates(new Date(), 10);
    let i = 0;
    let toFind = {breakfast: [], snack1: [], lunch: [], snack2: [], dinner: [], snack3: []};
    while (dates[i]) {
      if (!user.menus[dates[i].formatted]) {
        user.menus[dates[i].formatted] = {breakfast: false, snack1: false, lunch: false, snack2: false, dinner: false, snack3: false};
      }
      for (let key in user.menus[dates[i].formatted]) {
        let obj = findDiet(user, dates[i].raw);
        if (!user.menus[dates[i].formatted][key]) toFind[key].push({diet: obj.diet, date: dates[i].formatted, week:  obj.week});
      }
      i++;
    }
    let promises = [];
    for (let breakfast of toFind.breakfast) {
      promises.push(findBreakfast(user, breakfast.date, breakfast.diet, breakfast.week));
    }
    for (let snack1 of toFind.snack1) {
      promises.push(findSnack1(user, snack1.date, snack1.diet, snack1.week));
    }
    for (let lunch of toFind.lunch) {
      promises.push(findLunch(user, lunch.date, lunch.diet));
    }
    for (let snack2 of toFind.snack2) {
      promises.push(findSnack2(user, snack2.date, snack2.diet, snack2.week));
    }
    for (let dinner of toFind.dinner) {
      promises.push(findDinner(user, dinner.date, dinner.diet));
    }
    if (user.objective == 3) {
      for (let snack3 of toFind.snack3) {
        promises.push(findSnack3(user, snack3.date, snack3.diet));
      }
    }
    Promise.all(promises).then(() => {
      resolve(user.menus)
    })
  })
}

function findBreakfast(user: any, date: any, diet: any, week: any) : Promise<any> {
  return new Promise((resolve) => {
    RecipeModel.count({type: 'breakfast' + week}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'breakfast' + week}).skip(random).exec((err, recipe) => {
        if (recipe) {
          // && noDup(user.menus, recipe)
          let final = calculateRecipe(diet, recipe, "breakfast");
          user.menus[date]["breakfast"] = final;
          user.save(() => {
            resolve(final);
          })
        }
        else {
          resolve(findBreakfast(user, date, diet, week));
        }
      })
    })
  })
}

function findSnack1(user: any, date: any, diet: any, week: any) : Promise<any> {
  return new Promise((resolve) => {
    RecipeModel.count({type: 'snack1' + week}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'snack1' + week}).skip(random).exec((err, recipe) => {
        if (recipe) {
          // && noDup(user.menus, recipe)
          let final = calculateRecipe(diet, recipe, "snack1");
          user.menus[date]["snack1"] = final;
          user.save(() => {
            resolve(final);
          })
        }
        else {
          resolve(findSnack1(user, date, diet, week));
        }
      })
    })
  })
}

function findLunch(user: any, date: any, diet: any) : Promise<any> {
  return new Promise((resolve) => {
    RecipeModel.count({type: 'lunch'}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'lunch'}).skip(random).exec((err, recipe) => {
        if (recipe && noDup(user.menus, recipe)) {
          let final = calculateRecipe(diet, recipe, "lunch");
          user.menus[date]["lunch"] = final;
          user.save(() => {
            resolve(final);
          })
        }
        else {
          resolve(findLunch(user, date, diet));
        }
      })
    })
  })
}

function findSnack2(user: any, date: any, diet: any, week: any) : Promise<any> {
  return new Promise((resolve) => {
    RecipeModel.count({type: 'snack2' + week}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'snack2' + week}).skip(random).exec((err, recipe) => {
        if (recipe) {
          // && noDup(user.menus, recipe)
          let final = calculateRecipe(diet, recipe, "snack2");
          user.menus[date]["snack2"] = final;
          user.save(() => {
            resolve(final);
          })
        }
        else {
          resolve(findSnack2(user, date, diet, week));
        }
      })
    })
  })
}


function findSnack3(user: any, date: any, diet: any) : Promise<any> {
  return new Promise((resolve) => {
    RecipeModel.count({type: 'snack3'}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'snack3'}).skip(random).exec((err, recipe) => {
        if (recipe) {
          // && noDup(user.menus, recipe)
          let final = calculateRecipe(diet, recipe, "snack3");
          user.menus[date]["snack3"] = final;
          user.save(() => {
            resolve(final);
          })
        }
        else {
          resolve(findSnack3(user, date, diet));
        }
      })
    })
  })
}

function findDinner(user: any, date: any, diet: any) : Promise<any> {
  return new Promise((resolve) => {
    RecipeModel.count({type: 'dinner'}).exec(function (err, count) {
      let random = Math.floor(Math.random() * count)
      RecipeModel.findOne({type: 'dinner'}).skip(random).exec((err, recipe) => {
        if (recipe && noDup(user.menus, recipe)) {
          let final = calculateRecipe(diet, recipe, "dinner");
          user.menus[date]["dinner"] = final;
          user.save(() => {
            resolve(final);
          })
        }
        else {
          resolve(findDinner(user, date, diet));
        }
      })
    })
  })
}
