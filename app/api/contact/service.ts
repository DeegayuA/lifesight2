import {createContact, getPagedContactRepo} from "./repo"


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
