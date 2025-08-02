import React, { useState } from "react";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStar } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contact from "../components/Contact";
const Team = () => {
  const [ishover,setishover]=useState(Array(6).fill(false))

  const arrowHandler=(index)=>{
      const newstate=[...ishover]
      newstate[index]=true;
      setishover(newstate)
  }
   
  const arrowLeaveHandler=(index)=>{
    const newstate=[...ishover]
    newstate[index]=false
    setishover(newstate)
  }
 const  onMouseEnter=()=>{
   setishover(true)
 }
 const onMouseLeave=()=>{
  setishover(false)
 }
 const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 6000,
  cssEase: "linear",
  centerMode: true,
  centerPadding: "30px", // Add gap here between slides
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: "20px"
      }
    }
  ]
}

const data=[
  {
    p:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icons:<>{
      [...Array(5)].map((_,index)=>{
        <FaStar key={index} />
      })
    }</>,
    img:'https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-m-8.webp',
    Name:'Robert Johnson',
    job:'Marketing Director'
},
{
  p:'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et maecenas aliquam.',
  icons:<>{
    [...Array(5)].map((_,index)=>{
      <FaStar key={index} />
    })
  }</>,
  img:'https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-f-3.webp',
  job:'Product Manager',
  Name:'Lisa Williams'
},
{
  p:'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram.',
  icons:<>{
    [...Array(5)].map((_,index)=>{
      <FaStar key={index} />
    })
  }</>,
  img:'https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-f-10.webp',
  Name:'Emma Parker',
  job:'UX Designer'
},
{
  p:'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit.',
  icons:<>{
    [...Array(5)].map((_,index)=>{
      <FaStar key={index} />
    })
  }</>,
  img:'https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-m-5.webp',
  Name:'David Miller',
  job:'Senior Developer'
},
{
  p:'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat.',
  icons:<>{
    [...Array(5)].map((_,index)=>{
      <FaStar key={index} />
    })
  }</>,
  img:'https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-m-2.webp',
  Name:'Michael Davis',
  job:'CEO & Founder'
},
{
  p:'Eius ipsam praesentium dolor quaerat inventore rerum odio. Quos laudantium adipisci eius. Accusamus qui iste cupiditate sed temporibus est aspernatur.',
  icons:<>{
    [...Array(5)].map((_,index)=>{
      <FaStar key={index} />
    })
  }</>,
  img:'https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-f-7.webp',
  Name:'Sarah Thompson',
  job:'Art Director'
},
]
  return (
    <div className="w-full min-h-screen bg-white pb-10">
      <div>
        <div className="w-full min-h-[30vh] pt-35 flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-[2.1rem] text-[#32353A] font-bold">
            Team
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-[10%] sm:w-[5%] border-t-1 border-black"></div>
            <span className="w-[10%] sm:w-[5%] border-t-4 border-[#5D57F4]"></span>
            <span className="w-[10%] sm:w-[5%] border-t-1 border-black"></span>
          </div>
          <p className="text-sm sm:text-base md:text-[1rem] text-center px-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit .
          </p>
        </div>
      </div>
      <div
        className="w-full min-h-[95vh] flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 justify-center items-center px-2 md:px-8 mt-3"
      >
        {[
          {
            img: "https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-m-1.webp",
            h1: "Daniel Mitchell",
            p: "Creative Director",
            hp: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra.",
          },
          {
            img: "https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-f-6.webp",
            h1: "Daniel Mitchell",
            p: "Lead Developer",
            hp: "Aliquam tincidunt mauris eu risus. Vestibulum auctor dapibus neque. Nunc dignissim risus id metus.",
          },
          {
            img: "https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-m-6.webp",
            h1: "Daniel Mitchell",
            p: "UI/UX Designer",
            hp: "Cras ornare tristique elit. Integer in dui quis est placerat ornare. Phasellus a lacus a risus.",
          },
          {
            img: "https://bootstrapmade.com/content/demo/Invent/assets/img/person/person-f-3.webp",
            h1: "Daniel Mitchell",
            p: "Marketing Strategist",
            hp: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          },
        ].map((value, index) => {
          return (
            <div
              key={index}
              onMouseEnter={() => arrowHandler(index)}
              onMouseLeave={() => arrowLeaveHandler(index)}
              className={`w-full sm:w-[90%] md:w-[80%] pt-5 lg:w-full rounded-xl shadow-2xl h-[350px] sm:h-[400px] md:h-[420px] transition-all duration-300 mx-auto bg-white ${
                ishover[index] ? "-translate-y-4 z-10" : ""
              }`}
            >
              <div className="w-full h-[320px] sm:h-[240px] md:h-[300px] relative overflow-hidden transition-all duration-300 rounded-tl-xl rounded-tr-xl">
                {/* Hover overlay - always rendered */}
                <div
                  className={`absolute inset-0 flex flex-col gap-5 items-center pt-8 sm:pt-10 rounded-tl-xl rounded-tr-xl 
                    bg-[#5D57F4]/75 transition-all duration-500 ease-in-out
                    ${ishover[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5 pointer-events-none"}`}
                >
                  <p className="px-4 sm:px-8 text-white text-center text-xs sm:text-sm md:text-base">{value.hp}</p>
                  <div className="flex justify-center gap-3 sm:gap-5 items-center">
                    <i className="px-2 py-2 sm:px-3 sm:py-3 bg-white rounded-full transition hover:scale-110">
                      <FaXTwitter />
                    </i>
                    <i className="px-2 py-2 sm:px-3 sm:py-3 bg-white rounded-full transition hover:scale-110">
                      <IoLogoFacebook />
                    </i>
                    <i className="px-2 py-2 sm:px-3 sm:py-3 bg-white rounded-full transition hover:scale-110">
                      <FaInstagram />
                    </i>
                    <i className="px-2 py-2 sm:px-3 sm:py-3 bg-white rounded-full transition hover:scale-110">
                      <FaLinkedin />
                    </i>
                  </div>
                </div>
                {/* Background Image */}
                <img
                  className="rounded-tl-xl rounded-tr-xl w-full h-full object-cover"
                  src={value.img}
                  alt="Profile"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-2 pt-4 sm:pt-5">
                <h1 className="text-base sm:text-lg md:text-[1.2rem] font-bold text-[#32353A]">
                  {value.h1}
                </h1>
                <p className="bg-[#E7E6FE] text-xs sm:text-sm md:text-[0.9rem] font-bold text-[#5D57F4] w-32 sm:w-36 rounded-full h-8 flex justify-center items-center">
                  {value.p}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full h-[120vh] ">
        <div className="w-full h-[30vh]">
        <div className="w-full min-h-[30vh]  flex flex-col gap-5 justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-[2.1rem] text-[#32353A] font-bold">
            Testimonials
          </h1>
          <div className="w-full flex justify-center items-center">
            <div className="w-[10%] sm:w-[5%] border-t-1 border-black"></div>
            <span className="w-[10%] sm:w-[5%] border-t-4 border-[#5D57F4]"></span>
            <span className="w-[10%] sm:w-[5%] border-t-1 border-black"></span>
          </div>
          <p className="text-sm sm:text-bas pt-8 md:text-[1rem] text-center px-2">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit .
          </p>
        </div>
        </div>
        <div className="w-full px-2 sm:px-6 md:px-10 lg:pt-15 mt-8">
  <Slider {...settings}>
    {data.map((value, index) => (
      <div
        key={index}
        className="p-3 sm:p-4 bg-white rounded-xl shadow-md text-center w-full max-w-xs mx-auto"
      >
        <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4 px-1 sm:px-2">{value.p}</p>
        <div className="flex justify-center text-yellow-400 mb-2 sm:mb-3">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <img
          src={value.img}
          alt={value.Name}
          className="w-14 h-14 sm:w-20 sm:h-20 mx-auto rounded-full object-cover mb-2"
        />
        <h3 className="text-base sm:text-lg font-semibold text-[#32353A]">
          {value.Name}
        </h3>
        <p className="text-xs sm:text-sm text-[#5D57F4]">{value.job}</p>
      </div>
    ))}
  </Slider>
</div>
      </div>
      <Contact/>
    </div>
    
  );
};

export default Team;
