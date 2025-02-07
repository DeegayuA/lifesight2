import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient()

export async function createAdmin(body: any) {

    try {
        return await prisma.admin.create({
            data: {
                email: body.email,
                password: body.password
            }
        })
    } catch (e: any) {
        throw e;
    } finally {
        await prisma.$disconnect()
    }
}
