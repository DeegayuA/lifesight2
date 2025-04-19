import {createContact, getPagedContactRepo, statusChangeContactRepo} from "./repo"


export async function createContactService(body: any) {
    try {
        const result = await createContact(body)
        return result
    } catch (e) {
        throw e
    }
}

export async function getPagedContactService(body: any) {
    try {
        const result = await getPagedContactRepo(body)
        return result
    } catch (e) {
        throw e
    }
}
export async function statusChangeContactService(data: any) {
    try {
        const result = await statusChangeContactRepo(data.id, data)
        return result
    } catch (e) {
        throw e
    }
}
