"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateAge(birthday) {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}
function caloriesNeeded(data) {
    return calculateTMB(data) * calculateAF(data);
}
function calculateTMB(data) {
    if (data.gender == "M") {
        return 66 + (13.7516 * data.weight) + (5 * data.height) - (6.8 * calculateAge(data.birthday));
    }
    else {
        return 655 + (9.5634 * data.weight) + (1.8 * data.height) - (4.6756 * calculateAge(data.birthday));
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
        return 1.64;
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
    return Math.round(caloriesNeeded(data) * 0.7);
}
function remise(data) {
    return caloriesNeeded(data);
}
function seche(data) {
    return caloriesNeeded(data) * 0.75;
}
function gainWeight(data) {
    return caloriesNeeded(data) * 1.3;
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