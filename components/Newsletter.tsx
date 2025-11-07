"use client"

import { ArrowBigRight } from "lucide-react";

const Newsletter = () => {
    return ( 
        <section id="newsletter" className="section-container px-4 md:px-0">
        <div 
          data-aos="zoom-in" data-aos-delay="50"
          className="bg-green-900 rounded-2xl overflow-hidden"
        >
          <div className="relative md:px-16 px-6 py-16 md:py-24">
            {/* Background Gradient */}
            <div 
              className="absolute top-0 right-0 w-1/2 h-full bg-green-700 clip-path-slant hidden md:block"
            ></div>
            
            <div className="relative flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12">
              {/* Left Content */}
              <div 
                className="text-white max-w-lg text-center md:text-left"
              >
                <h2 
                  data-aos="zoom-in" data-aos-delay="50"
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4"
                >
                  Subscribe newsletter
                </h2>
                <p 
                  data-aos="zoom-in" data-aos-delay="50"
                  className="text-blue-100 text-sm font-medium sm:text-base"
                >
                  Stay up to date for our latest information on National Reforms of Ambassadors
                </p>
              </div>
  
              {/* Email Form */}
              <div 
                data-aos="zoom-in" data-aos-delay="50"
                className="w-full md:w-auto"
              >
                <div 
                  data-aos="zoom-in" data-aos-delay="50"
                  className="flex flex-col sm:flex-row gap-4 sm:gap-0"
                >
                  <input
                    type="email"
                    placeholder="e.g: nrambassadors@gmail.com"
                    data-aos="zoom-in" data-aos-delay="50"
                    className="w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
                  />
                  <button 
                    onClick={() => {
                      window.location.href = "mailto: nrambassadors@gmail.com";
                    }}
                    data-aos="zoom-in" data-aos-delay="50"
                    className="w-full sm:w-auto cursor-pointer bg-amber-400 font-semibold text-green-800 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-xl hover:bg-green-400 transition-colors flex items-center justify-center sm:justify-start gap-2"
                  >
                    <span>Discover</span>
                    <ArrowBigRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <style>
          {`
            .clip-path-slant {
              clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
            }
          `}
        </style>
      </section>
     );
}
 
export default Newsletter;