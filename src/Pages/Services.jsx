 import React from "react";
import { useState } from "react";
import { FaEarthEurope } from "react-icons/fa6";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { GiUbisoftSun } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";
import { FaMobileButton } from "react-icons/fa6";
import { GiBookshelf } from "react-icons/gi";
import { IoBarChartSharp } from "react-icons/io5";
import { IoIosCloudDone } from "react-icons/io";
import { BsFillShieldLockFill } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { GoCodeSquare } from "react-icons/go";
import { GoGraph } from "react-icons/go";
import { IoSettings } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";


const Services = () => {
  const [ishover, setishover] = useState(Array(13).fill(false));
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

  const onMouseEnter=()=>{
    setishover(true)
  }
  const onMouseLeave=()=>{
    setishover(false)
  }
  return (
    // main container-1............
    <div className="w-full min-h-screen  pt-[6.525rem]">
      <div className="w-full h-[30vh]  flex flex-col gap-5 justify-center items-center">
        <h1 className="text-[2.5rem] font-bold">How We Work</h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-[5%] border-t-1  pr-30border-black"></div>
          <span className="w-[5%] border-t-4 border-[#5D57F4]"></span>
          <span className="w-[5%] border-t-1 border-black"></span>
        </div>
        {/* <p className="text-[1.2rem] ">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit .
          </p> */}
      </div>
      {/* main container-2.............. */}
      <div className="w-ful min-h-screen flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 p-4 md:p-0">
        {/* Service Card 1 */}
        <div
          onMouseEnter={() => arrowHandler(0)}
          onMouseLeave={() => arrowLeaveHandler(0)}
          className={`w-full md:w-[25%] min-h-[70vh] rounded-lg bg-[#F7F6FE] flex gap-5 flex-col items-start p-6 md:px-10 transition-all duration-300 md:py-10 ${
            ishover[0] ? "shadow-2xl " : ""
          } transition-all duration-300`}
        >
          <div className="flex w-full md:w-[90%] h-auto md:h-[20%] justify-center items-center gap-4">
            <FaEarthEurope
              size={40}
              className="md:w-[50px] md:h-[50px]"
              color="#3E5A9E"
            />
            <h2 className="text-xl md:text-[2rem] leading-tight md:leading-9 text-center md:text-left">
              Advisory Services
            </h2>
          </div>
          <p className="text-base md:text-[1.1rem] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            ipsa totam ipsum in distinctio deleniti cum nemo labore ab sequi
            voluptates, accusantium maiores, reprehenderit fugit temporibus quod
            quos vel laborum.
          </p>
          <button className="mt-auto rounded w-full md:w-40 h-12 gap-3 flex justify-center items-center bg-[#3E5A9E] text-white font-bold hover:bg-[#2d4375] transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Service Card 2 */}
        <div
          onMouseEnter={() => arrowHandler(1)}
          onMouseLeave={() => arrowLeaveHandler(1)}
          className={`w-full md:w-[25%] min-h-[70vh] rounded-lg bg-[#F7F6FE] flex gap-5 flex-col items-start p-6 md:px-10 transition-all duration-300 md:py-10 ${
            ishover[1] ? "shadow-2xl " : ""
          } transition-all duration-300`}
        >
          <div className="flex w-full md:w-[90%] h-auto md:h-[20%] justify-center items-center gap-4">
            <GiGiftOfKnowledge
              size={40}
              className="md:w-[50px] md:h-[50px]"
              color="#3E5A9E"
            />
            <h2 className="text-xl md:text-[2rem] leading-tight md:leading-9 text-center md:text-left">
              Knowledge Services
            </h2>
          </div>
          <p className="text-base md:text-[1.1rem] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            ipsa totam ipsum in distinctio deleniti cum nemo labore ab sequi
            voluptates, accusantium maiores, reprehenderit fugit temporibus quod
            quos vel laborum.
          </p>
          <button className="mt-auto rounded w-full md:w-40 h-12 gap-3 flex justify-center items-center bg-[#3E5A9E] text-white font-bold hover:bg-[#2d4375] transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Service Card 3 */}
        <div
          onMouseEnter={() => arrowHandler(2)}
          onMouseLeave={() => arrowLeaveHandler(2)}
          className={`w-full md:w-[25%] min-h-[70vh] rounded-lg bg-[#F7F6FE] flex gap-5 flex-col items-start p-6 md:px-10 transition-all duration-300 md:py-10 ${
            ishover[2] ? "shadow-2xl " : ""
          } transition-all duration-300`}
        >
          <div className="flex w-full md:w-[90%] h-auto md:h-[20%] justify-center items-center gap-4">
            <GiUbisoftSun
              size={40}
              className="md:w-[50px] md:h-[50px]"
              color="#3E5A9E"
            />
            <h2 className="text-xl md:text-[2rem] leading-tight md:leading-9 text-center md:text-left">
              Innovation Services
            </h2>
          </div>
          <p className="text-base md:text-[1.1rem] text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
            ipsa totam ipsum in distinctio deleniti cum nemo labore ab sequi
            voluptates, accusantium maiores, reprehenderit fugit temporibus quod
            quos vel laborum.
          </p>
          <button className="mt-auto rounded w-full md:w-40 h-12 gap-3 flex justify-center items-center bg-[#3E5A9E] text-white font-bold hover:bg-[#2d4375] transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>
      {/*main container-2................ */}
      <div className="w-full min-h-screen flex flex-wrap justify-center items-center gap-6 md:gap-10 p-4 md:p-8">
        {[
          {
            icons: <FaCode size={40} className="transition-colors duration-300" />,
            title: "Custom Web Development",
            contain:
              "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla quis lorem ut libero malesuada feugiat. Curabitur non nulla sit amet nisl tempus convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            btn: "Learn More",
          },
          {
            icons: <FaMobileButton size={40} className="transition-all duration-300" />,
            title: "Mobile App Solutions",
            contain:
              "Praesent sapien massa, convallis a pellentesque, lacinia eget consectetur sed. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Donec rutrum congue leo eget malesuada.",
            btn: "Learn More",
          },
          {
            icons: <GiBookshelf size={40} className="transition-all duration-300" />,
            title: "UI/UX Design",
            contain:
              "Pellentesque in ipsum id orci porta dapibus. Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.",
            btn: "Learn More",
          },
          {
            icons: <IoBarChartSharp size={40} className="transition-all duration-300" />,
            title: "Digital Marketing",
            contain:
              "Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Nulla porttitor accumsan tincidunt. Curabitur aliquet quam id dui posuere blandit.",
            btn: "Learn More",
          },
          {
            icons: <IoIosCloudDone size={40} className="transition-all duration-300" />,
            title: "Cloud Computing",
            contain:
              "Curabitur aliquet quam id dui posuere blandit. Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla quis lorem ut libero malesuada feugiat.",
            btn: "Learn More",
          },
          {
            icons: <BsFillShieldLockFill size={40} className="transition-all duration-300" />,
            title: "Cybersecurity Solutions",
            contain:
              "Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Donec sollicitudin molestie malesuada. Curabitur arcu erat, accumsan id imperdiet et. Proin eget tortor risus.",
            btn: "Learn More",
          },
        ].map((value, index) => {
            const newIndex = index + 3;
          return (
            <div
            id="main-boxs"
              key={newIndex}
              onMouseEnter={() => arrowHandler(newIndex)}
              onMouseLeave={() => arrowLeaveHandler(newIndex)}
              className={`w-full md:w-[45%] lg:w-[44%] flex flex-col md:flex-row px-4 md:px-9 gap-6 md:gap-10 rounded-xl min-h-[50vh] hover:shadow-lg transition-all duration-300 ${
                ishover[newIndex] ? "shadow-xl" : ""
              }`}
            >


              
              <div className="pt-6 md:pt-8">
                <div
                  style={{
                    transform: ishover[newIndex]
                      ? "rotateY(180deg)"
                      : "rotateY(0deg)",
                    transformStyle: "preserve-3d",
                    backfaceVisibility: 'revert-layer', 
                    transition: "transform 0.5s ease-in-out",
                  }}
                  className={`font-semibold w-16 h-16 md:w-20 md:h-20 justify-center items-center flex rounded-xl pointer-events-none bg-[#EEEEFD] ${
                    ishover[newIndex] ? "bg-[#5D57F4] text-red-600" : "text-[#5D57F4]"
                  }`}
                  onMouseEnter={() => onMouseEnter(newIndex)}
                  onMouseLeave={() =>onMouseLeave(newIndex)}
                >
                  {value.icons}
                </div>
              </div>
              <div className="pt-4 md:pt-8 flex flex-col gap-3 md:gap-4 items-start">
                <h3 className="text-xl md:text-[1.7rem] text-[#32353A] font-bold">
                  {value.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  {value.contain}
                </p>
                <button className="text-[#5D57F4] text-base md:text-[1.1rem] flex items-center font-semibold hover:text-[#4a45c3] transition-colors duration-300">
                  {value.btn}
                  <GoArrowRight
                    className={`transition-transform duration-300 text-xl md:text-[1.4rem] pt-1 ${
                      ishover[newIndex] ? "translate-x-3" : ""
                    }`}
                    fontSize={30}
                  />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center gap-8 md:gap-5 min-h-[120vh] p-4 md:p-0">
        {/* Left Content */}
        <div className="w-full md:w-[48%] flex flex-col gap-4 md:gap-6 pt-6 md:pt-10 justify-start items-start px-4 md:px-15">
          <h4 className="uppercase text-[#8681F7] text-sm md:text-base">our Innovative services</h4>
          <h3 className="text-2xl md:text-[2rem] font-bold text-[#32353A] leading-tight md:leading-10">
            Our customers excel in technology management
          </h3>
          <p className="text-sm md:text-base text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt diam et gravida consequat. 
            Sed nec mauris quis lacus commodo lobortis. Suspendisse euismod commodo sem, in finibus purus bibendum et. 
            Morbi eu neque sed velit convallis vestibulum a vel odio.
          </p>
          <button className="px-4 md:px-6 py-2 md:py-3 bg-[#5D57F4] text-white rounded hover:bg-[#4a45c3] transition-colors duration-300">
            Explore All Services
          </button>
        </div>

        {/* Right Content */}
        <div className="w-full flex flex-col gap-3 md:w-[48%] pt-6 md:pt-10 px-4 md:pr-15">
          {[
            {
              icon: <GoCodeSquare size={40} className="transition-all duration-300"/>,
              heading: 'Software Engineering',
              contain: 'Lorem ipsum dolor sit amet consectetur adipiscing.'
            },
            {
              icon: <GoGraph size={40} className="transition-all duration-300"/>,
              heading: 'Business Analytics',
              contain: 'Lorem ipsum dolor sit amet consectetur adipiscing.'
            },
            {
              icon: <FaMobileButton size={40} className="transition-all duration-300"/>,
              heading: 'Mobile Solutions',
              contain: 'Lorem ipsum dolor sit amet consectetur adipiscing.'
            },
            {
              icon: <IoSettings size={40} className="transition-all duration-300"/>,
              heading: 'Tech Infrastructure',
              contain: 'Lorem ipsum dolor sit amet consectetur adipiscing.'
            }
          ].map((value, index) => {
            const thirindex= index + 9;
            return (
              <div 
                key={index}
                onMouseEnter={() => arrowHandler(thirindex)}
                onMouseLeave={() => arrowLeaveHandler(thirindex)}
                className="flex items-center md:py-8 gap-4 md:gap-5 border-b border-[#DEDFDF] w-full"
              >
                <div className={`py-4 md:py-5 px-4 md:px-5 border border-[#5D57F4] rounded-full pointer-events-none transition-all duration-300 ${ ishover[thirindex] ?'bg-[#5D57F4] text-white':'text-[#5D57F4]'}`}>
                  {value.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-xl md:text-[1.8rem] font-medium text-[#32353A]">
                    {value.heading}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    {value.contain}
                  </p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      {/* container--4............. */}
      <div className="bg-[#F4F4F9] flex flex-col md:flex-row w-full pt-10 justify-center min-h-[120vh]">
        {/* Image Section */}
        <div className="w-full md:w-[45%] h-[50vh] md:h-full overflow-hidden">
          <img 
            className="w-full h-full transform scale-x-[-1] object-cover" 
            src="https://bootstrapmade.com/content/demo/Invent/assets/img/cta/cta-4.webp" 
            alt="Vision illustration" 
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[45%] flex flex-col justify-center gap-5 items-start p-6 md:p-5">
          <div className="flex flex-col gap-4 md:gap-8">
            <h2 className="text-2xl md:text-[3rem] text-[#32353A] font-bold leading-tight md:leading-13">
              Transform Your Vision Into Reality Today
            </h2>
            <p className="text-base md:text-[1.1rem] text-[#4B4F53] font-extralight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          {/* Features List */}
          <div className="w-full">
            {[
              {
                icon: <FaCheckCircle size={20} className="md:w-6 md:h-6" />,
                contain: 'Lorem ipsum dolor sit amet consectetur'
              },
              {
                icon: <FaCheckCircle size={20} className="md:w-6 md:h-6" />,
                contain: 'Praesent eget risus vitae massa'
              },
              {
                icon: <FaCheckCircle size={20} className="md:w-6 md:h-6" />,
                contain: 'Aenean pretium nisi vel pulvinar'
              }
            ].map((value, index) => (
              <div key={index} className="flex items-center pt-4 md:pt-5 gap-3">
                <i className="text-[#5D57F4]">{value.icon}</i>
                <p className="text-sm md:text-base text-[#32353A]">{value.contain}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-10 pt-5 w-full md:w-auto">
            <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 border text-base md:text-[1.2rem] border-[#5D57F4] font-medium transition-all duration-300 hover:bg-[#5D57F1] bg-[#5D57F4] text-[#fff] rounded">
              Get Started
            </button>
            <button className="w-full md:w-auto px-6 md:px-8 py-3 md:py-4 border border-[#5D57F4] text-base md:text-[1.2rem] font-medium text-[#5D57F4] rounded hover:bg-[#5D57F4] hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
 