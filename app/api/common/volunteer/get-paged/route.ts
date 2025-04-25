import {NextResponse} from "next/server";
import {AdminAuthCheck} from "@/app/api/authenticate";
import {getPagedVolunteerByAdminService, getPagedVolunteerForCommonService} from "@/app/api/volunteer/service";

export async function POST(request: Request) {
    const body = await request.json()

    try {

        const data = await getPagedVolunteerForCommonService(body)
        return NextResponse.json(data,{status: 200})
    } catch (e) {
        throw e
    }
}
