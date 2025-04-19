import { authOptions } from "@/lib/auth";
import NextAuth from "next-auth";


const handler: any = NextAuth(authOptions);

// export default handler
export { handler as GET, handler as POST };
