import {createAdmin} from "@/app/api/admin/admin.repo";

export async function createAdminService(body: any) {

    try {
        const admin = await createAdmin(body)
        return admin
    } catch (e) {
        throw new Error(`Can't create admin!`);
    }
}
