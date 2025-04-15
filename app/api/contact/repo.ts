import {connectToDatabase} from "@/lib/mongodb";
import Contact from "@/models/Contact";


export async function createContact(data: any) {
    try {
        await connectToDatabase();
        return await Contact.create(
             {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                message: data.message
            }
        )
    } catch (e: any) {
        throw e;
    }
}
