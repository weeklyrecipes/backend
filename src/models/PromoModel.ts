import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IPromoModel extends Document {
    value: string;
    status: string;
    duration: number;
    date: Date;
}

const PromoSchema: Schema = new Schema({
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

export default connections.db.model < IPromoModel >('PromoModel', PromoSchema);
