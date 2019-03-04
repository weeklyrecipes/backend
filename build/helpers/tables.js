"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menus = {
    "a1200": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            prot: 1
        },
        snack1: {
            fruits: 1
        },
        lunch: {
            veg: 1,
            carbs: 2,
            prot: 2.5,
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
            prot: 2,
            lipid: 1
        }
    },
    "b1200": {
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
            prot: 2,
            lipid: 1.5
        },
        snack2: {
            carbs: 1,
            lact: 0.5,
            prot: 1
        },
        dinner: {
            veg: 1,
            carbs: 1,
            prot: 2,
            lipid: 1
        }
    },
    "a1300": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            prot: 1
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carbs: 3,
            prot: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            lact: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            prot: 2,
            lipid: 1
        }
    },
    "b1300": {
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
            prot: 3,
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
            prot: 2.5,
            lipid: 1
        }
    },
    "a1400": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            prot: 1,
            lipid: 0.5
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carbs: 2,
            prot: 3,
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
            prot: 2,
            lipid: 1
        }
    },
    "b1400": {
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
            prot: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carbs: 1,
            prot: 1
        },
        dinner: {
            veg: 1,
            carbs: 2,
            prot: 2,
            lipid: 1
        }
    },
    "a1500": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            prot: 1,
            lipid: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carbs: 2,
            prot: 3,
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
            prot: 2.5,
            lipid: 1
        }
    },
    "b1500": {
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
            prot: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1,
            carbs: 1.5,
            prot: 0.5
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            prot: 3,
            lipid: 1
        }
    },
    "a1600": {
        breakfast: {
            carbs: 2,
            lact: 0.5,
            prot: 2,
            lipid: 0.5
        },
        snack1: {
            fruits: 1.5
        },
        lunch: {
            veg: 1,
            carbs: 3,
            prot: 2.5,
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
            prot: 2.5,
            lipid: 1
        }
    },
    "b1600": {
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
            prot: 2.5,
            lipid: 1
        },
        dinner: {
            veg: 1,
            fruits: 0,
            carbs: 2,
            lact: 0.5,
            prot: 3,
            lipid: 1
        }
    },
    "a1700": {
        breakfast: {
            prot: 1,
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
            prot: 3,
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
            prot: 2.5,
            lipid: 1
        }
    },
    "b1700": {
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
            prot: 3.5,
            lipid: 1.5
        },
        snack2: {
            fruits: 1.5,
            carbs: 1,
            prot: 1
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            prot: 3,
            lipid: 1
        }
    },
    "a1800": {
        breakfast: {
            carbs: 3,
            lact: 1,
            prot: 2,
            lip: 1
        },
        snack1: {
            fruits: 2
        },
        lunch: {
            veg: 1,
            carbs: 3,
            prot: 3,
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
            prot: 3,
            lipid: 1
        }
    },
    "b1800": {
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
            prot: 3,
            lipid: 1.5
        },
        snack2: {
            fruits: 1,
            carbs: 2,
            prot: 2
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            prot: 3,
            lipid: 1
        }
    },
    "a1900": {
        breakfast: {
            carbs: 2,
            lact: 1,
            prot: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 3,
            prot: 3.5,
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
            prot: 3,
            lipid: 1
        }
    },
    "b1900": {
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
            prot: 3,
            lipid: 1
        },
        snack2: {
            fruits: 1.5,
            carbs: 2,
            prot: 1
        },
        dinner: {
            veg: 1,
            carbs: 2,
            lact: 0.5,
            prot: 3,
            lipid: 1
        }
    },
    "a2000": {
        breakfast: {
            carbs: 2.5,
            lact: 1,
            prot: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 4,
            prot: 3.5,
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
            prot: 3,
            lipid: 1
        }
    },
    "b2000": {
        breakfast: {
            carbs: 2.5,
            lact: 1,
            prot: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 4,
            prot: 3.5,
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
            prot: 3,
            lipid: 1
        }
    },
    "a2100": {
        breakfast: {
            carbs: 4,
            lact: 1,
            prot: 2,
            lipid: 1
        },
        snack1: {
            fruits: 2.5
        },
        lunch: {
            veg: 1,
            carbs: 4,
            prot: 3.5,
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
            prot: 3.5,
            lipid: 1
        }
    },
    "b2100": {
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
            prot: 3.5,
            lipid: 2
        },
        snack2: {
            fruits: 1,
            carbs: 2,
            prot: 2
        },
        dinner: {
            veg: 1,
            carbs: 3,
            lact: 0.5,
            prot: 3.5,
            lipid: 1
        }
    },
    "a2200": {
        breakfast: {
            carbs: 3,
            lact: 1,
            prot: 3,
            lipid: 1
        },
        snack1: {
            fruits: 3
        },
        lunch: {
            veg: 1,
            carbs: 4,
            prot: 3.5,
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
            prot: 3,
            lipid: 1.5
        }
    },
    "b2200": {
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
            prot: 4,
            lipid: 2
        },
        snack2: {
            fruits: 1.5,
            carbs: 3,
            prot: 1.5
        },
        dinner: {
            veg: 1,
            carbs: 3,
            lact: 0.5,
            prot: 4,
            lipid: 1.5
        }
    }
};
exports.diets = menus;
//# sourceMappingURL=tables.js.map