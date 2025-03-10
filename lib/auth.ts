import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";



export const authOptions: { 
    providers: any,
    callbacks: any,
    secret: any,
    session: any,
    pages: any
} = {

    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
                userType: { label: "User Type", type: "hidden" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }

                let user: any;
                if (credentials.userType === "ADMIN") {
                    user = await prisma.admin.findUnique({ where: { email: credentials.email } });
                } else if (credentials.userType === "VOL") {
                    user = await prisma.volunteer.findUnique({ where: { email: credentials.email } });
                } else {
                    throw new Error("Try with the correct web page");
                }

                if (!user || !user.password) {
                    throw new Error("User not found");
                }

                const isValidPassword = await bcrypt.compare(credentials.password, user.password);
                if (!isValidPassword) {
                    throw new Error("Invalid credentials");
                }

                delete user.password
                user.userType = credentials.userType;
                return user;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            allowDangerousEmailAccountLinking: true, // Allow multiple auth methods for same email

        }),
    ],
    callbacks: {
        async signIn({ user, account }: any) {
            if (account?.provider === "google") {
                if (!user.email) {
                    throw new Error("No user email in Google");
                }

                let existingUser = await prisma.volunteer.findUnique({
                    where: { email: user.email },
                });

                const randomPassword = crypto.randomBytes(15).toString("hex").slice(0, 10); // Generate a secure random password
                const hashedPassword = await bcrypt.hash(randomPassword, 10); // Hash the password before storing

                if (!existingUser) {
                    existingUser = await prisma.volunteer.create({
                        data: {
                            email: user.email,
                            name: user.name,
                            password: hashedPassword,
                            image: user.image
                        },
                    });
                }

                user.id = existingUser.id
                user.userType = "VOL"; // Assign userType to Google users
            }
            return true;
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.userId = user.id
                token.userType = user.userType
                token.exp = Math.floor(Date.now() / 1000) + 24 * 60 * 60; // Expiry set to 1 day
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user.id = token.userId;
            session.user.userType = token.userType;
            session.expires = new Date(token.exp * 1000).toISOString(); // Session expiry time
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 24 * 60 * 60, // 1 day
    },
    pages: {
        signIn: '/', // Redirects to your custom sign-in page
        error: "/",
        signOut: "/",
    },
};
