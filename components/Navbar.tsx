"use client";
import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from './ui/button';
import { FiMenu } from 'react-icons/fi';
import { RxCross1 } from 'react-icons/rx';
import Image from 'next/image';
import StudentForm from '@/app/_components/StudentForm';
import TeacherForm from '@/app/_components/TeacherForm';
import ParentForm from '@/app/_components/ParentForm';
import LoginForm from '@/app/_components/LoginForm';

const Navbar = () => {
    const [selectedOptionOne, setSelectedOptionOne] = useState<string>('');
    const [selectedOptionTwo, setSelectedOptionTwo] = useState<string>('');
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleChangeOne = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionOne(event.target.value);
    };

    const handleChangeTwo = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedOptionTwo(event.target.value);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-slate-200 p-4 md:p-5">
            <div className="flex items-center justify-between">
                <a href="/">
                    <Image src='/sahil.png' width={100} height={100} alt='' />
                </a>
                <button className="md:hidden block text-black" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <RxCross1 className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
                </button>

                <div className="hidden md:flex items-center gap-6">
                    {/* Desktop Menu */}
                    <select
                        id="select-one"
                        name="select-one"
                        value={selectedOptionOne}
                        onChange={handleChangeOne}
                        className="text-black font-semibold bg-transparent rounded p-2"
                    >
                        <option value="" disabled>About Us</option>
                        <option value="option1">What is Umeed</option>
                        <option value="option2">Our team</option>
                    </select>
                    <select
                        id="select-two"
                        name="select-two"
                        value={selectedOptionTwo}
                        onChange={handleChangeTwo}
                        className="text-black font-semibold bg-transparent rounded p-2"
                    >
                        <option value="option1">Our Solutions</option>
                        <option value="option2">Explore by Roles</option>
                        <option value="option3">Data Dashboard</option>
                    </select>

                    <a href='#' className='text-black font-semibold'>Why Umeed</a>
                    <a href='/Student' className='text-black font-semibold'>Student</a>
                    <a href='#' className='text-black font-semibold' onClick={() => scrollToSection('contact')}>Contact us</a>

                    <LoginForm />
                    <Dialog>
                        <DialogTrigger>
                            <Button className='border border-black bg-white text-black px-4 py-2 md:px-8 md:py-3 rounded-full font-semibold hover:bg-black hover:text-white'>Signup</Button>
                        </DialogTrigger>
                        <DialogContent className='bg-white w-full'>
                            <DialogHeader>
                                <DialogTitle className='text-center text-2xl font-semibold'>Set back in, your future is waiting</DialogTitle>
                                <DialogDescription className='text-center'>
                                    <div className="flex justify-around gap-10 mt-10">
                                        {/* Cards */}
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className='mx-auto'>
                                                    <Image className='border rounded-full' src='/student.jpg' width={80} height={80} alt='Student' />
                                                </CardTitle>
                                                <CardDescription className='text-black font-semibold text-center'>Student</CardDescription>
                                            </CardHeader>
                                            <CardFooter>
                                                <StudentForm />
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className='mx-auto'>
                                                    <Image className='border rounded-full' src='/teacher.jpg' width={80} height={80} alt='Teacher' />
                                                </CardTitle>
                                                <CardDescription className='text-black font-semibold text-center'>Teacher</CardDescription>
                                            </CardHeader>
                                            <CardFooter>
                                                <TeacherForm />
                                            </CardFooter>
                                        </Card>
                                        <Card>
                                            <CardHeader>
                                                <CardTitle className='mx-auto'>
                                                    <Image className='border rounded-full' src='/parent.jpg' width={80} height={80} alt='Parent' />
                                                </CardTitle>
                                                <CardDescription className='text-black font-semibold text-center'>Parent</CardDescription>
                                            </CardHeader>
                                            <CardFooter>
                                                <ParentForm />
                                            </CardFooter>
                                        </Card>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="fixed top-0 left-0 w-full h-full bg-slate-200 flex flex-col items-center pt-16">
                        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
                            <RxCross1 className="h-6 w-6" />
                        </button>
                        <select
                            id="select-one"
                            name="select-one"
                            value={selectedOptionOne}
                            onChange={handleChangeOne}
                            className="text-black font-semibold bg-transparent rounded p-2 mt-4"
                        >
                            <option value="" disabled>About Us</option>
                            <option value="option1">What is Umeed</option>
                            <option value="option2">Our team</option>
                        </select>
                        <select
                            id="select-two"
                            name="select-two"
                            value={selectedOptionTwo}
                            onChange={handleChangeTwo}
                            className="text-black font-semibold bg-transparent rounded p-2 mt-4"
                        >
                            <option value="option1">Our Solutions</option>
                            <option value="option2">Explore by Roles</option>
                            <option value="option3">Data Dashboard</option>
                        </select>
                        <a href='#' className='text-black font-semibold mt-3' onClick={() => scrollToSection('contact')}>Contact us</a>
                        <LoginForm />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
