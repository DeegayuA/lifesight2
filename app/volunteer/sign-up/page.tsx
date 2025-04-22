"use client";

import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod";
import {Button} from "@heroui/button";
import {apiRequest} from "@/core/api.handler";
import {Input} from "@/components/ui/input";
import {Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {useRouter} from "next/navigation";
import Link from "next/link";
import {ArrowLeft} from "lucide-react";

// Validation schema using Zod
const UserValidation = z.object({
    name: z.string().min(3).max(30),
    email: z.string(),
    password: z.string(),
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

export default function VolunteerForm() {
    const router = useRouter()
    const [submitted, setSubmitted] = useState(false);
    const {register, handleSubmit, reset, setValue, getValues, watch, formState: {errors}} = useForm({
        resolver: zodResolver(UserValidation),
        defaultValues: {
            name: "",
            email: "",
            password: "",
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
            await apiRequest("/api/volunteer/signup", "POST", data)
            setSubmitted(true)
            setTimeout(() => {
                router.push("/volunteer/login")
            }, 3000)
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    return (
        <div className="max-w-xl mx-auto bg-gray-400 p-6 rounded-lg shadow-md space-y-6 my-10">
            <Button variant="ghost" className="p-1 border-none font-semibold text-zinc-800">
                <div onClick={() => router.back()} className="flex items-center gap-2">
                    <ArrowLeft className="h-5 w-5"/>
                    <span>Back to Home</span>
                </div>
            </Button>
            <h2 className="text-3xl font-bold text-center dark:text-black">Volunteer Sign Up Form</h2>
            {submitted ? (
                <p className="text-green-600 text-center dark:text-black">Thank you for submitting the form!</p>
            ) : (<form onSubmit={handleSubmit(onSubmit)} className="space-y-6 p-6 dark:text-white">
                <div className="gap-2">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <Input
                            id="name"
                            type="text"
                            {...register("name", {required: true})}
                            className="w-full"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <Input type="email" className="w-full" {...register('email', {required: true})} />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <Input type="password" className="w-full" {...register('password', {required: true})} />
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
                <div className="gap-2">
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
                <div className="gap-2">
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
                <div className="gap-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                        <Input className="w-full" {...register('emergency_contact')} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Emergency Contact Phone
                            Number</label>
                        <Input type="tel" className="w-full" {...register('emergency_phone')} />
                    </div>
                </div>

                <h3 className="font-bold text-lg">Consent and Agreement</h3>
                <div className="gap-2">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Do you agree to the volunteer terms
                            and
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

                {/* Submit Button */}
                <Button type="submit"
                        className="bg-indigo-600 text-white py-4 px-20 rounded-md w-full">
                    Save Profile
                </Button>

            </form>)
            }
        </div>

    );
}
