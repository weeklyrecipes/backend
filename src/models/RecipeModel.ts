import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IRecipeModel extends Document {
    createdAt ? : Date;
    updatedAt ? : Date;
    ingredients: Array<any>;
    type: String;
    name: String;
    macro: Object;
    allergens: Array<any>;
    instructions: String;
    cookingTime: Number;
    photo_url: String;
}



const RecipeSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
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
        const doc: IRecipeModel = this._doc;
        const now: Date = new Date();

        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();

    return this;
});

export default connections.db.model < IRecipeModel >('RecipeModel', RecipeSchema);
