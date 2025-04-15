import bcrypt from "bcryptjs";
import {connectToDatabase} from "@/lib/mongodb";
import Volunteer from "@/models/Volunteer";

export async function findFirstVolunteer(email: string) {
    try {
        await connectToDatabase();
        return await Volunteer.findOne({ email: email.toLowerCase()}).exec()
    } catch (e: any) {
        throw e;
    }
}
export async function findUniqueVolunteer(id: string) {
    try {
        await connectToDatabase();
        return await Volunteer.findById(id).exec();
    } catch (e: any) {
        throw e;
    }
}

export async function createVolunteer(data: any) {
    data.password = await bcrypt.hash(data.password, 10)
    try {
        await connectToDatabase();
        return await Volunteer.create({
            ...data
        })
    } catch (e: any) {
        throw e;
    }
}

export async function updateVolunteer(data: any) {
    try {
        await connectToDatabase();
        return await Volunteer.findByIdAndUpdate(data.id,  {$set: {...data}}, { new: true }).exec();
    } catch (e: any) {
        throw e;
    }
}
