function calculateAge(birthday) { // birthday is a date
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

function caloriesNeeded(data: any) {
  return calculateTMB(data) * calculateAF(data);
}

function calculateTMB(data: any) {
  if (data.gender == "M") {
      return 66 + (13.7516 * data.weight) + (5 * data.height) - (6.8 * calculateAge(data.birthday));
  }
  else {
      return 655 + (9.5634 * data.weight) + (1.8 * data.height) - (4.6756 * calculateAge(data.birthday));
  }
}

function calculateAF(data: any) {
  if(data.activity == 0) {
    return 1.375;
  }
  else if (data.activity == 1) {
    return 1.56;
  }
  else if (data.activity == 2) {
    return 1.64;
  }
  else if (data.activity == 3) {
    return 1.22;
  }
  else {
    return 1;
  }
}


var recipeWeekA = {
  prot: [{name: "Poulet", ratio: 0.2}],
  lip: [{name: "Avocat", ratio: 0.125}], // 1/0.125*10 1 ration d'avocat
  carbs: [{name: "Pain", ratio: 0.5}],
  veg: [{name: "Courgette", ratio: 0.04}]
}

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

function loseWeight(data: any) {
  return Math.round(caloriesNeeded(data) * 0.7);

}

function remise(data: any) {
  return caloriesNeeded(data);

}

function seche(data: any) {
  return caloriesNeeded(data) * 0.75;
}

function gainWeight(data: any) {
  return caloriesNeeded(data) * 1.3;
}

export function finalCalculus(data: any) {
  if (data.objective == 0) {
    return Math.floor(loseWeight(data));
  }
  else if (data.objective == 1) {
    return Math.floor(remise(data));
  }
  else if (data.objective == 2) {
    return Math.floor(seche(data));
  }
  else if (data.objective == 3) {
    return Math.floor(gainWeight(data));
  }

}

// function readjustCal(data: any) {
//   if(data.objective == 0) {
//     return 1.375;
//   }
//   else if (data.objective == 1) {
//     return 1.56;
//   }
//   else if (data.objective == 2) {
//     return 1.64;
//   }
//   else if (data.objective == 3) {
//     return 1.22;
//   }
//   else {
//     return 1;
//   }
// }
