"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../config/connection");
const mongoose_1 = require("mongoose");
const PromoSchema = new mongoose_1.Schema({
    code: {
        type: String,
        required: true
    },
    type: {
        type: Number,
        enum: [1, 6, 12],
        required: true
    },
    status: {
        type: String,
        enum: ['available', 'valid', 'expired'],
        default: 'available'
    },
    exp_date: {
        type: Date
    },
    userId: {
        type: String
    }
}, {
    collection: 'promomodel',
    versionKey: false
}).pre('save', (next) => {
    // this will run before saving
    const now = new Date();
    next();
    return this;
});
exports.default = connections.db.model('PromoModel', PromoSchema);
//# sourceMappingURL=PromoModel.js.map