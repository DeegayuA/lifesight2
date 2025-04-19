import {NextResponse} from "next/server";
import {AdminAuthCheck} from "@/app/api/authenticate";
import {getPagedContactService, statusChangeContactService} from "@/app/api/contact/service";

export async function POST(request: Request) {
    const body = await request.json()

    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await getPagedContactService(body)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}

export async function PUT(request: Request) {
    const body = await request.json()

    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await statusChangeContactService(body)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
