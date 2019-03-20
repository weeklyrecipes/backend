"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../config/connection");
const mongoose_1 = require("mongoose");
const RecipeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['breakfast', 'breakfastA', 'breakfastB', 'lunch', 'dinner', 'snack1', 'snack1A', 'snack1B', 'snack2', 'snack2A', 'snack2B']
    },
    ingredients: {
        type: Array,
        required: true
    },
    cookingTime: {
        type: Number,
        default: 0
    },
    allergens: {
        type: Array
    },
    macro: {
        type: Object
    },
    photo_url: {
        type: String,
        default: ""
    },
    instructions: {
        type: String
    },
    createdAt: Date,
    updatedAt: Date
}, {
    collection: 'recipemodel',
    versionKey: false
}).pre('save', (next) => {
    // this will run before saving
    if (this._doc) {
        const doc = this._doc;
        const now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();
    return this;
});
exports.default = connections.db.model('RecipeModel', RecipeSchema);
//# sourceMappingURL=RecipeModel.js.map