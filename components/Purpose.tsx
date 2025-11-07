'use client'
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const Purpose = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    return ( 
        <div className="max-w-7xl mx-auto p-6 mt-6" data-aos="fade-up" data-aos-delay="50">
        <div className="flex flex-col md:flex-row items bg-white shadow-md rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 p-6">
                <h4 className="text-lg font-semibold font-roboto uppercase text-green-800 mb-2">
                    Our Purpose
                </h4>
                {/* <h2 className="text-5xl font-bold text-gray-900 mb-4">
                    Fossil Fuel-Free by 2050, Fossil Fuel-Neutral by 2026
                </h2> */}
                <p className="text-gray-800 font-poppins text-lg mb-4 font-semibold">
                The NRA exists to make reform communication people-centered, policy messaging evidence-based, 
                and citizen engagement interactive and continuous. By building a structured and coordinated 
                platform across all 774 local government areas and diaspora communities, the NRA will 
                transform reform policies into relatable stories of impact, foster transparency through a 
                real-time digital feedback system, and empower millions of Nigerians to become Reform 
                Ambassadors in their communities.
                </p>
                {/* <Link href='/our-goals'
                className="inline-block font-semibold bg-gray-900 text-white px-4 py-4 rounded hover:bg-blue-950">
                    UniAbujs Climate Goals
                </Link> */}
            </div>
            <div className="w-full md:w-1/2">
            <Image
             src='/images/project-m.jpg'
             alt="Our Goals"
             width={400}
             height={400}
             className="w-full h-[400px] object-cover rounded-lg" 
            />
            </div>
        </div>
    </div>
     );
}
 
export default Purpose;