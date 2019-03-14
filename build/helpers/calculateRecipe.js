"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RecipeModel_1 = require("../models/RecipeModel");
const tables_1 = require("./tables");
let critical = false;
function calculateRecipe(diet, recipe, type) {
    let ingredients = [];
    let i = 0;
    for (let key in recipe.macro) {
        let macroLength = recipe.macro[key].length;
        let quantityDifference = 0;
        while (i < macroLength) {
            let quantity = Math.floor(((diet[type][key] / recipe.macro[key][i].ration) / macroLength) * 10);
            if (macroLength > 1 && quantity > 50 && quantity % 50 > 10) {
                quantity = (i % 2 == 0 ? Math.floor(quantity / 50) * 50 : Math.ceil(quantity / 50) * 50);
            }
            else {
                quantity = Math.round(quantity / 10) * 10;
            }
            ingredients.push({ ingredient: recipe.macro[key][i], quantity: quantity });
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
        aryDates.push(currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear());
    }
    return aryDates;
}
function calculateRecipes(user) {
    let diet = tables_1.default[user.week + String(Math.floor(user.calories / 100) * 100)];
    console.log("DIET");
    console.log(user.diet);
    console.log(user.calories);
    user.diet = diet;
    return new Promise((resolve) => {
        console.log("BEFORE");
        let dates = getDates(new Date(), 3);
        console.log(dates);
        let i = 0;
        let toFind = { breakfast: [], snack1: [], lunch: [], snack2: [], dinner: [] };
        while (dates[i]) {
            if (!user.menus[dates[i]]) {
                user.menus[dates[i]] = { breakfast: false, snack1: false, lunch: false, snack2: false, dinner: false };
            }
            for (let key in user.menus[dates[i]]) {
                if (!user.menus[dates[i]][key])
                    toFind[key].push(dates[i]);
            }
            i++;
        }
        let promises = [];
        for (let date of toFind.lunch) {
            promises.push(findLunch(user, date));
        }
        for (let date of toFind.dinner) {
            promises.push(findDinner(user, date));
        }
        Promise.all(promises).then(() => {
            resolve(user.menus);
        });
    });
}
exports.calculateRecipes = calculateRecipes;
function findBreakfast(week, calories) {
    RecipeModel_1.default.find({ type: 'breakfast' }).then((recipes) => {
        console.log(recipes);
    });
}
exports.findBreakfast = findBreakfast;
function findSnack1(week, calories) {
    RecipeModel_1.default.find({ type: 'snack1' }).then((recipes) => {
        console.log(recipes);
    });
}
exports.findSnack1 = findSnack1;
function findLunch(user, date) {
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'lunch' }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'lunch' }).skip(random).exec((err, recipe) => {
                if (recipe && noDup(user.menus, recipe)) {
                    let final = calculateRecipe(user.diet, recipe, "lunch");
                    user.menus[date]["lunch"] = final;
                    user.save(() => {
                        resolve(final);
                    });
                }
                else {
                    resolve(findLunch(user, date));
                }
            });
        });
    });
}
function findSnack2(week, calories) {
}
exports.findSnack2 = findSnack2;
function findDinner(user, date) {
    return new Promise((resolve) => {
        RecipeModel_1.default.count({ type: 'dinner' }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'dinner' }).skip(random).exec((err, recipe) => {
                if (recipe && noDup(user.menus, recipe)) {
                    let final = calculateRecipe(user.diet, recipe, "dinner");
                    user.menus[date]["dinner"] = final;
                    user.save(() => {
                        resolve(final);
                    });
                }
                else {
                    resolve(findLunch(user, date));
                }
            });
        });
    });
}
//# sourceMappingURL=calculateRecipe.js.map