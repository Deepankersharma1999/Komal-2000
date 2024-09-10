import Image from 'next/image';
import React from 'react';

const Hero = () => {
    return (
        <div className="flex flex-col gap-10 px-4 md:px-8 lg:px-20"> {/* Add padding for better spacing */}

            <div className="relative w-full mt-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image className="w-full object-cover rounded-3xl" src="/img0.jpg" layout="fill" alt="img0" />
            </div>

            <div className="flex justify-center mt-10">
                <p className="max-w-6xl text-center text-black font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-relaxed w-full bg-[#bfd4e888] rounded-3xl py-10 md:py-20">
                    Success is not defined by the degree you hold but by the determination and passion you bring to your journey.
                </p>
            </div>

            <div className="relative max-w-full mx-auto mt-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <Image className="w-full absolute object-cover rounded-3xl " src="/img5.JPG" layout="fill" alt="img1" />
                <div className=" inset-0 flex items-center justify-center h-full">
                    <p className="h-full py-20 text-xl sm:text-3xl md:text-4xl lg:text-5xl  lg:leading-[60px]  font-mono px-10 md:px-20 lg:px-40 text-black bg-slate-500  opacity-75  rounded-3xl text-center flex items-center">
                        Dropping out is not the end of the road; it's a detour. Let's help students find their way back.
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <p className="max-w-6xl text-center text-blue-600 font-serif text-3xl sm:text-4xl md:text-5xl leading-tight w-full bg-[#bfd4e888] rounded-3xl py-10 md:py-20">
                    The Umeed Advantage
                </p>
            </div>

            <div className="relative flex justify-center  mt-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
                <video className="max-w-6xl h-full object-cover rounded-3xl" autoPlay muted loop>
                    <source src="https://static1.squarespace.com/static/5716af60356fb068327b23af/t/60c2215020cd3a52137ffdec/1623335268945/Kapture+2020-01-14+at+14.26.21+trimmed.mp4?format=1000w" type="video/mp4" />
                </video>
            </div>
        </div>
    );
};

export default Hero;
