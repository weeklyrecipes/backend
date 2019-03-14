import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IUserModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    name: String;
    email: String;
    menus: Object;
    pass: any;
    _id: String;
    activity: Number;
    allergens: Array<any>;
    gender: String;
    birthday: Date;
    weight: Number;
    height: Number;
    objective: Number;
    calories: Number;
    week: String;
    diet: Object;
}

const UserSchema: Schema = new Schema({
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
    if (this._doc) {
        const doc: IUserModel = this._doc;
        const now: Date = new Date();

        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();

    return this;
});

export default connections.db.model < IUserModel >('UserModel', UserSchema);
