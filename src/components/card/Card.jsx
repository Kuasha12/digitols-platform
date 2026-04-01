import React from "react";
import photoImg from "../../assets/assets/products/writing_2327400 1.png";
import { FaCheck } from "react-icons/fa";

const Card = () => {
  return (
    <div className=' pt-20 '>
      <div>
        <h1 className='justify-center items-center flex font-bold text-5xl'>
          Premium Digital Tools
        </h1>
        <p className='flex justify-center items-center pt-5 text-[#627382]'>
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
        <div className='flex justify-center items-center gap-4 pt-3  border border-gray-200'>
          <button className='py-2 px-3 bg-linear-65 from-purple-500 to-pink-500 rounded-3xl text-white'>
            Products
          </button>
          <button className='bg-gray-100 py-2 px-3'>Cart (2)</button>
        </div>
      </div>
      <div className=' w-[1200px] h-[874px] mx-auto h- border border-red-700 justify-center items-center '>
        <div>
          <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl '>
            <div className='justify-between flex pl-5'>
              <div className='pt-7'>
                <img
                  className='border-2 border-[#e2dbec] px-3 py-3 rounded-full'
                  src={photoImg}
                  alt=''
                />
              </div>
              <div className='pt-3 pr-5'>
                <button className='text-[#BB4D00] font-bold bg-[#FEF3C6] py-1 px-3 rounded-3xl '>
                  Best Seller
                </button>
              </div>
            </div>
            <div className='pl-7'>
              <div>
                <h1 className='text-3xl font-bold pt-3'>AI Writing Pro</h1>
                <p className='text-[#627382] pt-3'>
                  Generate high-quality content, blogs, and marketing copy in
                  seconds with advanced AI.
                </p>
                <h1 className='text-3xl font-bold pt-2'>$29/mo</h1>
                <div>
                  <div className='flex items-center gap-x-3 pt-2'>
                    <FaCheck style={{ color: "green" }} />
                    <p className='text-[#627382]'>Unlimited AI generations</p>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <FaCheck style={{ color: "green" }} />
                    <p className='text-[#627382]'>50+ writing templates</p>
                  </div>
                  <div className='flex items-center gap-x-3'>
                    <FaCheck style={{ color: "green" }} />
                    <p className='text-[#627382]'>Grammar checker</p>
                  </div>
                </div>
                <div className='pt-3'>
                  <button className='w-11/12 py-2 bg-linear-65  from-purple-500 to-pink-500 rounded-3xl text-white'>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
