import {createVolunteer, findFirstVolunteer} from "@/app/api/volunteer/repo";
import bcrypt from "bcryptjs";
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
        const result = await createVolunteer(body)
        result.password = '';
        return result
    } catch (e) {
        throw e;
    }
}
