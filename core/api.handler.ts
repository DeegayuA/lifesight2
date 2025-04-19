import {signOut} from "next-auth/react";

export const apiRequest = async (
    endpoint: string,
    method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
    body?: any,
    headers: HeadersInit = {}
) => {
    try {
        const response = await fetch(endpoint, {
            method,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
            body: body ? JSON.stringify(body) : undefined,
        });

        if (response.status === 401) {
            await signOut({ callbackUrl: '/' })
            return {authExpired: true}
        }
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Something went wrong");
        }

        return await response.json();
    } catch (error) {
        throw new Error(error instanceof Error ? error.message : "Unknown error");
    }
};
