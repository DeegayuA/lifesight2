import {NextResponse} from "next/server";
import {AdminAuthCheck} from "@/app/api/authenticate";
import {deleteAdminByAdminService} from "@/app/api/admin/admin.service";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params

    try {
        const authCheck: NextResponse | any = await AdminAuthCheck()

        if (authCheck?.authCheck) {
            const data = await deleteAdminByAdminService(id)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
