"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../config/connection");
const mongoose_1 = require("mongoose");
// 0 -> 1 mois
// 1 -> 6 mois
// 2 -> 12 mois
const PromoSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        enum: [0, 1, 2],
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'valid', 'expired'],
        default: 'available'
    },
    duration: {
        type: Number,
        default: 30
    },
    purchaseDate: {
        type: Date
    }
}, {
    collection: 'promomodel',
    versionKey: false
});
exports.default = connections.db.model('PromoModel', PromoSchema);
//# sourceMappingURL=PromoModel.js.map