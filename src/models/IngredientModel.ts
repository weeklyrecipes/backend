import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IIngredientModel extends Document {
  createdAt ? : Date,
  updatedAt ? : Date,
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
}

const IngredientSchema: Schema = new Schema({
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
        const doc: IIngredientModel = this._doc;
        const now: Date = new Date();

        if (!doc.createdAt) {
            doc.createdAt = now;
        }
        doc.updatedAt = now;
    }
    next();

    return this;
});

export default connections.db.model < IIngredientModel >('IngredientModel', IngredientSchema);
