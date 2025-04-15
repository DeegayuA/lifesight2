import {NextResponse} from "next/server";
import {getOneByIdVolunteerService, updateVolunteerService} from "@/app/api/volunteer/service";
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
export async function POST(request: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    const body = await request.json()

    try {
        const authCheck: NextResponse | any = await AuthCheck()

        if (authCheck?.authCheck) {
            const data = await updateVolunteerService({...body, id})
            return NextResponse.json(data,{status: 200})
        }
        return authCheck
    } catch (e) {
        throw e
    }
}
