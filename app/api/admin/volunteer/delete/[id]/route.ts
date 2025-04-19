import {NextResponse} from "next/server";
import {AdminAuthCheck} from "@/app/api/authenticate";
import {deleteVolunteerByAdminService} from "@/app/api/volunteer/service";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await deleteVolunteerByAdminService(id)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
