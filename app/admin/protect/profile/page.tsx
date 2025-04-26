"use client";

import React, {useEffect, useMemo, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import {Button} from "@heroui/button";
import {apiRequest} from "@/core/api.handler";
import {useSession} from "next-auth/react";
import {Input} from "@/components/ui/input";
import {addToast} from "@heroui/toast";

// Validation schema using Zod
const UserValidation = z.object({
    image: z.string(), // URL or Base64 string
    name: z.string().min(3).max(30),
    email: z.string(),
    phone: z.string(),
});

export default function AdminProfile() {
    const {data: session}: any = useSession();
    const [previewImage, setPreviewImage] = useState(null);
    const {register, handleSubmit, reset, setValue, getValues, watch, formState: {errors}} = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            image: "",
            name: "",
            email: "",
            phone: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            delete data.email
            const res = await apiRequest(`/api/admin/user/${session.user.id}`, "POST", data)
            addToast({title: "Profile Update", description: "Updated successfully!",});
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    const handleImageChange = async (e: any) => {
        const file = e.target.files[0];
        try {
            const formData = new FormData();
            formData.append('file', file);

            const response = await fetch('https://api-vehicle-trader.azurewebsites.net/files/upload', {
                method: 'POST',
                body: formData,
                // Headers are automatically set by browser for FormData
            });

            if (!response.ok) throw new Error('Upload failed');

            const result = await response.json();
            setValue("image", result[0].url);
            setPreviewImage(result[0].url)
        } catch (error) {
            console.error(error instanceof Error ? error.message : 'Upload failed');
        }
    };

    const profileDataFetch = async () => {
        try {
            const res = await apiRequest(`/api/admin/user/${session.user.id}`, "GET")
            reset(res)
            setPreviewImage(res.image);
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    useEffect(() => {
        profileDataFetch()
    }, []);

    return (

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 m-3">
            <div className="flex flex-col items-center mt-6">
                {/* Profile Photo */}
                <label htmlFor="profilePhoto" className="cursor-pointer">
                    {previewImage ? (
                        <div className="flex flex-col items-center">
                            <Image
                                src={previewImage}
                                alt="Profile Preview"
                                width={150}
                                height={150}
                                className="rounded-full"
                            />
                            <span className="text-gray-500">Upload</span>
                        </div>
                    ) : (
                        <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center">
                            <span>Upload</span>
                        </div>
                    )}
                </label>
                <input
                    id="profilePhoto"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    {...register("image")}
                    onChange={handleImageChange}
                />
                {errors.image && <p className="text-red-500">{errors.image.message}</p>}
            </div>

            <div className="grid md:grid-cols-2 gap-2">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                        Name
                    </label>
                    <Input
                        id="name"
                        type="text"
                        {...register("name")}
                        className="w-full"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <Input type="email" className="w-full" disabled {...register('email')} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <Input className="w-full" {...register('phone')} />
                </div>

            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
                <Button type="submit"
                    className="bg-indigo-600 text-white py-4 px-20 rounded-md">
                    Save Profile
                </Button>
            </div>

        </form>


    );
}
