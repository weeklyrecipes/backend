"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function caloriesNeeded(data) {
    let cal = calculateTMB(data) * calculateAF(data);
    if (cal < 1200)
        cal = 1200;
    if (data.objective == 3 && cal < 3000)
        cal = 3000;
    return cal;
}
function calculateTMB(data) {
    let weight = data.weight[data.weight.length - 1];
    if (data.gender == "M") {
        return 66.473 + (13.7516 * weight) + (5.0033 * data.height) - (6.755 * calculateAge(data.birthday));
    }
    else {
        return 655.0955 + (9.5634 * weight) + (1.8496 * data.height) - (4.6756 * calculateAge(data.birthday));
    }
}
function calculateAF(data) {
    if (data.activity == 0) {
        return 1.2;
    }
    else if (data.activity == 1) {
        return 1.375;
    }
    else if (data.activity == 2) {
        return 1.55;
    }
    else if (data.activity == 3) {
        return 1.725;
    }
    else if (data.activity == 4) {
        return 1.9;
    }
    else {
        return 1;
    }
}
function loseWeight(data) {
    return Math.round(caloriesNeeded(data) - 500);
}
function remise(data) {
    return caloriesNeeded(data);
}
function seche(data) {
    let cals = caloriesNeeded(data);
    if (cals < 3000) {
        cals -= 300;
    }
    else if (cals < 3200) {
        cals -= 400;
    }
    else {
        cals -= 500;
    }
    return cals;
}
function gainWeight(data) {
    let cals = Math.round((caloriesNeeded(data) * 1.15) / 300) * 300;
    return cals < 3000 ? 3300 : cals;
}
function finalCalculus(data) {
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
exports.finalCalculus = finalCalculus;
//# sourceMappingURL=bodyMetrics.js.map