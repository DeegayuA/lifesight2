// models/User.ts
import mongoose, { Schema, model, models, Document } from 'mongoose';

export interface IAdmin extends Document {
    id: any;
    name: string;
    email: string;
    password: string;
    image: string
    phone: string
    role: string
    archived: boolean
    active: boolean
    createdAt: Date
    updatedAt: Date
}

const AdminSchema = new Schema<IAdmin>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
    },
    image: {
        type: String,
    },
    role: {
        type: String,
        enum: [
            "SUPER_ADMIN",
            "ADMIN",
            "EDITOR"
        ],
        required: [true, "Role is required"],
    },
    archived: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
});

// ✨ Transform _id to id and remove __v
AdminSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
    },
});

const Admin = models.Admin || model<IAdmin>('Admin', AdminSchema);
export default Admin;
