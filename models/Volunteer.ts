// models/User.ts
import mongoose, {Schema, model, models, Document} from 'mongoose';

export interface IVolunteer extends Document {
    id: any;
    name: string;
    email: string;
    password: string;
    image: string
    createdAt: Date
    updatedAt: Date
    phone: string
    location: string
    language: string
    availability: string[]
    experience: string
    experience_details: string
    skills: string
    tasks: string
    preferences: string
    diverse_backgrounds: string
    emergency_contact: string
    emergency_phone: string
    consent: string
    updates: string
    signature: string
    rate: number
    active: boolean
    archived: boolean
}

const VolunteerSchema = new Schema<IVolunteer>({
    name: {
        type: String,
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
    image: {
        type: String,
    },
    phone: {
        type: String,
    },
    location: {
        type: String,
    },
    experience: {
        type: String,
    },
    experience_details: {
        type: String,
    },
    skills: {
        type: String,
    },
    tasks: {
        type: String,
    },
    preferences: {
        type: String,
    },
    diverse_backgrounds: {
        type: String,
    },
    emergency_contact: {
        type: String,
    },
    emergency_phone: {
        type: String,
    },
    consent: {
        type: String,
    },
    updates: {
        type: String,
    },
    signature: {
        type: String,
    },
    availability: {
        type: [String],
    },
    language: {
        type: String,
        default: "English"
    },
    active: {
        type: Boolean,
        default: true
    },
    rate: {
        type: Number,
        default: 0
    },
    archived: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: () => new Date()
    },
});

// ✨ Transform _id to id and remove __v
VolunteerSchema.set('toJSON', {
    virtuals: true,
    transform: (_, ret) => {
        ret.id = ret._id.toString();
        delete ret._id;
    },
});

const Volunteer = models.Volunteer || model<IVolunteer>('Volunteer', VolunteerSchema);
export default Volunteer;
