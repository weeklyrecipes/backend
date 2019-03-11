"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let diets = {
    "A1200": {
        breakfast: {
            carb: 2,
            lact: 0.5,
            protein: 1
        },
        snack1: {
            fruits: 1
        },
        lunch: {
            veg: 1,
            carb: 2,
            protein: 2.5,
            lipid: 1
        },
        snack2: {
            fruits: 1.5,
            carb: 1,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2,
            protein: 2,
            lipid: 1
        }
    },
    "B1200": {
        breakfast: {
            fruits: 1,
            carb: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carb: 2,
            protein: 2,
            lipid: 1.5
        },
        snack2: {
            carb: 1,
            lact: 0.5,
            protein: 1
        },
        dinner: {
            veg: 1,
            carb: 1,
            protein: 2,
            lipid: 1
        }
    },
    "A1300": {
        breakfast: {
            carb: 2,
            lact: 0.5,
            protein: 1
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2,
            protein: 2,
            lipid: 1
        }
    },
    "B1300": {
        breakfast: {
            fruits: 0.5,
            carb: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1
        },
        lunch: {
            veg: 1,
            carb: 2,
            protein: 3,
            lipid: 1.5
        },
        snack2: {
            fruits: 1,
            carb: 1,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 1.5,
            protein: 2.5,
            lipid: 1
        }
    },
    "A1400": {
        breakfast: {
            carb: 2,
            lact: 0.5,
            protein: 1,
            lipid: 0.5
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carb: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2,
            protein: 2,
            lipid: 1
        }
    },
    "B1400": {
        breakfast: {
            fruits: 1,
            carb: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1,
            lact: 0.5
        },
        lunch: {
            veg: 1,
            carb: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carb: 1,
            protein: 1
        },
        dinner: {
            veg: 1,
            carb: 2,
            protein: 2,
            lipid: 1
        }
    },
    "A1500": {
        breakfast: {
            carb: 2,
            lact: 0.5,
            protein: 1,
            lipid: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carb: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2,
            lact: 0.5,
            protein: 2.5,
            lipid: 1
        }
    },
    "B1500": {
        breakfast: {
            fruits: 1,
            carb: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1,
            lact: 0.5
        },
        lunch: {
            veg: 1,
            carb: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carb: 1.5,
            protein: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1600": {
        breakfast: {
            carb: 2,
            lact: 0.5,
            protein: 2,
            lipid: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 2.5,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2,
            lact: 0.5,
            protein: 2.5,
            lipid: 1
        }
    },
    "B1600": {
        breakfast: {
            fruits: 1,
            carb: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            fruits: 0,
            carb: 3,
            lact: 0,
            protein: 2.5,
            lipid: 1
        },
        dinner: {
            veg: 1,
            fruits: 0,
            carb: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1700": {
        breakfast: {
            protein: 1,
            carb: 2,
            lact: 1,
            lip: 0.5
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3,
            lipid: 1.5
        },
        snack2: {
            fruits: 2,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2.5,
            lact: 1,
            protein: 2.5,
            lipid: 1
        }
    },
    "B1700": {
        breakfast: {
            fruits: 1,
            carb: 2,
            lact: 1
        },
        snack1: {
            fruits: 1,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 1.5,
            carb: 1,
            protein: 1
        },
        dinner: {
            veg: 1,
            carb: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1800": {
        breakfast: {
            carb: 3,
            lact: 1,
            protein: 2,
            lip: 1
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "B1800": {
        breakfast: {
            fruits: 2,
            carb: 2,
            lact: 1
        },
        snack1: {
            fruits: 1,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3,
            lipid: 1.5
        },
        snack2: {
            fruits: 1,
            carb: 2,
            protein: 2
        },
        dinner: {
            veg: 1,
            carb: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1900": {
        breakfast: {
            carb: 2,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3.5,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 3,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "B1900": {
        breakfast: {
            fruits: 1,
            carb: 2.5,
            lact: 1
        },
        snack1: {
            fruits: 1,
            lact: 0.5
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1.5,
            carb: 2,
            protein: 1
        },
        dinner: {
            veg: 1,
            carb: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A2000": {
        breakfast: {
            carb: 2.5,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carb: 4,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 2,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 4,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "B2000": {
        breakfast: {
            carb: 2.5,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carb: 4,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 2,
            carb: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 4,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A2100": {
        breakfast: {
            carb: 4,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carb: 4,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 2.5,
            carb: 1,
            lact: 1
        },
        dinner: {
            veg: 1,
            carb: 4,
            lact: 0.5,
            protein: 3.5,
            lipid: 1
        }
    },
    "B2100": {
        breakfast: {
            fruits: 1,
            carb: 3,
            lact: 1
        },
        snack1: {
            fruits: 2,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 3.5,
            lipid: 2
        },
        snack2: {
            fruits: 1,
            carb: 2,
            protein: 2
        },
        dinner: {
            veg: 1,
            carb: 3,
            lact: 0.5,
            protein: 3.5,
            lipid: 1
        }
    },
    "A2200": {
        breakfast: {
            carb: 3,
            lact: 1,
            protein: 3,
            lipid: 1
        },
        snack1: {
            fruits: 3
        },
        lunch: {
            veg: 1,
            carb: 4,
            protein: 3.5,
            lipid: 2
        },
        snack2: {
            fruits: 2,
            carb: 3,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 4,
            lact: 1,
            protein: 3,
            lipid: 1.5
        }
    },
    "B2200": {
        breakfast: {
            fruits: 2,
            carb: 3,
            lact: 1
        },
        snack1: {
            fruits: 2,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carb: 3,
            protein: 4,
            lipid: 2
        },
        snack2: {
            fruits: 1.5,
            carb: 3,
            protein: 1.5
        },
        dinner: {
            veg: 1,
            carb: 3,
            lact: 0.5,
            protein: 4,
            lipid: 1.5
        }
    },
    "A2300": {
        breakfast: {
            carb: 3,
            lact: 1,
            protein: 2.5,
            lipid: 1
        },
        snack1: {
            fruits: 3,
            lact: 1
        },
        lunch: {
            veg: 1,
            carb: 4,
            protein: 4,
            lipid: 2
        },
        snack2: {
            fruits: 2,
            carb: 3,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carb: 4,
            protein: 3.5,
            lipid: 1
        }
    },
    "B2300": {
        breakfast: {
            fruits: 2,
            carb: 3,
            lact: 1
        },
        snack1: {
            fruits: 1.5,
            lact: 1,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carb: 4,
            protein: 4,
            lipid: 2
        },
        snack2: {
            fruits: 1,
            carb: 3,
            protein: 3
        },
        dinner: {
            veg: 1,
            carb: 3,
            lact: 0.5,
            protein: 3,
            lipid: 1.5
        }
    }
};
exports.default = diets;
//# sourceMappingURL=tables.js.map