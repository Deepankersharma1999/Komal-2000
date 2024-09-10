"use client";
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

// Define types for form data
type FormData = {
    email: string;
    password: string;
};

const LoginForm: React.FC = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            email: '',
            password: ''
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
                    <Button className='border border-black bg-white hover:bg-black hover:text-white text-black px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold'>
                        Login
                    </Button>
                </DialogTrigger>
                <DialogContent className='bg-white p-6'>
                    <DialogHeader>
                        <DialogTitle className='text-2xl font-semibold'>Login Form</DialogTitle>
                    </DialogHeader>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                                name="password"
                                control={control}
                                rules={{ required: 'Password is required' }}
                                render={({ field }) => <Input {...field} type="password" placeholder="Password" />}
                            />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>

                        <div className="flex justify-between items-center">
                            <Button type="submit" className='bg-black text-white hover:bg-gray-800'>
                                Login
                            </Button>

                            <Link href="/forgot-password" className="text-blue-500 hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default LoginForm;
