"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecipeModel_1 = require("../models/RecipeModel");
var tables_1 = require("./tables");
var recipeWeekA = {
    prot: [{ name: "Poulet", ratio: 0.2 }],
    lip: [{ name: "Avocat", ratio: 0.125 }],
    carbs: [{ name: "Pain", ratio: 0.5 }],
    veg: [{ name: "Courgette", ratio: 0.04 }]
};
function calculateRecipe(diet, recipe, type) {
    var ingredients = [];
    var i = 0;
    for (var key in recipe.macro) {
        var macroLength = recipe.macro[key].length;
        while (i < macroLength) {
            ingredients.push({ ingredient: recipe.macro[key][i], quantity: (recipe.macro[key][i].ration / diet[type][key]) * 10 });
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
        for (var key in recipes) {
            if (recipes[key] == recipe) {
                duplicateFree = false;
                break;
            }
        }
        i++;
    }
    return duplicateFree;
}
function calculateRecipes(user) {
    findLunch(user);
}
exports.calculateRecipes = calculateRecipes;
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
    var diet = tables_1.default[user.week + String(Math.floor(user.calories / 100) * 100)];
    // return new Promise((resolve) => {
    RecipeModel_1.default.count({ type: 'lunch' }).exec(function (err, count) {
        var random = Math.floor(Math.random() * count);
        RecipeModel_1.default.findOne({ type: 'lunch' }).skip(random).exec(function (err, recipe) {
            if (recipe && noDup(user.menus, recipe)) {
                var final = calculateRecipe(diet, recipe, "lunch");
                console.log("FINAL RECIPE");
                console.log(final);
                user.menus.push(final);
                return final;
            }
            else {
                return findLunch(user);
            }
        });
    });
    // })
}
exports.findLunch = findLunch;
function findSnack2(week, calories) {
}
exports.findSnack2 = findSnack2;
function findDinner(week, calories) {
    RecipeModel_1.default.find({ type: 'dinner' }).then(function (recipes) {
        console.log(recipes);
    });
}
exports.findDinner = findDinner;
//# sourceMappingURL=calculateRecipe.js.map