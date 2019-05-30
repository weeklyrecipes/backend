import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IPromoModel extends Document {
    value: string;
    status: string;
    duration: number;
    date: Date;
}

// 0 -> 1 mois
// 1 -> 6 mois
// 2 -> 12 mois

const PromoSchema: Schema = new Schema({
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

export default connections.db.model < IPromoModel >('PromoModel', PromoSchema);
