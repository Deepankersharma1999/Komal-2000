import Navbar from '@/components/Navbar'
import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image'
import Footer from '@/components/Footer'
import StudentFooter from '@/components/StudentFooter'


const page = () => {
    return (
        <div>
            <Navbar />

            <div className="div">
                <p className='text-center text-5xl text-gray-500 mt-10'>It’s never too late to chase the future.</p>
            </div>


            <div className="flex flex-row justify-center mt-20 ">
                <div className="div">
                    <Card className='shadow-none border-none'>
                        <CardHeader>
                            <CardTitle>
                                <Image className='w-[370px] h-[300px]' src='/img1.JPG' width={200} height={200} alt='xyz' />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <p className='text-lg font-semibold'>Student success</p>
                            <p className='text-gray-600 text-sm'>Early warning, Attendence, assessment , academics and scopes</p>

                            <a href='' className='border-xl border-b border-green-900 '>Learn More</a>
                        </CardContent>
                    </Card>
                </div>
                <div className="div">
                    <Card className='shadow-none border-none'>
                        <CardHeader>
                            <CardTitle>
                                <Image className='w-[370px] h-[300px]' src='/img2.JPG' width={200} height={200} alt='xyz' />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <p className='text-lg font-semibold'> Social/Emotional learning
                            </p>
                            <p className='text-gray-600 text-sm'> various counselling services and resources available</p>

                            <a href='' className='border-xl border-b border-green-900 '>Learn More</a>
                        </CardContent>
                    </Card>
                </div>
                <div className="div">
                    <Card className='shadow-none border-none'>
                        <CardHeader>
                            <CardTitle>
                                <Image className='w-[370px] h-[300px]' src='/img3.JPG' width={200} height={200} alt='xyz' />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <p className='text-lg font-semibold'> ⁠Feedback survey</p>
                            <p className='text-gray-600 text-sm'> Feedback forms</p>

                            <a href='' className='border-xl border-b border-green-900 '>Learn More</a>
                        </CardContent>
                    </Card>
                </div>

            </div>


            <div className="flex flex-row justify-center mt-20">
                <div className="div">
                    <Card className='shadow-none border-none'>
                        <CardHeader>
                            <CardTitle>
                                <Image className='w-[370px] h-[300px]' src='/img4.JPG' width={200} height={200} alt='xyz' />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <p className='text-lg font-semibold'> ⁠Financial support</p>
                            <p className='text-gray-600 text-sm'>Scholarships and other financial related information</p>

                            <a href='' className='border-xl border-b border-green-900 '>Learn More</a>
                        </CardContent>
                    </Card>
                </div>
                <div className="div">
                    <Card className='shadow-none border-none'>
                        <CardHeader>
                            <CardTitle>
                                <Image className='w-[370px] h-[300px]' src='/img5.JPG' width={200} height={200} alt='xyz' />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <p className='text-lg font-semibold'>⁠carrier guidance</p>
                            <p className='text-gray-600 text-sm'>Early warning, Attendence, assessment , academics and scopes</p>

                            <a href='' className='border-xl border-b border-green-900 '>Learn More</a>
                        </CardContent>
                    </Card>
                </div>
                <div className="div">
                    <Card className='shadow-none border-none'>
                        <CardHeader>
                            <CardTitle>
                                <Image className='w-[370px] h-[300px]' src='/img0.JPG' width={200} height={200} alt='xyz' />
                            </CardTitle>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <p className='text-lg font-semibold'>⁠Learning hub</p>
                            <p className='text-gray-600 text-sm'> E-library access and tutor classes</p>

                            <a href='' className='border-xl border-b border-green-900 '>Learn More</a>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="text-center">
                <p className='text-center text-5xl text-gray-500 mt-10'>A glimpse of how we work...</p>
            </div>


            <div className="h-96">

            </div>
            <StudentFooter />
        </div>
    )
}

export default page