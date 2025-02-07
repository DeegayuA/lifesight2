import {NextResponse} from "next/server";
import {AuthCheck} from "@/app/api/authenticate";
import {createAdminService} from "@/app/api/admin/admin.service";


export async function POST(request: any) {
    const body = await request.json()

    if (!body.email || !body.password) {
        return NextResponse.json(
            { error: 'Email & Password are required!' },
            { status: 200 },
        )
    }
    try {
        const result: any = await AuthCheck()
        if (result.userAuth) {
            const data = await createAdminService(body)

            return NextResponse.json(data, {status: 200})
        }
        return NextResponse.json({ error: 'Unauthorized request!' }, { status: 200 })

    } catch (e) {
        return NextResponse.json(
            { error: 'Failed to create admin!' },
            { status: 500 },
        )
    }
}
