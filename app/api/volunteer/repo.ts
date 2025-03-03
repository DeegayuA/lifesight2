import {prisma} from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function findFirstVolunteer(email: string) {
    try {
        return await prisma.volunteer.findFirst({
            where: {
                email: email.toLowerCase()
            }
        })
    } catch (e: any) {
        throw e;
    }
}

export async function createVolunteer(data: any) {
    data.password = await bcrypt.hash(data.password, 10)
    try {
        return await prisma.volunteer.create({
            data: {...data}
        })
    } catch (e: any) {
        throw e;
    }
}
