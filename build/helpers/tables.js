"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diets = {
    "A1200": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            protein: 1
        },
        snack1: {
            fruits: 1
        },
        lunch: {
            veg: 1,
            carbs: 2,
            protein: 2.5,
            lipid: 1
        },
        snack2: {
            fruits: 1.5,
            carbs: 1,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            protein: 2,
            lipid: 1
        }
    },
    "B1200": {
        breakfast: {
            fruits: 1,
            carbs: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carbs: 2,
            protein: 2,
            lipid: 1.5
        },
        snack2: {
            carbs: 1,
            lact: 0.5,
            protein: 1
        },
        dinner: {
            veg: 1,
            carbs: 1,
            protein: 2,
            lipid: 1
        }
    },
    "A1300": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            protein: 1
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            protein: 2,
            lipid: 1
        }
    },
    "B1300": {
        breakfast: {
            fruits: 0.5,
            carbs: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1
        },
        lunch: {
            veg: 1,
            carbs: 2,
            protein: 3,
            lipid: 1.5
        },
        snack2: {
            fruits: 1,
            carbs: 1,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 1.5,
            protein: 2.5,
            lipid: 1
        }
    },
    "A1400": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            protein: 1,
            lipid: 0.5
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carbs: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            protein: 2,
            lipid: 1
        }
    },
    "B1400": {
        breakfast: {
            fruits: 1,
            carbs: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1,
            lact: 0.5
        },
        lunch: {
            veg: 1,
            carbs: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carbs: 1,
            protein: 1
        },
        dinner: {
            veg: 1,
            carbs: 2,
            protein: 2,
            lipid: 1
        }
    },
    "A1500": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            protein: 1,
            lipid: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carbs: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            protein: 2.5,
            lipid: 1
        }
    },
    "B1500": {
        breakfast: {
            fruits: 1,
            carbs: 2,
            lact: 0.5
        },
        snack1: {
            fruits: 1,
            lact: 0.5
        },
        lunch: {
            veg: 1,
            carbs: 2,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carbs: 1.5,
            protein: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1600": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            protein: 2,
            lipid: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 2.5,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            protein: 2.5,
            lipid: 1
        }
    },
    "B1600": {
        breakfast: {
            fruits: 1,
            carbs: 2,
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
            carbs: 3,
            lact: 0,
            protein: 2.5,
            lipid: 1
        },
        dinner: {
            veg: 1,
            fruits: 0,
            carbs: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1700": {
        breakfast: {
            protein: 1,
            carbs: 2,
            lact: 1,
            lip: 0.5
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3,
            lipid: 1.5
        },
        snack2: {
            fruits: 2,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2.5,
            lact: 1,
            protein: 2.5,
            lipid: 1
        }
    },
    "B1700": {
        breakfast: {
            fruits: 1,
            carbs: 2,
            lact: 1
        },
        snack1: {
            fruits: 1,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 1.5,
            carbs: 1,
            protein: 1
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1800": {
        breakfast: {
            carbs: 3,
            lact: 1,
            protein: 2,
            lip: 1
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "B1800": {
        breakfast: {
            fruits: 2,
            carbs: 2,
            lact: 1
        },
        snack1: {
            fruits: 1,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3,
            lipid: 1.5
        },
        snack2: {
            fruits: 1,
            carbs: 2,
            protein: 2
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A1900": {
        breakfast: {
            carbs: 2,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3.5,
            lipid: 1
        },
        snack2: {
            fruits: 2,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 3,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "B1900": {
        breakfast: {
            fruits: 1,
            carbs: 2.5,
            lact: 1
        },
        snack1: {
            fruits: 1,
            lact: 0.5
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1.5,
            carbs: 2,
            protein: 1
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A2000": {
        breakfast: {
            carbs: 2.5,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 4,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 2,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 4,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "B2000": {
        breakfast: {
            carbs: 2.5,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 4,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 2,
            carbs: 2,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 4,
            lact: 0.5,
            protein: 3,
            lipid: 1
        }
    },
    "A2100": {
        breakfast: {
            carbs: 4,
            lact: 1,
            protein: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 4,
            protein: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 2.5,
            carbs: 1,
            lact: 1
        },
        dinner: {
            veg: 1,
            carbs: 4,
            lact: 0.5,
            protein: 3.5,
            lipid: 1
        }
    },
    "B2100": {
        breakfast: {
            fruits: 1,
            carbs: 3,
            lact: 1
        },
        snack1: {
            fruits: 2,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 3.5,
            lipid: 2
        },
        snack2: {
            fruits: 1,
            carbs: 2,
            protein: 2
        },
        dinner: {
            veg: 1,
            carbs: 3,
            lact: 0.5,
            protein: 3.5,
            lipid: 1
        }
    },
    "A2200": {
        breakfast: {
            carbs: 3,
            lact: 1,
            protein: 3,
            lipid: 1
        },
        snack1: {
            fruits: 3
        },
        lunch: {
            veg: 1,
            carbs: 4,
            protein: 3.5,
            lipid: 2
        },
        snack2: {
            fruits: 2,
            carbs: 3,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 4,
            lact: 1,
            protein: 3,
            lipid: 1.5
        }
    },
    "B2200": {
        breakfast: {
            fruits: 2,
            carbs: 3,
            lact: 1
        },
        snack1: {
            fruits: 2,
            lact: 0.5,
            lipid: 1
        },
        lunch: {
            veg: 1,
            carbs: 3,
            protein: 4,
            lipid: 2
        },
        snack2: {
            fruits: 1.5,
            carbs: 3,
            protein: 1.5
        },
        dinner: {
            veg: 1,
            carbs: 3,
            lact: 0.5,
            protein: 4,
            lipid: 1.5
        }
    }
};
exports.default = diets;
//# sourceMappingURL=tables.js.map