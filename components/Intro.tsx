"use client"

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const Intro = () => {
    
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    return ( 
        <div className="max-w-7xl mx-auto p-6 mt-6" data-aos="fade-left" data-aos-delay="50">
            <div className="flex flex-col md:flex-row items bg-white shadow-md rounded-lg overflow-hidden">
                <div className="w-full md:w-1/2 p-6">
                    <h4 className="text-3xl font-roboto font-semibold text-green-800 mb-2">
                    Introductory Statement
                    </h4>
                    {/* <h2 className="text-5xl font-bold text-green-950 mb-4">
                    Nigeria is at a defining moment in her journey toward economic recovery...
                    </h2> */}
                    <p className="text-gray-600 mb-8 md:w-4/5">
                        Nigeria is at a defining moment in her journey toward economic recovery, national renewal, and sustainable development. The bold reform agenda of President Bola Ahmed Tinubu has redefined the nation’s trajectory dismantling decades-long structural inefficiencies, strengthening governance institutions, and laying the foundation for a resilient and inclusive economy.
                        From fuel subsidy removal and foreign exchange unification, to social investment expansion, digital innovation, and infrastructure renewal, the government has shown uncommon courage and vision. Yet, as these reforms take root, a critical task remains: helping Nigerians understand, participate in, and own the reform process.
                        It is in response to this need that the National Reform Ambassadors (NRA) has emerged a national citizens’ movement committed to bridging the communication gap between policy and people, and ensuring that the fruits of reform are clearly understood, effectively communicated, and widely supported.
                    </p>

                </div>
                <div className="w-full md:w-1/2">
                <Image
                 src='/images/project-h.jpg'
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
 
export default Intro;