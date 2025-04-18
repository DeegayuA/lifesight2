import {NextResponse} from "next/server";
import {AdminAuthCheck} from "@/app/api/authenticate";
import {getPagedVolunteerByAdminService} from "@/app/api/volunteer/service";

export async function POST(request: Request) {
    const body = await request.json()

    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await getPagedVolunteerByAdminService(body)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
