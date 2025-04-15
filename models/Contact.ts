// models/User.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IContact extends Document {
    id: any;
    email: string;
    createdAt: Date
    updatedAt: Date
    firstName: string
    lastName: string
    phone: string
    message: string
}

const ContactSchema = new Schema<IContact>({
    firstName: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
});

// ✨ Transform _id to id and remove __v
ContactSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
    },
});

const Contact = models.Contact || model<IContact>('Contact', ContactSchema);
export default Contact;
