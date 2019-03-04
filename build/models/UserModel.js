"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var connections = require("../config/connection");
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
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
        type: Array
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
    age: {
        type: Number
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
    }
}, {
    collection: 'usermodel',
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
exports.default = connections.db.model('UserModel', UserSchema);
//# sourceMappingURL=UserModel.js.map