"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connections = require("../config/connection");
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    _id: {
        type: String,
        required: true
    },
    menus: {
        type: Object,
        default: {}
    },
    diet: {
        type: Object
    },
    pass: {
        type: Object,
        default: false
    },
    activity: {
        type: Number
    },
    allergens: {
        type: Array
    },
    gender: {
        type: String
    },
    birthday: {
        type: Date
    },
    weight: {
        type: Number
    },
    height: {
        type: Number
    },
    objective: {
        type: Number,
        default: 0
    },
    calories: {
        type: Number,
        default: 0
    },
    week: {
        type: String,
        default: "A"
    },
    createdAt: Date,
    updatedAt: Date
}, {
    collection: 'usermodel',
    versionKey: false
}).pre('save', (next) => {
    // this will run before saving
    const now = new Date();
    if (this._doc) {
        let doc = this._doc;
        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();
    return this;
});
exports.default = connections.db.model('UserModel', UserSchema);
//# sourceMappingURL=UserModel.js.map