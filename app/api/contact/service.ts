import { createContact } from "./repo"


export async function createContactService(body: any) {
    try {
        const result = await createContact(body)
        return result
    } catch (e) {
        throw e
    }
}
