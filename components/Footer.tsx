"use client"

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"
import Link from "next/link";

const Footer = () => {

    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);
    return ( 
        <footer className='w-full bg-gradient-to-b from-[#0d5503] to-[#03aa03] text-black mt-2' id="contact">
            <div className='max-w-7xl mx-auto px-6 py-16 flex flex-col items-center'>
                <div className='flex items-center space-x-3 mb-6'>
                <Image
                     src="/logo.png" 
                     alt="Uniabuja Logo"
                     width={220}
                     height={30}
                     className="object-contain"
                     data-aos="zoom-in" data-aos-delay="50"
                    />
                </div>
                <div className="text-white">
            <Link href="/" className='text-center mb-3 font-semibold'>Home</Link> | <Link href='tel: 08033307750' className='text-center mb-3 font-semibold'>Phone</Link>  | <Link href="mailto: nrambassadors@gmail.com" className='text-center mb-3 font-semibold'>Email</Link>
            </div>
            <div className="text-gray-800">
                <p className='text-center mt-5 font-semibold'>Suite A103, Carter Plaza, Next to Oti Carpet, Ademola Adetokunbo Street, Wuse 2, Abuja Nigeria</p>
            </div>
            </div>
            <div className='border-t border-slate-200'>
                <div className='max-w-7xl mx-auto px-6 text-center text-shadow-gray-400 text-sm font-semibold font-poppins'>
                NRA Nigeria © 2025 All right reservered.
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;