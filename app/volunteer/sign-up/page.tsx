import {SignUpForm} from "@/components/sign-up-form";

const SignUp = () => {

    return <>
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:pb-10 md:px-10 pt-[120px]">
            <div className="w-full max-w-sm">
                <SignUpForm/>
            </div>
        </div>
    </>
}

export default SignUp
