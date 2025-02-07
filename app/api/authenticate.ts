import {NextResponse} from "next/server";


export async function AuthCheck() {
    try {
        // const tokenCookie = await cookies()
        // const getToken = tokenCookie.get('token')

        // if (getToken) {
        //     const token = jwt.verify(getToken.value, 'appSecret')
        //
        //     const userId = token.id
        //     if (!userId) {
        //         return NextResponse.json({error: 'Unauthorized request!'}, {status: 200})
        //     }
        //     const user = await findAuthUserService(userId)
        //     if (!user) {
        //         return NextResponse.json({error: 'An error occurred!'}, {status: 200})
        //     }
            return {userAuth: true}
        // } else {
        //     return NextResponse.json({userAuth: false}, {status: 200},)
        // }
    } catch (e) {
        return NextResponse.json(
            {error: 'An error occurred. Please try again later'},
            {status: 200},
        )
    }
}
