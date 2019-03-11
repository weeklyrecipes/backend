"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../config/connection");
const mongoose_1 = require("mongoose");
const PromoSchema = new mongoose_1.Schema({
    value: {
        type: String,
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
    date: {
        type: Date
    }
}, {
    collection: 'promomodel',
    versionKey: false
});
exports.default = connections.db.model('PromoModel', PromoSchema);
//# sourceMappingURL=PromoModel.js.map