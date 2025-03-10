import {createVolunteer, findFirstVolunteer, findUniqueVolunteer} from "@/app/api/volunteer/repo";
import crypto from "crypto";


export async function createVolunteerService(body: any) {
    try {
        const vol = await findFirstVolunteer(body.email)
        if (vol) {
            throw new Error(`Volunteer email is already exist!`);
        }
        if (!body.password) {
            body.password = crypto.randomBytes(15).toString("hex").slice(0, 10);
        }
        const result: any = await createVolunteer(body)
        delete result.password
        return result
    } catch (e) {
        throw e;
    }
}

export async function getOneByIdVolunteerService(id: string) {
    try {
        const result: any = await findUniqueVolunteer(id)
        delete result.password
        return result
    } catch (e) {
        throw e;
    }
}
