"use client"
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css'

const Vision = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);

    return ( 
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24'
    >
        <div className='flex flex-col md:flex-row items-center gap-12'>
            {/* Left Side Content */}
            <div 
                className='w-full md:w-1/2 relative'
            >
                <div 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='p-4'
                >
                    <Image
                 src='/images/project-n.jpg'
                 alt="Our Goals"
                 width={400}
                 height={400}
                 className="w-full h-[400px] object-cover rounded-lg" 
                />
                </div>
            </div>

            {/* Right Side Content */}  

            <div 
                className='w-full md:w-1/2'
            >
                <span
                  data-aos="zoom-in" data-aos-delay="50"
                    className='text-green-800 font-semibold'
                >
                    NRA Nigeria CORE VIEW
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    NRA Vision
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    To build an informed, engaged, and empowered citizenry that supports and sustains Nigeria’s ongoing reform agenda for national renewal and prosperity.
                  
                </p>
                {/* <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Learn more about monitoring 
                    
                </a> */}
            </div>
          
        </div>
    </section>

     );
}
 
export default Vision;