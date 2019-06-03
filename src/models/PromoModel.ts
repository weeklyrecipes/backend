import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IPromoModel extends Document {
    code: string;
    type: number;
    status: string;
    exp_date: Date;
    userId: string;
}

const PromoSchema: Schema = new Schema({
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
    const now: Date = new Date();
    next();
    return this;
});

export default connections.db.model < IPromoModel >('PromoModel', PromoSchema);
