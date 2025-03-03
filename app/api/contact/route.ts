import { NextResponse } from "next/server";



export async function POST(request: any) {
    try {
        const body = await request.json();

        if (!body.firstName || !body.lastName || !body.email || !body.phone || !body.message) {
            return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
        }

        const data = await createContactService(body)
        return NextResponse.json({ success: true, data}, { status: 200 });

    } catch (error: any) {
        let errorMessage = "Internal Server Error";

        if (typeof error === "object" && error !== null) {
            if ("code" in error) {
                if (error.code === "P2002") {
                    errorMessage = "A contact with this email already exists.";
                } else {
                    errorMessage = `Prisma error code: ${error.code}`;
                }
            } else {
                errorMessage = JSON.stringify(error);
            }
        }

        return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
    }
}
