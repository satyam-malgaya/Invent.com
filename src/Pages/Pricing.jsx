import React from 'react'
// import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Pricing = () => {
  return (
    <div  className='w-full h-[160vh] bg-[#F4F4F9]'>
      <div>
      <div className="w-full h-[45vh] pt-30  flex flex-col gap-5 justify-center items-center">
        <h1 className="text-[2.1rem] text-[#32353A] font-bold">Pricing</h1>
        <div className="w-full flex justify-center items-center">
          <div className="w-[5%] border-t-1 border-black"></div>
          <span className="w-[5%] border-t-4 border-[#5D57F4]"></span>
          <span className="w-[5%] border-t-1 border-black"></span>
        </div>
        <p className="text-[1rem] ">
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit .
        </p>
      </div>
      </div>
      <div className='w-full flex gap-10  items-center justify-center h-[122vh]'>
        <div className='w-[27%] rounded-2xl px-10 pt-10 bg-white h-[93vh]  '>
          <div className='flex flex-col gap-3'>
            <h1 className='text-[1.8rem]'>Basic Plan</h1>
            <p className='text-[3rem] text-[#212529] font-bold'>$ 9.9 <span className='text-[1.1rem] font-medium text-[#7A7C7F]'>/month</span></p>
            <p className='text-[1.1rem] text-[#212529]'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam.</p>
            <div>
              <h2 className='text-[1.4rem] text-[#32353A] font-medium'>Featured Included:</h2>
              <div>
                <ul className='list-disc flex flex-col gap-5 pt-4 text-[1.1rem]'>
             <li>Duis aute irure dolor</li>
             <li>Excepteur sint occaecat</li>
             <li>Nemo enim ipsam voluptatem</li>
             </ul>
              </div>
            </div>
            <button className='w-10/12 h-12 flex justify-center items-center gap-1 rounded-md bg-[#5D57F4] text-white font-bold '>
              Buy Now <MdOutlineArrowRightAlt size={30}/>
            </button>
          </div>
        </div>
        <div className='w-[27%] rounded-2xl px-10 pt-10 bg-[#5D57F4] text-[white] h-[93vh] '>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[1.8rem]'>Standard Plan</h1>
            <p className='text-[3rem] text-white font-bold'>$ 19.9 <span className='text-[1.1rem] font-medium text-[#fff]'>/month</span></p>
            <p className='text-[1.1rem] text-white'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
            <div>
              <h2 className='text-[1.4rem] text-white font-medium'>Featured Included:</h2>
              <div>
                <ul className='list-disc flex flex-col gap-5 pt-4 text-[1.1rem]'>
             <li>Lorem ipsum dolor sit amet</li>
             <li>Consectetur adipiscing elit</li>
             <li>Sed do eiusmod tempor</li>
             </ul>
              </div>
            </div>
            <button className='w-10/12 h-12 flex justify-center items-center gap-1 rounded-md bg-white text-[#5D57F4] font-bold '>
              Buy Now <MdOutlineArrowRightAlt size={30}/>
            </button>
          </div>
        </div>
        <div className='w-[27%] rounded-2xl px-10 pt-10 bg-white h-[93vh]'>
        <div className='flex flex-col gap-3'>
            <h1 className='text-[1.8rem]'>Premium Plan</h1>
            <p className='text-[3rem] text-[#212529] font-bold'>$ 39.9 <span className='text-[1.1rem] font-medium text-[#7A7C7F]'>/month</span></p>
            <p className='text-[1.1rem] text-[#212529]'>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</p>
            <div>
              <h2 className='text-[1.4rem] text-[#32353A] font-medium'>Featured Included:</h2>
              <div>
                <ul className='list-disc flex flex-col gap-5 pt-4 text-[1.1rem]'>
             <li>Temporibus autem quibusdam</li>
             <li>Saepe eveniet ut et voluptates</li>
             <li>Nam libero tempore soluta</li>
             </ul>
              </div>
            </div>
            <button className='w-10/12 h-12 flex justify-center items-center gap-1 rounded-md bg-[#5D57F4] text-white font-bold '>
              Buy Now <MdOutlineArrowRightAlt size={30}/>
            </button>
          </div>
        </div>
      </div>
      <div className='w-full h-[120vh] bg-red-600'></div>
    </div>
  )
}

export default Pricing
