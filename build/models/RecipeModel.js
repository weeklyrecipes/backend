"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var connections = require("../config/connection");
var mongoose_1 = require("mongoose");
var RecipeSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['breakfast', 'lunch', 'dinner', 'snack']
    },
    ingredients: {
        type: Array,
        required: true
    },
    calories: {
        type: Number,
        default: 0
    },
    cookingTime: {
        type: Number,
        default: 0
    },
    allergens: {
        type: Array
    },
    macro: {
        type: Object,
        default: 0
    },
    photo_url: {
        type: String,
        default: ""
    },
    instructions: {
        type: String
    }
}, {
    collection: 'recipemodel',
    versionKey: false
}).pre('save', function (next) {
    // this will run before saving
    if (_this._doc) {
        var doc = _this._doc;
        var now = new Date();
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();
    return _this;
});
exports.default = connections.db.model('RecipeModel', RecipeSchema);
//# sourceMappingURL=RecipeModel.js.map