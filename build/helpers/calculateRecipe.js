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
function calculateRecipes(user) {
    findLunch(user.week, Math.floor(user.calories / 100) * 100);
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
function findLunch(week, calories) {
    var diet = tables_1.default[week + String(calories)];
    console.log("DIETS");
    console.log(diet);
    RecipeModel_1.default.findOne({ type: 'lunch' }).then(function (recipes) {
    });
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