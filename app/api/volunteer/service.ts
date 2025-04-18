import {
    createVolunteer,
    findFirstVolunteer,
    findUniqueVolunteer,
    getPagedVolunteerByAdminRepo,
    updateVolunteer
} from "@/app/api/volunteer/repo";
import crypto from "crypto";
import {sendEmailService} from "@/lib/mail.config";
import {getPagedContactRepo} from "@/app/api/contact/repo";


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
            '<p>Volunteer Account Created</p>',
            {},
            result.email,
            `Welcome to Life Sight`
        );
        result.password = undefined
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
        result.password = undefined
        return result
    } catch (e) {
        throw e;
    }
}

export async function getOneByIdVolunteerService(id: string) {
    try {
        const result: any = await findUniqueVolunteer(id)
        result.password = undefined
        return result
    } catch (e) {
        throw e;
    }
}

export async function getPagedVolunteerByAdminService(body: any) {
    try {
        const result = await getPagedVolunteerByAdminRepo(body)
        return result
    } catch (e) {
        throw e
    }
}
