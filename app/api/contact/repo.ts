import {prisma} from "@/lib/prisma";


export async function createContact(data: any) {
    try {
        return await prisma.contact.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                phone: data.phone,
                message: data.message
            }
        })
    } catch (e: any) {
        throw e;
    }
}
