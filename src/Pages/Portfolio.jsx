import React, { useState } from "react";
import { CgPlayButtonO } from "react-icons/cg";
import { IoEyeOutline } from "react-icons/io5";
import { GoArrowRight } from "react-icons/go";
import Footer from "../components/Footer";

const Portfolio = () => {
const data=[
  {
    img: "https://bootstrapmade.com/content/demo/Invent/assets/img/portfolio/portfolio-1.webp",
    icon1: <IoEyeOutline />,
    icon2: <GoArrowRight />,
    head1: "Web Design",
    mainhead: "Modern Dashboard Interface",
    pere: "Maecenas faucibus mollis interdum sed posuere consectetur est at lobortis.",
  },
  {
    img: "https://bootstrapmade.com/content/demo/Invent/assets/img/portfolio/portfolio-10.webp",
    icon1: <IoEyeOutline />,
    icon2: <GoArrowRight />,
    head1: "Graphics",
    mainhead: "Creative Brand Identity",
    pere: "Vestibulum id ligula porta felis euismod semper at vulputate.",
  },
  {
    img: "https://bootstrapmade.com/content/demo/Invent/assets/img/portfolio/portfolio-4.webp",
    icon1: <IoEyeOutline />,
    icon2: <GoArrowRight />,
    head1: "Branding",
    mainhead: "Luxury Brand Package",
    pere: "Aenean lacinia bibendum nulla sed consectetur elit.",
  },
  {
    img: "https://bootstrapmade.com/content/demo/Invent/assets/img/portfolio/portfolio-7.webp",
    icon1: <IoEyeOutline />,
    icon2: <GoArrowRight />,
    head1: "Motion",
    mainhead: "Product Animation Reel",
    pere: "Donec ullamcorper nulla non metus auctor fringilla dapibus.",
  },
  {
    img: "https://bootstrapmade.com/content/demo/Invent/assets/img/portfolio/portfolio-11.webp",
    icon1: <IoEyeOutline />,
    icon2: <GoArrowRight />,
    head1: "Graphics",
    mainhead: "Digital Art Collection",
    pere: "Cras mattis consectetur purus sit amet fermentum.",
  },
  {
    img: "https://bootstrapmade.com/content/demo/Invent/assets/img/portfolio/portfolio-2.webp",
    icon1: <IoEyeOutline />,
    icon2: <GoArrowRight />,
    head1: "Web Design",
    mainhead: "E-commerce Platform",
    pere: "Nullam id dolor id nibh ultricies vehicula ut id elit.",
  }
]
   const [ishover,setishover]=useState({})

   const onEnterHanlder = (index) => {
    setishover((prev) => ({ ...prev, [index]: true }));
  };

  const onLeaveHandler = (index) => {
    setishover((prev) => ({ ...prev, [index]: false }));
  };
  return (
    <div>
      <div className="w-full h-[40vh] pt-27  flex flex-col gap-5 justify-center items-center">
        <h1 className="text-[2.5rem] font-bold">Portfolio</h1>
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
      {/* container-2.................... */}
      <div className="w-full min-h-[130vh]">
        <div className="h-auto min-h-[10vh] flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 rounded-xl items-center py-6">
          {["All Work", "Web Design", "Graphics", "Motion", "Brading"].map(
            (value, index) => {
              return (
                <button
                  key={index}
                  className="py-2 px-4 text-white font-medium rounded bg-[#5D57F4] w-full sm:w-auto text-center"
                >
                  {value}
                </button>
              );
            }
          )}
        </div>
        <div className="w-full flex flex-wrap gap-8 md:gap-10 items-center justify-center px-2 md:px-8 lg:px-16 py-10 md:py-16">
          {data.map((value, index) => {
            const newidex= index + 5;
            return (
              // <div 
              //   onMouseEnter={()=>onEnterHanlder(newidex)}
              //   onMouseLeave={()=> onLeaveHandler(newidex)}
              //   key={index}
              //   className={`w-full sm:w-[47%] lg:w-[30%] rounded-xl ${ishover[newidex] ? 'shadow-2xl transition-all duration-300' : ''} bg-white flex flex-col h-auto min-h-[350px] max-w-[400px] mx-auto`}
              // >
              //   <div 
              //   className="w-full aspect-[4/3]  relative rounded-t-xl">
              //     <img src={value.img} className={`w-full h-full object-cover transition-all duration-300 ${ishover[newidex] ? 'shadow-[0_25px_40px_-10px_rgba(0,0,0,0.25)] ':''}`} alt="" />
              //   {
              //         ishover[newidex] && (
              //       <div className={`absolute flex gap-3 left-[20px] bottom-[15px] transition-all duration-300}`}>
              //       <i className={`text-[1.3rem] transition-all duration-300 bg-white text-[#5D57F4] py-[0.8rem] px-[0.8rem] rounded-full  ${ishover[newidex] ? 'transition-all duration-300':''}`}>{value.icon1}</i>
              //       <i className={`text-[1.3rem] transition-all duration-300 bg-white text-[#5D57F4] font-extralight py-[0.8rem] px-[0.8rem] rounded-full ${ishover[newidex] ? 'transition-all duration-300':''} `}>{value.icon2}</i>
              //     </div>
              //       ) 
              //    }
              //   </div>
              //   <div className="pt-6 flex flex-col justify-center items-start px-6 gap-2 pb-6">
              //     <h3 className="uppercase font-medium text-[#5D57F4] text-xs md:text-sm">{value.head1}</h3>
              //     <h1 className="text-lg md:text-xl text-[#32353A] font-bold">{value.mainhead}</h1>
              //     <p className="text-xs md:text-sm text-[#4B4F53]">{value.pere}</p>
              //   </div>
              // </div>
              <div 
  onMouseEnter={() => onEnterHanlder(newidex)}
  onMouseLeave={() => onLeaveHandler(newidex)}
  key={index}
  className={`w-full sm:w-[47%] lg:w-[30%] rounded-xl bg-white flex flex-col h-auto min-h-[350px] max-w-[400px] mx-auto transition-all duration-300 ${
    ishover[newidex] ? 'shadow-2xl' : ''
  }`}
>
  
  <div className="w-full aspect-[4/3] relative rounded-t-xl overflow-hidden">
    <img
      src={value.img}
      className={`w-full h-full object-cover transition-all duration-300 ${
        ishover[newidex] ? 'shadow-[0_25px_40px_-10px_rgba(0,0,0,0.25)]' : ''
      }`}
      alt=""
    />

    {/* Smooth Icon Animation */}
    <div
      className={`absolute flex gap-3 left-[20px] bottom-[15px] transition-all duration-300 transform ${
        ishover[newidex] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <i className="text-[1.3rem] bg-white text-[#5D57F4] p-3 rounded-full transition-all duration-300">
        {value.icon1}
      </i>
      <i className="text-[1.3rem] bg-white text-[#5D57F4] p-3 rounded-full transition-all duration-300">
        {value.icon2}
      </i>
    </div>
  </div>

  <div className="pt-6 flex flex-col justify-center items-start px-6 gap-2 pb-6">
    <h3 className="uppercase font-medium text-[#5D57F4] text-xs md:text-sm">
      {value.head1}
    </h3>
    <h1 className="text-lg md:text-xl text-[#32353A] font-bold">
      {value.mainhead}
    </h1>
    <p className="text-xs md:text-sm text-[#4B4F53]">{value.pere}</p>
  </div>
</div>
);
          })}
        </div>
      </div>
     <Footer/> 
    </div>
  );
};

export default Portfolio;
