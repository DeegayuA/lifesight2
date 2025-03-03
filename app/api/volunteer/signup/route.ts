import {NextResponse} from "next/server";
import {createVolunteerService} from "@/app/api/volunteer/service";

export async function POST(request: any) {
    const body = await request.json()

    if (!body.email || !body.password || !body.name) {
        return NextResponse.json(
            {error: 'Name, Email & Password are required!'},
            {status: 400},
        )
    }
    try {
        const data = await createVolunteerService(body)
        return NextResponse.json(data, {status: 200})
    } catch (e) {
        throw e
    }
}
