"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecipeModel_1 = require("../models/RecipeModel");
var tables_1 = require("./tables");
var critical = false;
function calculateRecipe(diet, recipe, type) {
    var ingredients = [];
    var i = 0;
    for (var key in recipe.macro) {
        var macroLength = recipe.macro[key].length;
        var quantityDifference = 0;
        while (i < macroLength) {
            var quantity = Math.floor(((diet[type][key] / recipe.macro[key][i].ration) / macroLength) * 10);
            if (macroLength > 1 && quantity % 50 > 10) {
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
    for (var k in menus) {
        for (var key in menus[k]) {
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
    var dates = getDates(new Date(), 4);
    var i = 0;
    var finished = false;
    var toFind = { breakfast: 0, snack1: 0, lunch: 0, snack2: 0, dinner: 0 };
    while (dates[i]) {
        if (!user.menus[dates[i]])
            user.menus[dates[i]] = { breakfast: false, snack1: false, lunch: false, snack2: false, dinner: false };
        for (var key in user.menus[dates[i]]) {
            if (!user.menus[dates[i]][key])
                toFind[key]++;
        }
        i++;
    }
    i = 0;
    lunches(user, toFind);
}
exports.calculateRecipes = calculateRecipes;
function lunches(user, toFind) {
    var i = 0;
    var int = setInterval(function () {
        if (i >= toFind.lunch) {
            clearInterval(int);
            dinners(user, toFind);
        }
        if (!critical) {
            findLunch(user);
            i++;
        }
    }, 200);
}
function dinners(user, toFind) {
    var i = 0;
    var int = setInterval(function () {
        if (i >= toFind.lunch) {
            clearInterval(int);
        }
        if (!critical) {
            findDinner(user);
            i++;
        }
    }, 200);
}
function findBreakfast(week, calories) {
    RecipeModel_1.default.find({ type: 'breakfast' }).then(function (recipes) {
        console.log(recipes);
    });
}
exports.findBreakfast = findBreakfast;
function findSnack1(week, calories) {
    RecipeModel_1.default.find({ type: 'snack1' }).then(function (recipes) {
        console.log(recipes);
    });
}
exports.findSnack1 = findSnack1;
function findLunch(user) {
    critical = true;
    var diet = tables_1.default[user.week + String(Math.floor(user.calories / 100) * 100)];
    RecipeModel_1.default.count({ type: 'lunch' }).exec(function (err, count) {
        var random = Math.floor(Math.random() * count);
        RecipeModel_1.default.findOne({ type: 'lunch' }).skip(random).exec(function (err, recipe) {
            if (recipe && noDup(user.menus, recipe)) {
                var final = calculateRecipe(diet, recipe, "lunch");
                for (var key in user.menus) {
                    if (!user.menus[key]['lunch'])
                        user.menus[key]['lunch'] = final;
                    user.save(function () {
                        critical = false;
                    });
                }
            }
            else {
                return findLunch(user);
            }
        });
    });
}
function findSnack2(week, calories) {
}
exports.findSnack2 = findSnack2;
function findDinner(user) {
    critical = true;
    var diet = tables_1.default[user.week + String(Math.floor(user.calories / 100) * 100)];
    RecipeModel_1.default.count({ type: 'dinner' }).exec(function (err, count) {
        var random = Math.floor(Math.random() * count);
        RecipeModel_1.default.findOne({ type: 'dinner' }).skip(random).exec(function (err, recipe) {
            if (recipe && noDup(user.menus, recipe)) {
                var final = calculateRecipe(diet, recipe, "dinner");
                for (var key in user.menus) {
                    if (!user.menus[key]['dinner'])
                        user.menus[key]['dinner'] = final;
                    user.save(function () {
                        critical = false;
                    });
                }
            }
            else {
                return findLunch(user);
            }
        });
    });
}
//# sourceMappingURL=calculateRecipe.js.map