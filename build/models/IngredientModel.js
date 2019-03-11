"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../config/connection");
const mongoose_1 = require("mongoose");
const IngredientSchema = new mongoose_1.Schema({
    name: String,
    kcal: Number,
    kj: Number,
    proteins: Number,
    glucides: Number,
    lipides: Number,
    sucres: Number,
    fibres: String,
    alcool: Number,
    cholesterol: Number,
    calcium: Number,
    fer: Number,
    sodium: Number
}, {
    collection: 'ingredientmodel',
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
exports.default = connections.db.model('IngredientModel', IngredientSchema);
//# sourceMappingURL=IngredientModel.js.map