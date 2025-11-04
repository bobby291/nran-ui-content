"use client"

import React, { useState, useEffect } from 'react'
import { TextAlignEnd, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import AOS from "aos";
import "aos/dist/aos.css"

const Navbar = () => {

    useEffect(() => {
        AOS.init({
          duration: 800,
          delay: 200,
          once: false,
        }) 
      }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('/')

    const navLinks = [
        {
            href: "/",
            label: "HOME"
        },
        {
            href: "#about",
            label: "ABOUT"
        },
        {
            href: "#reform",
            label: "REFORMS"
        },
        {
            href: "#partnerships",
            label: "PARTNERSHIPS"
        },
        {
            href: "#contact",
            label: "CONTACT"
        },
    ]

  return (
    <nav
        data-aos="zoom-in" data-aos-delay="200"
        className='fixed top-0 left-0 right-0 bg-green-950 backdrop-blur-sm z-50 shadow-sm'
        >
        <div className='w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* Logo with Link */}
            <Link href="/" 
                    className="flex items-center space-x-2">
                    <Image
                     src="/logo.png" 
                     alt="Uniabuja Logo"
                     width={180}
                     height={30}
                     className="object-contain"
                    />
                </Link>

            {/* mobile menu */}
            <button
            data-aos="zoom-in" data-aos-delay="50"
            onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                {
                    isMenuOpen ? <X className='size-6 text-amber-600'/> : <TextAlignEnd className='size-6 text-amber-600'/>
                }
            </button>

            {/* desktop navitems */} 
            <div
                data-aos="zoom-in" data-aos-delay="50"
                className='hidden md:flex items-center gap-10'>
                {
                    navLinks.map((link, index) => (
                        <a key={index} href={link.href} 
                        onClick={() => setActiveLink(link.href )}
                        className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-amber-500 after:transition-all ${activeLink === link.href ? "text-green-600 after:w-full" : "text-white hover:text-amber-500 "}`}>
                            {link.label}
                        </a>
                    ))
                }
            </div>

            {/* get in touch button */}
            {/* <button onClick={() => navigate('/company')} data-aos="zoom-in" data-aos-delay="50" className='hidden md:block font-poppins bg-purple-600 items-center h-15 text-white px-6 py-2.5 rounded-lg hover:text-white hover:bg-black text-sm font-medium transition-all hover:shadow-lg'>
                <a href="#newsletter">Learn More</a>
            </button> */}
        </div>

        {/* Mobile Menu Items  */}
        {
            isMenuOpen && (
                <div
                    data-aos="slide-down" data-aos-delay="50"
                    className='md:hidden bg-white border-t border-amber-400 py-4'>
                    <div 
                        className='container mx-auto px-4 space-y-4'>
                        {navLinks.map((link, index) =>(
                            <a onClick={() => {
                                setActiveLink(link.href);
                                setIsMenuOpen(false);
                            }}
                            key={index} href={link.href} 
                            data-aos="zoom-in" data-aos-delay="50"
                            className={`block text-sm font-roboto font-medium py-2 ${activeLink === link.href ? "text-amber-700" : "text-green-800 hover:text-black"}`}>{link.label}</a>
                        ))}

                        {/* <button
                        data-aos="zoom-in" data-aos-delay="50"
                        className='w-full bg-purple-600 items-center h-15 text-white px-6 py-2.5 rounded-lg hover:bg-purple-900 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500'>
                        <a href="#newsletter">Learn More</a>
                        </button> */}
                    </div>
                </div>
            )
        }
    
    </nav>

  )
}

export default Navbar;
