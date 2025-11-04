"use client"

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos"

const About = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    return ( 
        <div className="max-w-7xl mx-auto p-6 mt-6" id="about" data-aos="fade-right" data-aos-delay="50">
            <div className="flex flex-col md:flex-row items bg-green-950 shadow-md rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2">
                    <Image
                    src='/images/section3.jpg'
                    alt="Our Goals"
                    width={400}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-lg" 
                    />
                </div>

                <div className="w-full md:w-1/2 p-6">
                    <h4 className="text-lg font-semibold font-roboto uppercase text-amber-400 mb-2">
                    Who We Are
                    </h4>
                    {/* <h2 className="text-5xl font-bold text-amber-400 mb-4">
                    UniAbuja, CSD, Mass General form renewable energy collaboration
                    </h2> */}
                    <p className="text-white text-lg mb-4 font-poppins font-semibold">
                    The National Reform Ambassadors (NRA) is a nationwide reform support and public mobilization 
                    network led by former Focal Persons of the National Social Investment Program (NSIP) individuals who 
                    have directly supervised and engaged millions of Nigerians across the 36 states and the FCT through key 
                    social empowerment initiatives in the past eight years. Leveraging this established network of community 
                    trust and reach, the NRA seeks to mobilize Nigerians at home and abroad to support, amplify, and 
                    participate in the reform agenda of President Bola Ahmed Tinubu’s administration, while strengthening 
                    the bridge between citizens and government
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default About;