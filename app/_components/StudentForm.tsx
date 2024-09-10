"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { CheckboxIcon } from '@radix-ui/react-icons';

// Define types for form data
type FormData = {
    name: string;
    email: string;
    contactNumber: string;
    schoolName: string;
    updateFrequency: boolean;
    needHelp: boolean;
    password: string;
    confirmPassword: string;
};

const StudentForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            updateFrequency: false,
            needHelp: false
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
                        <DialogTitle className='text-2xl font-semibold'>Student Registration Form</DialogTitle>
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
                                name="schoolName"
                                control={control}
                                rules={{ required: 'School Name is required' }}
                                render={({ field }) => <Input {...field} placeholder="School Name" />}
                            />
                            {errors.schoolName && <p className="text-red-500">{errors.schoolName.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="updateFrequency"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex items-center">
                                        <CheckboxIcon {...field} id="updateFrequency" />
                                        <label htmlFor="updateFrequency" className="ml-2">Receive updates</label>
                                    </div>
                                )}
                            />
                            {errors.updateFrequency && <p className="text-red-500">{errors.updateFrequency.message}</p>}
                        </div>

                        <div>
                            <Controller
                                name="needHelp"
                                control={control}
                                render={({ field }) => (
                                    <div className="flex items-center">
                                        <CheckboxIcon {...field} id="needHelp" />
                                        <label htmlFor="needHelp" className="ml-2">Do you need help in navigating the platform?</label>
                                    </div>
                                )}
                            />
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

export default StudentForm;
