"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var connections = require("../config/connection");
var mongoose_1 = require("mongoose");
var IngredientSchema = new mongoose_1.Schema({
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
exports.default = connections.db.model('IngredientModel', IngredientSchema);
//# sourceMappingURL=IngredientModel.js.map