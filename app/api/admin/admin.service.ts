import {
    activationAdminByAdminRepo,
    createAdmin, deleteAdminByAdminRepo,
    findFirstAdmin,
    findUniqueAdmin,
    getPagedAdminByAdminRepo,
    updateAdmin
} from "@/app/api/admin/admin.repo";
import bcrypt from 'bcryptjs'

export async function createAdminService(body: any) {

    try {
        const admin = await findFirstAdmin(body.email)
        if (admin) {
            throw new Error(`Admin email is already exist!`);
        }
        const hash = await bcrypt.hash(body.password, 10)
        const result = await createAdmin({...body, password: hash})
        result.password = '';
        return result
    } catch (e) {
        throw e;
    }
}

export async function loginAdminService(body: any) {

    try {
        const admin = await findFirstAdmin(body.email)
        if (!admin) {
            throw new Error(`Invalid admin credentials!`);
        }

        const validPassword = await bcrypt.compare(body.password, admin.password)
        if (!validPassword) {
            throw new Error(`Invalid credentials!`);
        }

        return {logging: true}
    } catch (e) {
        throw e
    }
}

export async function findAuthAdminService(id: any) {

    try {
        const admin = await findUniqueAdmin(id)
        return admin
    } catch (e) {
        throw e;
    }
}
export async function getOneByIdAdminService(id: string) {
    try {
        const result: any = await findUniqueAdmin(id)
        result.password = undefined
        return result
    } catch (e) {
        throw e;
    }
}
export async function updateAdminService(body: any) {
    try {
        if (body.password) {
            return {validCheck: true, message: "Password can't change here!"}
        }
        const result: any = await updateAdmin(body)
       result.password = undefined
        return result
    } catch (e) {
        throw e;
    }
}
export async function deleteAdminByAdminService(id: any) {
    try {
        const result = await deleteAdminByAdminRepo(id)
        return result
    } catch (e) {
        throw e
    }
}

export async function activationAdminByAdminService(data: any) {
    try {
        const result = await activationAdminByAdminRepo(data.id, data)
        return result
    } catch (e) {
        throw e
    }
}
export async function getPagedAdminByAdminService(body: any) {
    try {
        const result = await getPagedAdminByAdminRepo(body)
        return result
    } catch (e) {
        throw e
    }
}
