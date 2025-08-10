// www.glassdoor.co.in
import React from "react";
import { useState } from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { PiNotePencilFill } from "react-icons/pi";
import { IoSettings } from "react-icons/io5";
import { BsSearch } from "react-icons/bs";
import { PiRocketLaunchFill } from "react-icons/pi";
import Footer from '../components/Footer'


const About = () => {
  const [ishover, setishover] = useState([false, false, false, false]);
  const arrowHandler = (index) => {
    const newstate = [...ishover];
    newstate[index] = true;
    setishover(newstate);
    // console.log("hover")
  };
  const arrowLeaveHandler = (index) => {
    const newstate = [...ishover];
    newstate[index] = false;
    setishover(newstate);
    // console.log('left')
  };
  return (
    <div>
    <div className="w-full h-[120vh]">
      <div
        id="About"
        className="w-full  h-[120vh] flex flex-col md:flex-row min-h-screen bg-[#fff]"
      >
        {/* Left Content */}
        <div className="w-full md:w-[50%]  px-4 md:pl-20 flex flex-col pt-20 md:pt-20 gap-5">
          <p className="text-[1rem] text-[#7A7C7F]">WHO WE ARE</p>
          <h1 className="text-3xl md:text-[2.754rem] leading-tight md:leading-12 font-bold text-[#32353A]">
            Unleashing Potential with Creative Strategy
          </h1>
          <p className="italic text-lg md:text-[1.2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="text-base md:text-[1.1rem]">
            <ul className="list-disc flex flex-col gap-3 md:gap-5 pl-5">
              <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li>
                Duis aute irure dolor in reprehenderit in voluptate velit.
              </li>
              <li>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure
              </li>
            </ul>
            <p className="mt-3">
              dolor in reprehenderit in voluptate trideta storacalaperda mastiro
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
          <button
            onMouseEnter={arrowHandler}
            onMouseLeave={arrowLeaveHandler}
            className="rounded w-full md:w-40 h-12 md:h-13 gap-3 flex justify-center items-center bg-[#3E5A9E] text-white font-bold hover:bg-[#2d4375] transition-all duration-300"
          >
            Read More
            <MdOutlineArrowRightAlt
              className={`transition-transform duration-300 ${
                ishover? "translate-x-3" : ""
              }`}
              fontSize={30}
            />
          </button>
        </div>

        {/* Right Content - Image Grid */}
        <div className="w-full md:w-[50%] flex flex-col md:flex-row gap-4 md:gap-0 p-4 md:p-0">
          {/* Left Image */}
          <div className="w-full md:w-[50%] flex justify-center items-center">
            <div className="w-full md:w-[95%]">
              <img
                className="w-full h-[300px] md:h-[65vh] object-cover rounded-xl"
                src="https://bootstrapmade.com/content/demo/Invent/assets/img/about/about-portrait-1.webp"
                alt="Portrait"
              />
            </div>
          </div>
          {/* Right Images */}
          <div className="w-full md:w-[50%] flex flex-col justify-center items-center gap-4 md:gap-5">
            <div className="w-full md:w-[85%]">
              <img
                className="w-full h-[200px] md:h-auto object-cover rounded-xl"
                src="https://bootstrapmade.com/content/demo/Invent/assets/img/about/about-8.webp"
                alt="About image 1"
              />
            </div>
            <div className="w-full md:w-[85%]">
              <img
                className="w-full h-[200px] md:h-auto object-cover rounded-xl"
                src="https://bootstrapmade.com/content/demo/Invent/assets/img/about/about-12.webp"
                alt="About image 2"
              />
            </div>
          </div>
        </div>
      </div>
      {/* container-main-2.................. */}
      <div className="w-full h-[100vh]">
        <div className="w-full h-[40vh]  flex flex-col gap-5 justify-center items-center">
          <h1 className="text-[2.5rem] font-bold">How We Work</h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-[5%] border-t-1 border-black"></div>
            <span className="w-[5%] border-t-4 border-[#5D57F4]"></span>
            <span className="w-[5%] border-t-1 border-black"></span>
          </div>
          <p className="text-[1.2rem] ">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit .
          </p>
        </div>
        {/* ..........contain-2............. */}
        <div className="w-full flex flex-col items-center gap-8 md:gap-20 justify-center pt-10 min-h-screen pb-10 px-4 md:px-0">
          {/* Process Step 1 */}
          <div
            onMouseEnter={()=>arrowHandler(0)}
            onMouseLeave={()=>arrowLeaveHandler(0)}
            className="transition-all relative duration-300 hover:translate-x-[10px] hover:shadow-xl w-full md:w-8/12 min-h-[27vh] px-4 md:px-8 flex flex-col md:flex-row items-center bg-[#FCFDFF] rounded-3xl border-3 border-[#E6E5FE]"
          >
            <span
              className={`text-4xl md:text-[4.5rem] text-[#766fce] absolute opacity-25 -left-4 md:-left-10 top-4 md:top-8 font-extrabold pointer-events-none transition-all duration-300
              ${ishover[0] ? 'text-[#6762F4] opacity-100 translate-y-6 md:translate-y-12':'' } `}
            >
              01
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-6 md:py-0">
              <div
                className={`py-4 md:py-5 px-4 md:px-5 rounded-2xl duration-300 transition-all bg-[#6762F4] ${
                  ishover[0] ? "rotate-13 opacity-90 duration-300 transition-all" : ""
                }`}
              >
                <i>
                  <PiNotePencilFill color="white" size={32} className="md:w-10 md:h-10" />
                </i>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
                <h3 className="text-xl md:text-[1.9rem] font-semibold">
                  Project Planning
                </h3>
                <p className="text-sm md:text-[1rem] text-[#585B5F]">
                  Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor
                  eu, consequat vitae, eleifend ac, enim. Lorem, ipsum.
                </p>
              </div>
            </div>
          </div>

          {/* Process Step 2 */}
          <div
            onMouseEnter={()=>arrowHandler(1)}
            onMouseLeave={()=>arrowLeaveHandler(1)}
            className="transition-all relative duration-300 hover:translate-x-[10px] hover:shadow-xl w-full md:w-8/12 min-h-[27vh] px-4 md:px-8 flex flex-col md:flex-row items-center bg-[#FCFDFF] rounded-3xl border-3 border-[#E6E5FE]"
          >
            <span
              className={`text-4xl md:text-[4.5rem] text-[#766fce] absolute opacity-25 -left-4 md:-left-10 top-4 md:top-8 font-extrabold pointer-events-none transition-all duration-300
              ${ishover[1] ? 'text-[#6762F4] opacity-100 translate-y-6 md:translate-y-12':'' } `}
            >
              02
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-6 md:py-0">
              <div
                className={`py-4 md:py-5 px-4 md:px-5 rounded-2xl duration-300 transition-all bg-[#6762F4] ${
                  ishover[1] ? "rotate-13 opacity-90 duration-300 transition-all" : ""
                }`}
              >
                <i>
                  <IoSettings color="white" size={32} className="md:w-10 md:h-10" />
                </i>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
                <h3 className="text-xl md:text-[1.9rem] font-semibold">
                  Development Phase
                </h3>
                <p className="text-sm md:text-[1rem] text-[#585B5F]">
                  Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus Lorem, ipsum.
                </p>
              </div>
            </div>
          </div>

          {/* Process Step 3 */}
          <div
            onMouseEnter={()=>arrowHandler(2)}
            onMouseLeave={()=>arrowLeaveHandler(2)}
            className="transition-all relative duration-300 hover:translate-x-[10px] hover:shadow-xl w-full md:w-8/12 min-h-[27vh] px-4 md:px-8 flex flex-col md:flex-row items-center bg-[#FCFDFF] rounded-3xl border-3 border-[#E6E5FE]"
          >
            <span
              className={`text-4xl md:text-[4.5rem] text-[#766fce] absolute opacity-25 -left-4 md:-left-10 top-4 md:top-8 font-extrabold pointer-events-none transition-all duration-300
              ${ishover[2] ? 'text-[#6762F4] opacity-100 translate-y-6 md:translate-y-12':'' } `}
            >
              03
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-6 md:py-0">
              <div
                className={`py-4 md:py-5 px-4 md:px-5 rounded-2xl duration-300 transition-all bg-[#6762F4] ${
                  ishover[2] ? "rotate-13 opacity-90 duration-300 transition-all" : ""
                }`}
              >
                <i>
                  <BsSearch color="white" size={32} className="md:w-10 md:h-10" />
                </i>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
                <h3 className="text-xl md:text-[1.9rem] font-semibold">
                  Testing & QA
                </h3>
                <p className="text-sm md:text-[1rem] text-[#585B5F]">
                  Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero rutrum nunc.
                </p>
              </div>
            </div>
          </div>

          {/* Process Step 4 */}
          <div
            onMouseEnter={()=>arrowHandler(3)}
            onMouseLeave={()=>arrowLeaveHandler(3)}
            className="transition-all relative duration-300 hover:translate-x-[10px] hover:shadow-xl w-full md:w-8/12 min-h-[27vh] px-4 md:px-8 flex flex-col md:flex-row items-center bg-[#FCFDFF] rounded-3xl border-3 border-[#E6E5FE]"
          >
            <span
              className={`text-4xl md:text-[4.5rem] text-[#766fce] absolute opacity-25 -left-4 md:-left-10 top-4 md:top-8 font-extrabold pointer-events-none transition-all duration-300
              ${ishover[3] ? 'text-[#6762F4] opacity-100 translate-y-6 md:translate-y-12':'' } `}
            >
              04
            </span>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 py-6 md:py-0">
              <div
                className={`py-4 md:py-5 px-4 md:px-5 rounded-2xl duration-300 transition-all bg-[#6762F4] ${
                  ishover[3] ? "rotate-13 opacity-90 duration-300 transition-all" : ""
                }`}
              >
                <i>
                  <PiRocketLaunchFill color="white" size={32} className="md:w-10 md:h-10" />
                </i>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 text-center md:text-left">
                <h3 className="text-xl md:text-[1.9rem] font-semibold">
                  Launch & Support
                </h3>
                <p className="text-sm md:text-[1rem] text-[#585B5F]">
                  Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt.
                </p>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
        {/* contain-4................ */}
      </div>
    </div>
    </div>
  );
};

export default About;
