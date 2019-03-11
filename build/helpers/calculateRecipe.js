"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function calculateRecipes(user) {
    return __awaiter(this, void 0, void 0, function* () {
        let dates = getDates(new Date(), 4);
        let i = 0;
        let finished = false;
        let toFind = { breakfast: 0, snack1: 0, lunch: 0, snack2: 0, dinner: 0 };
        while (dates[i]) {
            if (!user.menus[dates[i]])
                user.menus[dates[i]] = { breakfast: false, snack1: false, lunch: false, snack2: false, dinner: false };
            for (let key in user.menus[dates[i]]) {
                if (!user.menus[dates[i]][key])
                    toFind[key]++;
            }
            i++;
        }
        console.log("ALL MENUS");
        console.log(user.menus);
        for (let i of Array(toFind.lunch)) {
            let recipe = yield findLunch(user);
            console.log("RECIPE");
            console.log(recipe);
        }
        // for (let i of Array(toFind.dinner)) {
        //   await findDinner(user);
        // }
    });
}
exports.calculateRecipes = calculateRecipes;
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
function findLunch(user) {
    return new Promise((resolve) => {
        let diet = tables_1.default[user.week + String(Math.floor(user.calories / 100) * 100)];
        RecipeModel_1.default.count({ type: 'lunch' }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'lunch' }).skip(random).exec((err, recipe) => {
                if (recipe && noDup(user.menus, recipe)) {
                    let final = calculateRecipe(diet, recipe, "lunch");
                    for (let key in user.menus) {
                        if (!user.menus[key]['lunch']) {
                            user.menus[key]['lunch'] = final;
                            user.save(() => {
                                resolve(final);
                            });
                            break;
                        }
                    }
                }
                else {
                    resolve(findLunch(user));
                }
            });
        });
    });
}
function findSnack2(week, calories) {
}
exports.findSnack2 = findSnack2;
function findDinner(user) {
    return new Promise((resolve) => {
        let diet = tables_1.default[user.week + String(Math.floor(user.calories / 100) * 100)];
        RecipeModel_1.default.count({ type: 'dinner' }).exec(function (err, count) {
            let random = Math.floor(Math.random() * count);
            RecipeModel_1.default.findOne({ type: 'dinner' }).skip(random).exec((err, recipe) => {
                if (recipe && noDup(user.menus, recipe)) {
                    let final = calculateRecipe(diet, recipe, "dinner");
                    for (let key in user.menus) {
                        if (!user.menus[key]['dinner'])
                            user.menus[key]['dinner'] = final;
                        console.log("RECIPE");
                        console.log(final);
                        user.save(() => {
                            resolve(final);
                        });
                    }
                }
                else {
                    resolve(findLunch(user));
                }
            });
        });
    });
}
//# sourceMappingURL=calculateRecipe.js.map