"use client";

import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import {Button} from "@heroui/button";
import {apiRequest} from "@/core/api.handler";
import {useSession} from "next-auth/react";

// Validation schema using Zod
const UserValidation = z.object({
    image: z.string(), // URL or Base64 string
    name: z.string().min(3).max(30),
});

export default function VolunteerProfile() {
    const {data: session}: any = useSession();
    const [previewImage, setPreviewImage] = useState(null);
    const {register, handleSubmit, setValue, watch, formState: {errors}} = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            image: "",
            name: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const res = await apiRequest(`/api/volunteer/user/${session.user.id}`, "POST", {
                name: data.name,
                // image: data.image
            })
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewImage(reader?.result);
                setValue("image", reader.result); // Save Base64 string
            };
            reader.readAsDataURL(file);
        }
    };

    const profileDataFetch = async () => {
        try {
            const res = await apiRequest(`/api/volunteer/user/${session.user.id}`, "GET")
            setValue("name", res.name);
            setPreviewImage(res.image);
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    useEffect(() => {
        profileDataFetch()
    }, []);

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 md:w-1/2  m-3">
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

            {/* Name Field */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium">
                    Name
                </label>
                <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="mt-1 h-8 p-2 block w-full rounded-md outline shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md">
                Save Profile
            </Button>
        </form>
    );
}
