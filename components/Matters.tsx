'use client'
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const Matters = () => {
    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    const services = [
        {
            title: "Web Design",
            description: "Translating complex reform policies into community-relevant language and narratives;",
            link: "#learn-more"
        },
        {
            title: "Ad-Creatives",
            description: "Countering misinformation through verified, data-driven messaging;",
            link: "#learn-more"
        },
        {
            title: "Automation",
            description: "Empowering reform beneficiaries to become messengers of progress;",
            link: "#learn-more"
        },
        {
            title: "Infographics",
            description: "Creating two-way citizen-government communication channels through a dedicated online platform (NRA Connect); and",
            link: "#learn-more"
        },
        {
            title: "Infographics",
            description: "Sustaining a reform-positive national discourse in the lead-up to 2027.",
            link: "#learn-more"
        }
    ]
    return ( 
        <section className='py-20 container mx-auto px-4 sm:px-6 lg:px-8' data-aos="zoom-out" data-aos-delay="50"> 
        <div 
            className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'
        >
            {/* Header */}
            <div
                className='md:w-1/3'
            >
                <h2 
                    className='text-3xl md:text-4xl text-green-950 font-roboto uppercase font-bold mb-6 md:w-4/5'
                >
                    Why the NRA Matters
                </h2>
                <p 
                    className='text-gray-600 font-poppins text-lg mb-4 md:w-4/5'
                >
                    While President Tinubu’s administration has made undeniable strides in steering Nigeria toward 
                    long-term recovery, public understanding of these reforms remains uneven often distorted by 
                    misinformation, political bias, and limited grassroots awareness
                </p>
                <p 
                    className='text-gray-600 text-lg mb-4 md:w-4/5'
                >
                    The NRA fills this crucial communication void by:
                </p>


            </div>

            {/* Service Grid */}
            <div 
                className='grid grid-cols-1 md:grid-cols-2 gap-8'
            >
                {services.map((service, index) => (
                    <div 
                        key={index}
                        className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 hover:shadow-xl transition-shadow duration-300'
                    >
                        {/* <h3 
                            className='text-xl font-semiblod mb-2'
                        >
                            {service.title}
                        </h3> */}
                        <p 
                            className='text-gray-600 mb-4'>
                            {service.description}
                        </p>
                    </div> 
                ))}
            </div>
        </div>
    </section>
     );
}
 
export default Matters;