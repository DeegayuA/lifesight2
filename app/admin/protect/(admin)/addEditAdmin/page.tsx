"use client"

import {cn} from "@/lib/utils";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {useRouter} from "next/navigation";

// Define your schema using Zod
const adminSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email(),
    password: z.string(),
});

const AddEditAdmin = () => {
    const router = useRouter()
    const {register, handleSubmit, formState: { errors }}
        = useForm({resolver: zodResolver(adminSchema)});

    const createUpdateAdmin = async (data: any) => {
        try {
            // const response = await FetchApi('/api/admin/create', 'POST', {
            //     // Your data here, e.g., id, name, etc.
            //     name: data.name,
            //     email: data.email,
            //     password: data.password,
            // })
            // if (response === 'JWT_EXPIRED') {
            //   console.log('Token expired! Please Login again!')
            //     return router.push('/')
            // }

            console.log('Admin created')
        } catch (e) {
            console.log("Admin creation error")
        }
    }

    return <>
        <div className="flex min-h-svh w-full items-center justify-center p-6 md:pb-10 md:px-10 pt-[120px]">
            <div className="w-full max-w-sm">
                <div className={cn("flex flex-col gap-6")}>
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl">Sign Up</CardTitle>
                            <CardDescription>
                                Enter your details below to sign up to your account
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit(createUpdateAdmin)}>
                                <div className="flex flex-col gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Enter name"
                                            required
                                            {...register('name')}
                                        />
                                        {/*{errors.name && <p className="text-red-500">{errors.name?.message}</p>}*/}
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="m@example.com"
                                            required
                                            {...register('email')}
                                        />
                                        {/*{errors.email && <p className="text-red-500">{errors.email?.message}</p>}*/}
                                    </div>
                                    <div className="grid gap-2">
                                        <div className="flex items-center">
                                            <Label htmlFor="password">Password</Label>
                                        </div>
                                        <Input id="password" type="password" required {...register('password')}/>
                                        {/*{errors.password && <p className="text-red-500">{errors.password?.message}</p>}*/}
                                    </div>
                                    <Button type="submit" className="w-full">
                                        Sign Up
                                    </Button>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </>
}

export default AddEditAdmin
