import {NextResponse} from "next/server";
import {getOneByIdVolunteerService} from "@/app/api/volunteer/service";
import {AuthCheck} from "@/app/api/authenticate";

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    try {
        const authCheck: NextResponse | any = await AuthCheck()

        if (authCheck?.authCheck) {
            const data = await getOneByIdVolunteerService(id)
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
