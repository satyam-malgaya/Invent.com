import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col lg:flex-row bg-[#F5F5F5]">
        <div className="w-full lg:w-[30%] min-h-[40vh] lg:h-[60vh] bg-[#F5F5F5] px-6 sm:px-10 lg:px-20 py-8 lg:py-10">
          <div>
            <h1 className="text-[#32353A] text-[1.5rem] sm:text-[1.7rem] font-bold">
              MyWebsite
            </h1>
          </div>
          <div className="flex flex-col mt-6 lg:mt-8 gap-3">
            <p className="text-[#32353A] text-sm sm:text-base">
              A108 Adam Street <br />
              New York, NY 535022
            </p>
            <p className="text-[#32353A] text-sm sm:text-base">
              <b>Phone</b>: +1 5589 55488 55 <br></br>
              <b>Email</b>: info@example.com
            </p>
          </div>
          <div className="flex gap-3 mt-5">
            <i className="px-[0.76rem] rounded-full py-3 hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:border-[#5D57F4] transition-all duration-300 border-1 border-[#8B8D91]">
              <FaXTwitter />
            </i>
            <i className="px-[0.76rem] rounded-full py-3 hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:border-[#5D57F4] transition-all duration-300 border-1 border-[#8B8D91]">
              <IoLogoFacebook />
            </i>
            <i className="px-[0.76rem] rounded-full py-3 hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:border-[#5D57F4] transition-all duration-300 border-1 border-[#8B8D91]">
              <FaInstagram />
            </i>
            <i className="px-[0.76rem] rounded-full py-3 hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:border-[#5D57F4] transition-all duration-300 border-1 border-[#8B8D91]">
              <FaLinkedin />
            </i>
          </div>
        </div>
        <div className="w-full lg:w-[70%] flex flex-col sm:flex-row min-h-[40vh] lg:h-[60vh]">
          <div className="w-full sm:w-[25%] flex flex-col items-center py-6 lg:py-0 lg:h-[60vh]">
            <div className="mt-6 lg:mt-10">
              <h1 className="text-[#32353A] text-[1.1rem] sm:text-[1.2rem] font-bold">Useful Links</h1>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Home</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">About Us</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Services</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Terms of service</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Privacy policy</p>
            </div>
          </div>
          <div className="w-full sm:w-[25%] flex flex-col items-center py-6 lg:py-0 lg:h-[60vh]">
            <div className="mt-6 lg:mt-10">
              <h1 className="text-[#32353A] text-[1.1rem] sm:text-[1.2rem] font-bold">Our Services</h1>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Web Design</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Web Development</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Product Management</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Marketing</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Graphic Design</p>
            </div>
          </div>
          <div className="w-full sm:w-[25%] flex flex-col items-center py-6 lg:py-0 lg:h-[60vh]">
            <div className="mt-6 lg:mt-10">
              <h1 className="text-[#32353A] text-[1.1rem] sm:text-[1.2rem] font-bold">Hic solutasetp</h1>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Molestiae accusamus iure</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Excepturi dignissimos</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Suscipit distinctio</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Dilecta</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Sit quas consectetur</p>
            </div>
          </div>
          <div className="w-full sm:w-[25%] flex flex-col items-center py-6 lg:py-0 lg:h-[60vh]">
            <div className="mt-6 lg:mt-10">
              <h1 className="text-[#32353A] text-[1.1rem] sm:text-[1.2rem] font-bold">Nobis illum</h1>
            </div>
            <div className="mt-3 flex flex-col gap-3">
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Ipsam</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Laudantium dolorum</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Dinera</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Trodelas</p>
              <p className="text-[#606367] text-sm sm:text-base hover:text-[#5D57F4] hover:transition-all hover:cursor-pointer hover:duration-300">Flexo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
