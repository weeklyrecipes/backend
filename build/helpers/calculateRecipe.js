"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RecipeModel_1 = require("../models/RecipeModel");
function calculateRecipes(user) {
    findLunch(user.week, Math.ceil(user.calories / 100) * 100);
}
exports.calculateRecipes = calculateRecipes;
function findBreakfast(week, calories, breakfasts) {
    RecipeModel_1.default.find({ type: 'breakfast' }).then(function (recipes) {
        console.log(recipes);
    });
}
exports.findBreakfast = findBreakfast;
function findSnack1(week, calories, breakfasts) {
    RecipeModel_1.default.find({ type: 'snack1' }).then(function (recipes) {
        console.log(recipes);
    });
}
exports.findSnack1 = findSnack1;
function findLunch(week, calories) {
    RecipeModel_1.default.find({ type: 'lunch' }).then(function (recipes) {
        console.log("RECIPES");
        console.log(recipes);
    });
}
exports.findLunch = findLunch;
function findSnack2(week, calories, breakfasts) {
}
exports.findSnack2 = findSnack2;
function findDinner(week, calories, breakfasts) {
    RecipeModel_1.default.find({ type: 'dinner' }).then(function (recipes) {
        console.log(recipes);
    });
}
exports.findDinner = findDinner;
//# sourceMappingURL=calculateRecipe.js.map