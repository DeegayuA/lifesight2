import Admin from "@/models/Admin";
import {connectToDatabase} from "@/lib/mongodb";


export async function createAdmin(data: any) {

    try {
        await connectToDatabase();
        return await Admin.create({

            name: data.name,
            email: data.email,
            password: data.password,
            updatedAt: data.updatedAt

        })
    } catch (e: any) {
        throw e;
    }
}

export async function findFirstAdmin(email: string) {

    try {
        await connectToDatabase();
        return await Admin.findOne({
            email: email.toLowerCase()
        }).exec()
    } catch (e: any) {
        throw e;
    }
}

export async function findUniqueAdmin(id: string) {

    try {
        await connectToDatabase();
        return await Admin.findById(id
        ).exec()
    } catch (e: any) {
        throw e;
    }
}
