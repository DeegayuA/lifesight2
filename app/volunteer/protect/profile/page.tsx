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
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";

// Validation schema using Zod
const UserValidation = z.object({
    image: z.string(), // URL or Base64 string
    name: z.string().min(3).max(30),
    email: z.string(),
    phone: z.string(),
    location: z.string(),
    language: z.string(),
    experience: z.string(),
    experience_details: z.string(),
    skills: z.string(),
    tasks: z.string(),
    preferences: z.string(),
    diverse_backgrounds: z.string(),
    emergency_contact: z.string(),
    emergency_phone: z.string(),
    consent: z.string(),
    updates: z.string(),
    signature: z.string(),
});

export default function VolunteerProfile() {
    const {data: session}: any = useSession();
    const [previewImage, setPreviewImage] = useState(null);
    const [submitted, setSubmitted] = useState(false);
    const {register, handleSubmit, reset, setValue, getValues, watch, formState: {errors}} = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            image: "",
            name: "",
            email: "",
            phone: "",
            location: "",
            language: "",
            experience: "",
            experience_details: "",
            skills: "",
            tasks: "",
            preferences: "",
            diverse_backgrounds: "",
            emergency_contact: "",
            emergency_phone: "",
            consent: "",
            updates: "",
            signature: "",
        },
    });
    // State to control the Select component
    const selectedLanguage = watch("language");
    const selectedExperience = watch("experience");
    const selectedDiverseBackgrounds = watch("diverse_backgrounds");
    const selectedConsent = watch("consent");
    const selectedUpdates = watch("updates");

    const onSubmit = async (data: any) => {
        try {
            setSubmitted(false)
            delete data.email
            const res = await apiRequest(`/api/volunteer/user/${session.user.id}`, "POST", data)
            setSubmitted(true)
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
            console.log('Upload success. S3 URL:', result[0].url); // From your backend response
        } catch (error) {
            console.error(error instanceof Error ? error.message : 'Upload failed');
        }
    };

    const profileDataFetch = async () => {
        try {
            const res = await apiRequest(`/api/volunteer/user/${session.user.id}`, "GET")
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

                <div>
                    <label className="block text-sm font-medium text-gray-700">Location (City, Country)</label>
                    <Input className="w-full" {...register('location')} />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred Language</label>
                    <Select value={selectedLanguage} onValueChange={(value) => setValue("language", value)}>
                        <SelectTrigger className="w-full">
                            {selectedLanguage || "Select a language"}
                        </SelectTrigger>
                        <SelectContent>
                            {["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Hindi", "Arabic", "Portuguese"].map(lang => (
                                <SelectItem key={lang} value={lang}>{lang}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <h3 className="font-bold text-lg">Skills & Experience</h3>
            <div className="grid md:grid-cols-2 gap-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Do you have experience with visually
                        impaired
                        individuals?</label>
                    <Select value={selectedExperience} onValueChange={(value) => setValue("experience", value)}>
                        <SelectTrigger className="w-full">
                            {selectedExperience || "Select an option"}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key="yes" value="Yes">Yes</SelectItem>
                            <SelectItem key="no" value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">If yes, please describe</label>
                    <Textarea className="w-full" {...register('experience_details')} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Specific skills or knowledge</label>
                    <Textarea className="w-full" {...register('skills')} />
                </div>
            </div>

            <h3 className="font-bold text-lg">Preferences</h3>
            <div className="grid md:grid-cols-2 gap-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred tasks</label>
                    <Textarea className="w-full" {...register('tasks')} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Preferred type of people to
                        assist</label>
                    <Textarea className="w-full" {...register('preferences')} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Willing to assist people from diverse
                        backgrounds?</label>
                    <Select value={selectedDiverseBackgrounds}
                            onValueChange={(value) => setValue("diverse_backgrounds", value)}>
                        <SelectTrigger className="w-full">
                            {selectedDiverseBackgrounds || "Select an option"}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key="yes" value="Yes">Yes</SelectItem>
                            <SelectItem key="no" value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <h3 className="font-bold text-lg">Emergency Contact Information</h3>
            <div className="grid md:grid-cols-2 gap-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                    <Input className="w-full" {...register('emergency_contact')} />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Emergency Contact Phone Number</label>
                    <Input type="tel" className="w-full" {...register('emergency_phone')} />
                </div>
            </div>

            <h3 className="font-bold text-lg">Consent and Agreement</h3>
            <div className="grid md:grid-cols-2 gap-2">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Do you agree to the volunteer terms and
                        conditions?</label>
                    <Select value={selectedConsent} onValueChange={(value) => setValue("consent", value)}>
                        <SelectTrigger className="w-full">
                            {selectedConsent || "Select an option"}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key="yes" value="Yes">Yes</SelectItem>
                            <SelectItem key="no" value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Would you like to receive updates on
                        volunteering opportunities?</label>
                    <Select value={selectedUpdates} onValueChange={(value) => setValue("updates", value)}>
                        <SelectTrigger className="w-full">
                            {selectedUpdates || "Select an option"}
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem key="yes" value="Yes">Yes</SelectItem>
                            <SelectItem key="no" value="No">No</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Signature (Type your name)</label>
                    <Input className="w-full" {...register('signature')} />
                </div>
            </div>

            {submitted ? (
                <p className="text-green-600 text-center dark:text-black">Thank you for submitting the form!</p>
            ) : "" }

            {/* Submit Button */}
            <div className="flex justify-end">
                <Button
                    className="bg-indigo-600 text-white py-4 px-20 rounded-md">
                    Save Profile
                </Button>
            </div>

        </form>


    );
}
