"use client"
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import 'aos/dist/aos.css'

const Partner = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);

    return ( 
        <section className='max-w-7xl mx-auto px-4 py-16 md:py-24' id="partnerships"
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
                 src='/images/project-c.jpg'
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
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Call to Partnership
                </h2>
                <h6 
                data-aos="zoom-in" data-aos-delay="50"
                className='text-gray-600 mb-8 md:w-4/5'
                >
                    The NRA invites collaboration with:
                </h6>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >

                    Government agencies and ministries for policy information and reform synergy.
                    Development partners and international organizations for capacity-building, data support, and transparency-driven communication.
                    Civil society and the media for accurate, fact-based reform reporting.
                    Private sector and youth groups to scale community level economic participation and empowerments
                  
                </p>
            </div>
          
        </div>
    </section>

     );
}
 
export default Partner;