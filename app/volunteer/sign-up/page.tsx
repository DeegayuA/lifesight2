'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';

export default function VolunteerForm() {
    const { register, handleSubmit } = useForm();
    const [submitted, setSubmitted] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
    };

    return (
        <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-center">Volunteer Requirement Gathering Form</h2>
            {submitted ? (
                <p className="text-green-600 text-center">Thank you for submitting the form!</p>
            ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Full Name</label>
                        <Input className="w-full" {...register('full_name', { required: true })} />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email Address</label>
                        <Input type="email" className="w-full" {...register('email', { required: true })} />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <Input type="tel" className="w-full" {...register('phone', { required: true })} />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Location (City, Country)</label>
                        <Input className="w-full" {...register('location', { required: true })} />
                    </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Preferred Language</label>
                        <Select className="w-full" {...register('language', { required: true })}>
                            {["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Hindi", "Arabic", "Portuguese"].map(lang => (
                                <option key={lang} value={lang}>{lang}</option>
                            ))}
                        </Select>
                    </div>
                    
                    <h3 className="font-bold text-lg">Availability</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {['Morning', 'Afternoon', 'Evening', 'Flexible'].map(time => (
                            <label key={time} className="flex items-center space-x-2">
                                <Checkbox {...register('availability')} value={time} />
                                <span>{time}</span>
                            </label>
                        ))}
                    </div>
                    
                    <h3 className="font-bold text-lg">Skills & Experience</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Do you have experience with visually impaired individuals?</label>
                        <Select className="w-full" {...register('experience', { required: true })}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
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
                    
                    <h3 className="font-bold text-lg">Preferences</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Preferred tasks</label>
                        <Textarea className="w-full" {...register('tasks')} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Preferred type of people to assist</label>
                        <Textarea className="w-full" {...register('preferences')} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Willing to assist people from diverse backgrounds?</label>
                        <Select className="w-full" {...register('diverse_backgrounds', { required: true })}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>
                    </div>
                    
                    <h3 className="font-bold text-lg">Emergency Contact Information</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Emergency Contact Name</label>
                        <Input className="w-full" {...register('emergency_contact', { required: true })} />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Emergency Contact Phone Number</label>
                        <Input type="tel" className="w-full" {...register('emergency_phone', { required: true })} />
                    </div>
                    
                    <h3 className="font-bold text-lg">Consent and Agreement</h3>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Do you agree to the volunteer terms and conditions?</label>
                        <Select className="w-full" {...register('consent', { required: true })}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Would you like to receive updates on volunteering opportunities?</label>
                        <Select className="w-full" {...register('updates', { required: true })}>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </Select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Signature (Type your name)</label>
                        <Input className="w-full" {...register('signature', { required: true })} />
                    </div>
                    
                    <Button type="submit" className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Submit</Button>
                </form>
            )}
        </div>
    );
}
