"use client";

import Header from "@/components/hero-ui/Header";
import Footer from "@/components/hero-ui/Footer";
import {LoggedUserProvider} from "@/components/user-provider";

export default function RootLayout({children}: { children: React.ReactNode; }) {

    return (

        <LoggedUserProvider>
            <div>
                <Header className="sticky top-0 w-full"/>
                <div className='overflow-auto'>
                    {children}
                </div>
                <Footer className="fixed bottom-0 w-full"/>
            </div>
        </LoggedUserProvider>

    );
}
