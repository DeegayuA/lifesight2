import {createVolunteer, findFirstVolunteer, findUniqueVolunteer, updateVolunteer} from "@/app/api/volunteer/repo";
import crypto from "crypto";
import {sendEmailService} from "@/lib/mail.config";


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
        await sendEmailService(
            '',
            {},
            result.email,
            `Welcome to Life Sight`
        );
        delete result.password
        return result
    } catch (e) {
        throw e;
    }
}
export async function updateVolunteerService(body: any) {
    try {
        if (body.password) {
            return {validCheck: true, message: "Password can't change here!"}
        }
        const result: any = await updateVolunteer(body)
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
