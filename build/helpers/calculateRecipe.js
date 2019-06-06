"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeModel_1 = require("../models/RecipeModel");
const tables_1 = require("./tables");
let critical = false;
function calculateRecipe(diet, recipe, type) {
    let ingredients = [];
    let i = 0;
    if (diet) {
        for (let key in recipe.macro) {
            let macroLength = recipe.macro[key].length;
            let quantityDifference = 0;
            while (recipe.macro[key][i]) {
                let quantity = Math.floor(((diet[key] / recipe.macro[key][i].ration) / macroLength) * 10);
                if (macroLength > 1 && quantity > 25 && quantity % 25 > 10) {
                    quantity = (i % 2 == 0 ? Math.floor(quantity / 25) * 25 : Math.ceil(quantity / 25) * 25);
                }
                else {
                    quantity = Math.round(quantity / 5) * 5;
                }
                ingredients.push({ ingredient: { name: recipe.macro[key][i].name, ration: recipe.macro[key][i].ration, macroType: recipe.macro[key][i].macroType }, quantity: quantity });
                i++;
            }
            i = 0;
        }
        recipe.ingredients = ingredients;
    }
    else {
        recipe.ingredients = [];
    }
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
        aryDates.push({ formatted: currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear(), raw: currentDate });
    }
    return aryDates;
}
function weeksBetween(d1, d2) {
    return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}
function findWeek(user, date) {
    let diet;
    let week = 'A';
    if (user.objective == 0 || user.objective == 1) {
        week = weeksBetween(user.createdAt, date) % 2 ? "B" : "A";
    }
    else if (user.objective == 2) {
        let weeks = weeksBetween(user.createdAt, date);
        week = weeks < 6 ? "C" : "D";
    }
    else if (user.objective == 3) {
        week = 'E';
    }
    return { week: week };
}
function calculateRecipes(user) {
    let cals = Math.floor(user.calories / 100) * 100;
    console.log("RAN ONCE");
    console.log("CALS");
    console.log(cals);
    return new Promise((resolve) => {
        let dates = getDates(new Date(), 10);
        let i = 0;
        let toFind = { breakfast: [], snack1: [], lunch: [], snack2: [], dinner: [], snack3: [] };
        while (dates[i]) {
            if (!user.menus[dates[i].formatted]) {
                user.menus[dates[i].formatted] = { breakfast: false, snack1: false, lunch: false, snack2: false, dinner: false };
            }
            for (let key in user.menus[dates[i].formatted]) {
                let obj = findWeek(user, dates[i].raw);
                if (!tables_1.default[obj.week] || !tables_1.default[obj.week][String(cals)]) {
                    console.log("NOT WORKING");
                    console.log(obj.week);
                    console.log(cals);
                }
                else if (!user.menus[dates[i].formatted][key])
                    toFind[key].push({ date: dates[i].formatted, week: obj.week, diet: tables_1.default[obj.week][String(cals)][key] });
            }
            i++;
        }
        let promises = [];
        for (let breakfast of toFind.breakfast) {
            promises.push(findBreakfast(user, breakfast.date, breakfast.week, breakfast.diet));
        }
        for (let snack1 of toFind.snack1) {
            promises.push(findSnack1(user, snack1.date, snack1.week, snack1.diet));
        }
        for (let lunch of toFind.lunch) {
            promises.push(findLunch(user, lunch.date, lunch.week, lunch.diet));
        }
        for (let snack2 of toFind.snack2) {
            promises.push(findSnack2(user, snack2.date, snack2.week, snack2.diet));
        }
        for (let dinner of toFind.dinner) {
            promises.push(findDinner(user, dinner.date, dinner.week, dinner.diet));
        }
        // if (user.objective == 3 && user.calories > 3900) {
        //   for (let snack3 of toFind.snack3) {
        //     promises.push(findSnack3(user, snack3.date, snack3.diet));
        //   }
        // }
        Promise.all(promises).then(() => {
            resolve(user.menus);
        });
    });
}
exports.calculateRecipes = calculateRecipes;
function findBreakfast(user, date, week, diet) {
    var recipeWeek = week;
    if (week != "A" && week != "B")
        recipeWeek = "C";
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'breakfast' + recipeWeek }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'breakfast' + recipeWeek }).skip(random).exec((err, recipe) => {
                if (recipe) {
                    // && noDup(user.menus, recipe)
                    let final = calculateRecipe(diet, recipe, "breakfast");
                    user.menus[date]["breakfast"] = final;
                    user.markModified('menus');
                }
                else {
                    resolve(findBreakfast(user, date, week, diet));
                }
            });
        });
    });
}
function findSnack1(user, date, week, diet) {
    var recipeWeek = week;
    if (week != "A" && week != "B")
        recipeWeek = "C";
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'snack1' + recipeWeek }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'snack1' + recipeWeek }).skip(random).exec((err, recipe) => {
                if (recipe) {
                    // && noDup(user.menus, recipe)
                    let final = calculateRecipe(diet, recipe, "snack1");
                    user.menus[date]["snack1"] = final;
                    user.markModified('menus');
                }
                else {
                    resolve(findSnack1(user, date, week, diet));
                }
            });
        });
    });
}
function findLunch(user, date, week, diet) {
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'lunch' }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'lunch' }).skip(random).exec((err, recipe) => {
                if (recipe) {
                    let final = calculateRecipe(diet, recipe, "lunch");
                    user.menus[date]["lunch"] = final;
                    user.markModified('menus');
                }
                else {
                    resolve(findLunch(user, date, week, diet));
                }
            });
        });
    });
}
function findSnack2(user, date, week, diet) {
    var recipeWeek = week;
    if (week != "A" && week != "B")
        recipeWeek = "C";
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'snack2' + recipeWeek }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'snack2' + recipeWeek }).skip(random).exec((err, recipe) => {
                if (recipe) {
                    // && noDup(user.menus, recipe)
                    let final = calculateRecipe(diet, recipe, "snack2");
                    user.menus[date]["snack2"] = final;
                    user.markModified('menus');
                }
                else {
                    resolve(findSnack2(user, date, week, diet));
                }
            });
        });
    });
}
function findSnack3(user, date, week, diet) {
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'snack3' }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'snack3' }).skip(random).exec((err, recipe) => {
                if (recipe) {
                    // && noDup(user.menus, recipe)
                    let final = calculateRecipe(diet, recipe, "snack3");
                    user.menus[date]["snack3"] = final;
                    user.markModified('menus');
                }
                else {
                    resolve(findSnack3(user, date, week, diet));
                }
            });
        });
    });
}
function findDinner(user, date, week, diet) {
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'dinner' }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'dinner' }).skip(random).exec((err, recipe) => {
                if (recipe) {
                    let final = calculateRecipe(diet, recipe, "dinner");
                    user.menus[date]["dinner"] = final;
                    user.markModified('menus');
                }
                else {
                    resolve(findDinner(user, date, week, diet));
                }
            });
        });
    });
}
//# sourceMappingURL=calculateRecipe.js.map