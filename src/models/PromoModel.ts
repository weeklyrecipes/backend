import * as connections from '../config/connection';
import { Schema, Document } from 'mongoose';

export interface IPromoModel extends Document {
    value: string;
    validity: string;
}

const PromoSchema: Schema = new Schema({
    value: {
        type: String,
        required: true
    },
    validity: {
        type: String,
        required: true
    },
    status: {
      type: String,
      enum: ['available', 'valid', 'expired'],
      default: 'available'
    }
}, {
    collection: 'promomodel',
    versionKey: false
});

export default connections.db.model < IPromoModel >('PromoModel', PromoSchema);
