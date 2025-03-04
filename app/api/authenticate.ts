import {NextResponse} from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


export async function AuthCheck() {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        return true
    } catch (e) {
        throw e
    }
}
