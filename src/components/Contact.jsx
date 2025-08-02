import React, { useState } from "react";
import { IoLocationOutline, IoPerson, IoPhonePortraitOutline, IoReorderThreeOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { LuClock } from "react-icons/lu";
import { IoIosMail } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import toast from "react-hot-toast";

const Contact = () => {
  const [ishover, setishover] = useState(Array(3).fill(false));
  const [change, setChange] = useState(Array(3).fill(false));
  const [fromData,setfromData] =useState({name:'',email:'',number:'', textarea:'',})
    
   const ischangeHandler=(e)=>{
      const {name,value}=e.target;
      setfromData((prev)=>{
        return {
          ...prev,
          [name]:value
        }
      })
      // console.log(fromData)
      
   }

   function submitHandler(e){
    e.preventDefault()
    toast.success("Submited Succesfully!")
   }
  const changeHandler = (index) => {
    const updatedChange = [...change];
    updatedChange[index] = !updatedChange[index];
    setChange(updatedChange);
  };

  const arrowHandler = (index) => {
    const newstate = [...ishover];
    newstate[index] = true;
    setishover(newstate);
  };

  const arrowLeaveHandler = (index) => {
    const newstate = [...ishover];
    newstate[index] = false;
    setishover(newstate);
  };

  return (
    <div className="w-full h-[100vh]">
      {/* Top Section */}
      <div className="w-full min-h-[30vh] pt-5 flex flex-col gap-5 justify-center items-center">
        <h1 className="text-2xl sm:text-3xl md:text-[2.1rem] text-[#32353A] font-bold">
          Contact
        </h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-[10%] sm:w-[5%] border-t-1 border-black"></div>
          <span className="w-[10%] sm:w-[5%] border-t-4 border-[#5D57F4]"></span>
          <span className="w-[10%] sm:w-[5%] border-t-1 border-black"></span>
        </div>
        <p className="text-sm sm:text-base md:text-[1rem] text-center px-2">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit.
        </p>
      </div>

      {/* Info Cards */}
      <div className="w-full h-[60vh] flex sm:flex-col sm:w-full md:flex-col lg:flex-row gap-6 justify-center items-center">
        {[
          {
            icon: <IoLocationOutline className="text-[2rem] text-[#5D57F4]" />,
            h1: "Our Address",
            p: "2847 Rainbow Road,\nSpringfield, IL 62701, USA",
          },
          {
            icon: <FiPhone className="text-[2rem] text-[#5D57F4]" />,
            h1: "Contact Number",
            p: "Mobile: +1 (555) 123-4567\nEmail: info@example.com",
          },
          {
            icon: <LuClock className="text-[2rem] text-[#5D57F4]" />,
            h1: "Opening Hours",
            p: "Monday - Saturday: 9:00 - 18:00\nSunday: Closed",
          },
        ].map((value, index) => (
          <div
            key={index}
            onMouseEnter={() => arrowHandler(index)}
            onMouseLeave={() => arrowLeaveHandler(index)}
            className={`w-[90%] border-1 transition-all duration-300 ${
              ishover[index] ? "-translate-y-4" : ""
            } border-[#E8E9E9] sm:w-[80%] md:w-[30%] bg-[#F9FAFB] rounded-xl shadow-md p-6 flex flex-col items-center text-center gap-4`}
          >
            <div className="bg-white p-4 rounded-full shadow">
              {value.icon}
            </div>
            <h2 className="text-lg font-bold text-[#333]">{value.h1}</h2>
            <p className="text-sm text-gray-600 whitespace-pre-line">
              {value.p}
            </p>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="w-full min-h-[60vh] flex justify-center items-center px-2 sm:px-4 md:px-10 mt-10">
        <form onSubmit={submitHandler} className="w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            <div
              onClick={() => changeHandler(0)}
              className={`flex items-center gap-2 p-1 rounded-md h-12 border-1 ${
                change[0] ? "border-[#5D57F4]" : "border-[#BBBDBE]"
              }`}
            >
              <i className="px-3 border-r-1 border-[#BBBDBE]">
                <IoPerson className="text-[1.2rem] text-[#5D57F4]" />
              </i>
              <input
                className="outline-none w-full"
                type="text"
                placeholder="Your Name"
                required
                value={fromData.name}
                onChange={ischangeHandler}
                name="name"
              />
            </div>

            <div
              onClick={() => changeHandler(1)}
              className={`flex items-center gap-2 p-1 rounded-md h-12 border-1 ${
                change[1] ? "border-[#5D57F4]" : "border-[#BBBDBE]"
              }`}
            >
              <i className="px-3 border-r-1 border-[#BBBDBE]">
                <IoIosMail className="text-[1.2rem] text-[#5D57F4]" />
              </i>
              <input
                className="outline-none w-full"
                type="email"
                placeholder="Email address"
                required
                value={fromData.email}
                onChange={ischangeHandler}
                name="email"
              />
            </div>

            <div
              onClick={() => changeHandler(2)}
              
              className={`flex items-center gap-2 p-1 rounded-md h-12 border-1 ${
                change[2] ? "border-[#5D57F4]" : "border-[#BBBDBE]"
              }`}
            >
              <i className="px-3 border-r-1 border-[#BBBDBE]">
                <IoPhonePortraitOutline className="text-[1.2rem] text-[#5D57F4]" />
              </i>
              <input
                className="outline-none w-full"
                type="number"
                placeholder="Phone Number"
                required
                value={fromData.number}
                onChange={ischangeHandler}
                name="number"

              />
            </div>

            <div
             onClick={()=> changeHandler(3)}
            className={`flex items-center gap-2 p-1 rounded-md border-[#BBBDBE] h-12 border-1 ${
              change[3] ? "border-[#5D57F4]" : "border-[#BBBDBE]"
            }`}>
              <i className="px-3 border-r-1 border-[#BBBDBE]">
                <IoReorderThreeOutline className="text-[1.2rem] text-[#5D57F4]" />
              </i>
              <select  className="outline-none w-full" id="country" name="country">
                <option value="">Select service*</option>
                <option value="Consulting">Consulting</option>
                <option value="Marketing">Marketing</option>
                <option value="Development">Development</option>
                <option value="Support">Support</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2 p-1 rounded-md border-[#BBBDBE] min-h-[120px] md:h-40 border-1 mt-5">
            <i className="px-3 border-r-1 border-[#BBBDBE]">
              <AiOutlineMessage className="text-[1.2rem] text-[#5D57F4]" />
            </i>
            <textarea
              className="outline-none w-full h-full p-4 resize-none"
              name="textarea"
              id="Message"
              placeholder="Your Message"
              required
              value={fromData.textarea}
              onChange={ischangeHandler}
              
            ></textarea>
          </div>
          <div className="py-6 flex justify-center lg:justify-center md:justify-start">
            <button type="submit" className="w-full md:w-auto py-3 px-5 border-1 rounded-md font-medium text-[#fff] bg-[#5D57F4] hover:bg-[#7370e1] transition-all duration-300">Submit Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
