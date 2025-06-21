import React, { useState } from "react";
import { IoSettings } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { PiHeadsetFill } from "react-icons/pi"

const Home = () => {
   
  return (
    <div>
      <div className="w-full min-h-screen bg-[#F7F6FE] shadow pt-[6.525rem]">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            {/* Left Container */}
            <div className="w-full md:w-[50%] text-[#32353A] flex flex-col gap-6 md:gap-10">
              <h1 className="text-3xl md:text-[2.567rem] font-bold tracking-normal leading-tight md:leading-12">
                Accelerating business growth through innovative technology
              </h1>
              <p className="text-lg md:text-[1.5rem] leading-7 md:leading-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
                varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
                enim justo.
              </p>
              <button className="bg-[#3E5A9E] py-3 md:py-[1rem] rounded-sm w-full md:w-[30%] px-6 md:px-[2rem] text-white hover:bg-[#2d4375] transition-colors">
                Discover More
              </button>
            </div>
            {/* Right Container */}
            <div className="w-full md:w-[50%] flex items-center justify-center">
              <img
                className="w-full h-auto transition-transform duration-300 hover:-translate-y-4"
                src="https://bootstrapmade.com/content/demo/Invent/assets/img/illustration/illustration-16.webp"
                alt="Business illustration"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="w-full px-4 md:px-5 py-10 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {/* Feature 1 */}
              <div className="transition-transform duration-300 hover:-translate-y-4 w-full p-6 md:p-10 rounded-xl border border-[#DFDDFD] shadow">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-[#EEEEFD] border">
                    <IoSettings className="text-2xl md:text-[2rem] text-[#3E5A9E]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-[1.8rem] font-semibold mb-2">Rapid Deployment</h2>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="transition-transform duration-300 hover:-translate-y-4 w-full p-6 md:p-10 rounded-xl border border-[#DFDDFD] shadow">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-[#EEEEFD] border">
                    <MdSecurity className="text-2xl md:text-[2rem] text-[#3E5A9E]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-[1.8rem] font-semibold mb-2">Secure Solutions</h2>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="transition-transform duration-300 hover:-translate-y-4 w-full p-6 md:p-10 rounded-xl border border-[#DFDDFD] shadow">
                <div className="flex flex-col md:flex-row gap-5">
                  <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-[#EEEEFD] border">
                    <PiHeadsetFill className="text-2xl md:text-[2rem] text-[#3E5A9E]" />
                  </div>
                  <div>
                    <h2 className="text-xl md:text-[1.8rem] font-semibold mb-2">24/7 Support</h2>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                      tellus, luctus nec ullamcorper mattis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

         {/* main-container .........{About}................ */}
       
      </div>
    </div>
  );
};

export default Home;
