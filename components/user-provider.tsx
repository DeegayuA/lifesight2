import React, {createContext, useContext, useEffect, useState} from "react";
import {apiRequest} from "@/core/api.handler";
import {useSession} from "next-auth/react";

type LoggedUserContextType = {
    setFetchUser: (fetch: boolean) => void;
    user: {
        id: any,
        name: string,
        email: string,
        image: string,
    };
}

const LoggedUserContext = createContext<LoggedUserContextType | undefined>(undefined);

export function LoggedUserProvider({ children }: { children: React.ReactNode }) {
    const { data: session }: any = useSession();
    const [fetchUser, setFetchUser] = useState(true)
    const [user, setUser] = useState({
        id: '',
        name: '',
        email: '',
        image: '',
    })

    useEffect(() => {
        const fetchData = async () => {
            if (fetchUser && session?.user?.id) {
                try {
                    const res = await apiRequest(`${session?.user?.userType === "ADMIN" ? '/api/admin/user/' : '/api/volunteer/user/'}${session?.user?.id }`, "GET");
                    setUser(res)
                    setFetchUser(false)
                } catch (error) {
                    console.error("Logged user fetching error:", error);
                }
            }
        };

        fetchData();
    }, [fetchUser, session]);

    if (!session) {
        return
    }

    return (
        <LoggedUserContext.Provider value={{user, setFetchUser}}>
            {children}
        </LoggedUserContext.Provider>
    )
}

export const LoggedUser = () => {
    const context = useContext(LoggedUserContext);
    if (!context) {
        throw new Error('loggedUser must be used within a LoggedUserProvider');
    }
    return context;
};
