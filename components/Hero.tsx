"use client"

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"


const Hero = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    return ( 
        <div className="relative h-screen bg-cover bg-center">
            {/* Background Image */}
            <Image 
                src="/hero-one.jpg" //put the image at the public folder
                alt="NRA Image"
                fill
                className="object-cover object-center inset-0"
                priority
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Overlay Text */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 py-12">
                <div className="text-center">
                    <p 
                    data-aos="fade-left" data-aos-delay="50"
                    className='text-base font-poppins sm:text-lg md:text-xl lg:text-2xl font-bold text-amber-400 mb-2'>
                        MOBILIZING NIGERIANS
                    </p>
                    <h1 
                    data-aos="fade-right" data-aos-delay="150"
                    className='font-roboto text-center justify-center items-center text-white text-2xl sm:text-5xl md:text-4xl lg:text-5xl md:font-extrabold max-w-5xl'>
                    For The Reforms Continuity <span className="underline decoration-amber-500">
                        <br /> Agenda</span> 
                    </h1>
                    <p className="font-poppins font-light mt-2 text-amber-200 text-xl space-x-2 ">" Reforms for Renewal. Reforms for the Future "</p>
                    

                </div>
            </div>
        </div>
     );
}
 
export default Hero;