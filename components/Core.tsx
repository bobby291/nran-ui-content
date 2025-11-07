'use client'
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos"
import "aos/dist/aos.css"

const Core = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    return ( 
        <div className="max-w-7xl mx-auto p-6 mt-6" id="reform" data-aos="flip-left" data-aos-delay="50">
            <div className="flex flex-col md:flex-row items bg-green-950 shadow-md rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2">
                    <Image
                    src='/images/project-i.jpg'
                    alt="Our Goals"
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-lg" 
                    />
                </div>

                <div className="w-full md:w-1/2 p-6">
                    <h4 className="text-lg font-semibold font-roboto uppercase text-amber-400 mb-2">
                    Our Core Values
                    </h4>
                    {/* <h2 className="text-5xl font-bold text-amber-400 mb-4">
                    UniAbuja, CSD, Mass General form renewable energy collaboration
                    </h2> */}
                    <p className="text-white text-lg mb-4 font-poppins font-semibold">
                    Patriotism and Service Nigeria first, always.
                    Transparency and Truth in Messaging Facts over propaganda.
                    Inclusivity and Empowerment Every voice matters.
                    Reform-mindedness and Progress Change for the greater good.
                    Accountability and Results Promises backed by performance.
                    Unity and Renewal One nation, one reform vision
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Core;