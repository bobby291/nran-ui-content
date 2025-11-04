"use client"
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const Strategic = () => {

    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    return ( 
        <div className="max-w-7xl mx-auto p-6 mt-6" id="about" data-aos="flip-right" data-aos-delay="50">
            <div className="flex flex-col md:flex-row items bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-6">
                    <h3 className="text-3xl font-roboto font-semibold text-green-800 mb-2">
                    Our Strategic Promise
                    </h3>
                    <h5 className="text-5xl font-bold text-green-950 mb-4">
                    The National Reform Ambassadors will serve as:
                    </h5>
                    <p className="text-gray-600 mb-8 md:w-4/5">
                        1. A bridge between government and citizens – ensuring clarity, feedback, and accountability.
                        2. A national mobilization network – reaching millions through structured local and diaspora chapters.
                        3. A reform communication powerhouse – amplifying real stories of impact in jobs, social welfare, enterprise, infrastructure, and digital innovation
                        4. A digital engagement hub – hosting verified reform information and citizen dialogue through NRA Connect (www.nra.ng).
                        5. A catalyst for continuity in leadership – sustaining the reform momentum toward 2027 and bey
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                <Image
                 src='/images/About.jpg'
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
 
export default Strategic;