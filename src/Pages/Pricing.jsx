import React from "react";
import { useState } from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
// import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { SlArrowDown } from "react-icons/sl";
import Footer from "../components/Footer";

const Pricing = () => {
  const [ishover, setishover] = useState(Array(3).fill(false));
  const [isclick, setisclick] = useState(Array(9).fill(false));

  const onchangeHanlder = (index) => {
    const newState = [...isclick];
    newState[index] = !newState[index]; // Toggle true/false
    setisclick(newState);
  };

  const arrowEnterHandler = (index) => {
    const newState = [...ishover];
    newState[index] = true;
    setishover(newState);
  };

  const arrowLeaveHandler = (index) => {
    const newState = [...ishover];
    newState[index] = false;
    setishover(newState);
  };

  const onMouseEnter = () => {
    setishover(true);
  };
  const onMouseLeave = () => {
    setishover(false);
  };

  return (
    <div className="w-full min-h-[110vh] bg-[#F4F4F9] pb-10">
      <div>
        <div className="w-full min-h-[30vh] pt-35 flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-[2.1rem] text-[#32353A] font-bold">Pricing</h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-[10%] sm:w-[5%] border-t-1 border-black"></div>
            <span className="w-[10%] sm:w-[5%] border-t-4 border-[#5D57F4]"></span>
            <span className="w-[10%] sm:w-[5%] border-t-1 border-black"></span>
          </div>
          <p className="text-sm sm:text-base md:text-[1rem] pb-15 text-center px-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit .
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col lg:flex-row gap-6 md:gap-10 items-center justify-center min-h-[60vh] px-2 md:px-0">
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-[27%] rounded-2xl px-4 sm:px-8 pt-10 bg-white h-auto pb-10 min-h-[400px] mb-4 lg:mb-0">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg md:text-[1.8rem]">Basic Plan</h1>
            <p className="text-2xl md:text-[3rem] text-[#212529] font-bold">
              $ 9.9 <span className="text-base md:text-[1.1rem] font-medium text-[#7A7C7F]">/month</span>
            </p>
            <p className="text-base md:text-[1.1rem] text-[#212529]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.
            </p>
            <div>
              <h2 className="text-base md:text-[1.4rem] text-[#32353A] font-medium">Featured Included:</h2>
              <div>
                <ul className="list-disc flex flex-col gap-3 md:gap-5 pt-2 md:pt-4 text-base md:text-[1.1rem]">
                  <li>Duis aute irure dolor</li>
                  <li>Excepteur sint occaecat</li>
                  <li>Nemo enim ipsam voluptatem</li>
                </ul>
              </div>
            </div>
            <button className="w-full h-12 flex justify-center items-center gap-1 rounded-md bg-[#5D57F4] text-white font-bold mt-2">
              Buy Now <MdOutlineArrowRightAlt size={30} />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-[27%] rounded-2xl px-4 sm:px-8 pt-10 bg-[#5D57F4] text-white h-auto pb-10 min-h-[400px] mb-4 lg:mb-0">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg md:text-[1.8rem]">Standard Plan</h1>
            <p className="text-2xl md:text-[3rem] text-white font-bold">
              $ 19.9 <span className="text-base md:text-[1.1rem] font-medium text-[#fff]">/month</span>
            </p>
            <p className="text-base md:text-[1.1rem] text-white">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.
            </p>
            <div>
              <h2 className="text-base md:text-[1.4rem] text-white font-medium">Featured Included:</h2>
              <div>
                <ul className="list-disc flex flex-col gap-3 md:gap-5 pt-2 md:pt-4 text-base md:text-[1.1rem]">
                  <li>Lorem ipsum dolor sit amet</li>
                  <li>Consectetur adipiscing elit</li>
                  <li>Sed do eiusmod tempor</li>
                </ul>
              </div>
            </div>
            <button className="w-full h-12 flex justify-center items-center gap-1 rounded-md bg-white text-[#5D57F4] font-bold mt-2">
              Buy Now <MdOutlineArrowRightAlt size={30} />
            </button>
          </div>
        </div>
        <div className="w-full sm:w-3/4 md:w-2/3 lg:w-[27%] rounded-2xl px-4 sm:px-8 pt-10 bg-white h-auto pb-10 min-h-[400px]">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg md:text-[1.8rem]">Premium Plan</h1>
            <p className="text-2xl md:text-[3rem] text-[#212529] font-bold">
              $ 39.9 <span className="text-base md:text-[1.1rem] font-medium text-[#7A7C7F]">/month</span>
            </p>
            <p className="text-base md:text-[1.1rem] text-[#212529]">
              Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.
            </p>
            <div>
              <h2 className="text-base md:text-[1.4rem] text-[#32353A] font-medium">Featured Included:</h2>
              <div>
                <ul className="list-disc flex flex-col gap-3 md:gap-5 pt-2 md:pt-4 text-base md:text-[1.1rem]">
                  <li>Temporibus autem quibusdam</li>
                  <li>Saepe eveniet ut et voluptates</li>
                  <li>Nam libero tempore soluta</li>
                </ul>
              </div>
            </div>
            <button className="w-full h-12 flex justify-center items-center gap-1 rounded-md bg-[#5D57F4] text-white font-bold mt-2">
              Buy Now <MdOutlineArrowRightAlt size={30} />
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row min-h-[80vh] text-[#fff] justify-center items-center gap-6 md:gap-10 mt-10 px-2 md:px-0">
        <div className="w-full xl:w-[44%] flex px-4 pb-15 sm:px-7 flex-col items-start gap-5 pt-10 h-auto bg-[#5753DC] rounded-xl mb-6 xl:mb-0">
          <i>
            <FaRegQuestionCircle className="text-[2.5rem] md:text-[53px]" />
          </i>
          <h2 className="text-xl md:text-[1.9rem] font-bold">Still Have Questions?</h2>
          <p className="font-medium text-base md:text-lg">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum.
          </p>
          <div className="w-full flex flex-col gap-4">
            <div
              onMouseEnter={() => arrowEnterHandler(0)}
              onMouseLeave={() => arrowLeaveHandler(0)}
              className={`w-full h-[3.75rem] flex items-center pl-5 duration-300 transition-all gap-3 rounded-lg bg-[#6F6CDB] ${
                ishover[0]
                  ? "translate-x-2 bg-white/25 duration-300 transition-all"
                  : ""
              }`}
            >
              <i>
                <IoIosMail className="text-[1.2rem] md:text-[25px]" />
              </i>
              <p className="text-[15px] md:text-[16px] whitespace-nowrap font-medium">
                Email Support
              </p>
            </div>
            <div
              onMouseEnter={() => arrowEnterHandler(1)}
              onMouseLeave={() => arrowLeaveHandler(1)}
              className={`w-full h-[3.75rem] flex items-center pl-5 duration-300 transition-all gap-3 rounded-lg bg-[#6F6CDB] ${
                ishover[1]
                  ? "translate-x-2 bg-white/25 duration-300 transition-all"
                  : ""
              }`}
            >
              <i>
                <AiOutlineMessage className="text-[1.2rem] md:text-[25px]" />
              </i>
              <p className="text-[15px] md:text-[16px] whitespace-nowrap font-medium">
                Live Chat
              </p>
            </div>
            <div
              onMouseEnter={() => arrowEnterHandler(2)}
              onMouseLeave={() => arrowLeaveHandler(2)}
              className={`w-full h-[3.75rem] flex items-center pl-5 duration-300 transition-all gap-3 rounded-lg bg-[#6F6CDB] ${
                ishover[2]
                  ? "translate-x-2 bg-white/25 duration-300 transition-all"
                  : ""
              }`}
            >
              <i>
                <FiPhone className="text-[1.2rem] md:text-[25px]" />
              </i>
              <p className="text-[15px] md:text-[16px] whitespace-nowrap font-medium">
                Call Us
              </p>
            </div>
          </div>
        </div>
        {/* main-section-2--------------------------.............. */}
        <div className="w-full xl:w-[44%] h-auto flex flex-col gap-6 rounded-xl pt-2">
          {
         [
             {
              h1: (
                <>
                  Vivamus suscipit tortor eget felis porttitor <br /> volutpat?
                </>
              ),
              logo:<SlArrowDown/>,
              p:'Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla porttitor accumsan tincidunt.'
             },
             {
              h1: (
                <>
                 Curabitur aliquet quam id dui posuere blandit?
                </>
              ),
              logo:<SlArrowDown/>,
              p:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor risus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar.'
             },
             {
              h1: (
                <>
                 Sed porttitor lectus nibh ullamcorper sit amet?
                </>
              ),
              logo:<SlArrowDown/>,
              p:'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Vestibulum ac diam sit amet quam vehicula elementum.'
             },
             {
              h1: (
                <>
                  Nulla quis lorem ut libero malesuada feugiat?
                </>
              ),
              logo:<SlArrowDown/>,
              p:'Donec sollicitudin molestie malesuada. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel.'
             }
          ].map((value,index)=>{
            const newidex= index + 4;
          return  <div
          key={index}
            onMouseEnter={() => arrowEnterHandler(newidex)}
            onMouseLeave={() => arrowLeaveHandler(newidex)}
            className={`w-full shadow flex flex-col gap-4 rounded-xl pt-4 h-auto min-h-15 transition-all duration-300 ${
              ishover[newidex]
                ? "shadow-2xl -translate-y-1 transition-all duration-300"
                : ""
            }`}
          >
            <div className="w-auto flex items-center  px-4 justify-between h-auto">
              <h1 className={`text-[17px] md:text-[20px] font-medium ${isclick[index] ? ('text-[#5753DC]') : ('text-black')}`}> 
                {value.h1}
              </h1>
              <SlArrowDown
                onClick={()=>onchangeHanlder(index)}
                className={`text-[#5753DC]  ${
                  isclick[index]
                    ? "rotate-180 transition-all duration-300"
                    : "rotate-0 transition-all duration-300"
                }`}
              />
            </div>
            <div className="px-4 w-auto transition-all duration-300 overflow-hidden">
              <p
                className={`text-black transition-all pb-5 duration-500   ease-in-out 
                   ${isclick[index] ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
                style={{ transitionProperty: "max-height, opacity" }}>
                {value.p}
              </p>
            </div>
          </div>
          })
          }

        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Pricing;
