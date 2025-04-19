import {NextResponse} from "next/server";
import {AdminAuthCheck} from "@/app/api/authenticate";
import {activationVolunteerByAdminService} from "@/app/api/volunteer/service";

export async function PUT(request: Request) {
    const body = await request.json()

    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await activationVolunteerByAdminService(body)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
