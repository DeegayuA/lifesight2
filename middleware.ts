import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
    async function middleware(req) {
        const { token }: {token: any} = req.nextauth;

        if (!token) {
            return NextResponse.redirect(new URL("/", req.nextUrl));
        }

        const { userType, exp }: { userType: string; exp: number } = token;
        const currentTime = Math.floor(Date.now() / 1000);

        // If session expired, redirect to login
        if (exp && exp < currentTime) {
            return NextResponse.redirect(new URL("/", req.nextUrl));
        }
        if (req.nextUrl.pathname.startsWith("/admin/protect") && userType !== "ADMIN") {
            return NextResponse.redirect(new URL("/admin/login", req.nextUrl));
        }

        if (req.nextUrl.pathname.startsWith("/volunteer/protect") && userType !== "VOL") {
            return NextResponse.redirect(new URL("/volunteer/login", req.nextUrl));
        }

        return NextResponse.next();
    },
    {
        callbacks: {
            authorized: ({ token }) => !!token,
        },
    }
);

export const config = {
    matcher: ["/admin/protect/:path*", "/volunteer/protect/:path*"],
};
