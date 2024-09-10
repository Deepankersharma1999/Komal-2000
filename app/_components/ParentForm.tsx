"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';

// Define types for form data
type FormData = {
    name: string;
    email: string;
    contactNumber: string;
    childName: string;
    updateFrequency: {
        daily: boolean;
        weekly: boolean;
        monthly: boolean;
    };
    password: string;
    confirmPassword: string;
};

const ParentForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            name: '',
            email: '',
            contactNumber: '',
            childName: '',
            updateFrequency: {
                daily: false,
                weekly: false,
                monthly: false
            },
            password: '',
            confirmPassword: ''
        }
    });

    const onSubmit = (data: FormData) => {
        console.log(data);
        // Handle form submission
    };

    return (
        <div className="p-4">
            <Dialog>
                <DialogTrigger asChild>
                    <Button className='rounded-full'>
                        Open Form
                    </Button>
                </DialogTrigger>
                <DialogContent className='bg-white p-6'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl font-semibold'>Parent Registration Form</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div>
                            <Controller
                                name="name"
                                control={control}
                                rules={{ required: 'Your Name is required' }}
                                render={({ field }) => <Input {...field} placeholder="Your Name" />}
                            />
                            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="email"
                                control={control}
                                rules={{ required: 'Your Email-ID is required' }}
                                render={({ field }) => <Input {...field} type="email" placeholder="Your Email-ID" />}
                            />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="contactNumber"
                                control={control}
                                rules={{ required: 'Contact Number is required' }}
                                render={({ field }) => <Input {...field} type="tel" placeholder="Contact Number" />}
                            />
                            {errors.contactNumber && <p className="text-red-500">{errors.contactNumber.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="childName"
                                control={control}
                                rules={{ required: 'Child Name is required' }}
                                render={({ field }) => <Input {...field} placeholder="Child Name" />}
                            />
                            {errors.childName && <p className="text-red-500">{errors.childName.message}</p>}
                        </div>

                        <div>
                            <label className="block mb-2 font-medium">How often do you want to receive updates?</label>
                            <Controller
                                name="updateFrequency"
                                control={control}
                                rules={{ required: 'How often do you want to receive updates is required' }}
                                render={({ field }) => (
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <Checkbox
                                                checked={field.value.daily}
                                                onCheckedChange={(checked) => field.onChange({ ...field.value, daily: checked })}
                                            />
                                            <label htmlFor="daily" className="ml-2">Daily</label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox
                                                checked={field.value.weekly}
                                                onCheckedChange={(checked) => field.onChange({ ...field.value, weekly: checked })}
                                            />
                                            <label htmlFor="weekly" className="ml-2">Weekly</label>
                                        </div>
                                        <div className="flex items-center">
                                            <Checkbox
                                                checked={field.value.monthly}
                                                onCheckedChange={(checked) => field.onChange({ ...field.value, monthly: checked })}
                                            />
                                            <label htmlFor="monthly" className="ml-2">Monthly</label>
                                        </div>
                                    </div>
                                )}
                            />
                            {errors.updateFrequency && <p className="text-red-500">{errors.updateFrequency.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="password"
                                control={control}
                                rules={{ required: 'Password is required' }}
                                render={({ field }) => <Input {...field} type="password" placeholder="Password" />}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="confirmPassword"
                                control={control}
                                rules={{ required: 'Confirm Password is required' }}
                                render={({ field }) => <Input {...field} type="password" placeholder="Confirm Password" />}
                            />
                            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword.message}</p>}
                        </div>

                        <Button type="submit" className='bg-black text-white hover:bg-gray-800'>
                            Submit
                        </Button>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ParentForm;
