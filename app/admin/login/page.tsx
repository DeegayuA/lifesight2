'use client'

import {LoginForm} from "@/components/login-form";
import {USER} from "@/lib/constants";
import {signIn} from "next-auth/react";
import {GalleryVerticalEnd} from "lucide-react";

export default function LoginPage() {

    const login = async (type: string, data?: any) => {
        try {
            const result = await signIn(type, {...data, userType: 'ADMIN', callbackUrl: "/admin/protect/dashboard"});
            if (result?.error) {
                console.error(result?.error)
            }
        } catch (e) {
            console.error(e)
        }
    }


    return (
        <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex items-center gap-2 self-center font-medium">
                    <div
                        className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
                        <GalleryVerticalEnd className="size-4"/>
                    </div>
                    Acme Inc.
                </a>
                <LoginForm userType={USER.ADMIN} onLogin={login}/>
            </div>
        </div>
    )
}
