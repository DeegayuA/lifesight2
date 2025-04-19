import {NextResponse} from "next/server";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";


export async function AdminAuthCheck() {
    try {
        const session: any = await getServerSession(authOptions);
        if (!session) {
            return  NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        if (session?.user?.userType !== "ADMIN") {
            return  NextResponse.json({ error: "Router not permitted!" }, { status: 403 });
        }

        return {authCheck: true}
    } catch (e) {
        throw e
    }
}
export async function VolunteerAuthCheck() {
    try {
        const session: any = await getServerSession(authOptions);
        if (!session) {
            return  NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }
        if (session?.user?.userType !== "VOL") {
            return  NextResponse.json({ error: "Router not permitted!" }, { status: 403 });
        }

        return {authCheck: true}
    } catch (e) {
        throw e
    }
}
