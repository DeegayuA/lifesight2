import {NextResponse} from "next/server";
import {AdminAuthCheck} from "@/app/api/authenticate";
import {getOneByIdAdminService, updateAdminService} from "@/app/api/admin/admin.service";
import {updateVolunteerService} from "@/app/api/volunteer/service";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await getOneByIdAdminService(id)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const body = await request.json()

    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await updateAdminService({...body, id})
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
