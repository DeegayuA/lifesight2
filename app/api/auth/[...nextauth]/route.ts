import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import crypto from "crypto";

export const authOptions: any = {

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
                
                user.password = '';
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

                const existingUser = await prisma.volunteer.findUnique({
                    where: { email: user.email },
                });

                const randomPassword = crypto.randomBytes(15).toString("hex").slice(0, 10); // Generate a secure random password
                const hashedPassword = await bcrypt.hash(randomPassword, 10); // Hash the password before storing

                if (!existingUser) {
                    await prisma.volunteer.create({
                        data: {
                            email: user.email,
                            name: user.name,
                            password: hashedPassword
                        },
                    });
                }

                user.userType = "VOL"; // Assign userType to Google users
            }
            return true;
        },
        async jwt({ token, user }: any) {
            if (user) {
                token.userType = user.userType
                token.exp = Math.floor(Date.now() / 1000) + 3 * 24 * 60 * 60; // Expiry set to 3 days
            }
            return token;
        },
        async session({ session, token }: any) {
            session.user.userType = token.userType;
            session.expires = new Date(token.exp * 1000).toISOString(); // Session expiry time
            return session;
        },
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 3 * 24 * 60 * 60, // 3 days
    },
    pages: {
        error: "/",
    },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
