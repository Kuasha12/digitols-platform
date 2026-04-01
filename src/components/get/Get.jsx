import React from "react";
import userImg from "../../assets/assets/user.png";
import packagImg from "../../assets/assets/package.png";
import rocketImg from "../../assets/assets/rocket.png";

const Get = () => {
  return (
    <div className=' pt-24'>
      <div className='w-[1600px] h-[600px]  bg-gray-100'>
        <div className='pt-24'>
          <h1 className='text-4xl font-bold flex justify-center'>
            Get Started in 3 Steps
          </h1>
          <p className=' text-[#627382] flex justify-center pt-4'>
            Start using premium digital tools in minutes, not hours.
          </p>
          <div className='flex justify-center items-center gap-5 pt-10'>
            <div className='w-[380px] h-[300px]  bg-white rounded-2xl'>
              <div className=''>
                <div className='flex justify-center items-center pt-10'>
                  <img
                    className='border-2 border-[#e2dbec] px-3 py-3 rounded-full '
                    src={userImg}
                    alt=''
                  />
                  <div className=''>
                    <h1 className='border-2 bg-linear-65 from-purple-500 to-pink-500 px-4 py-3 rounded-full text-white'>
                      01
                    </h1>
                  </div>
                </div>

                <h1 className=' flex justify-center items-center font-bold text-2xl pt-3'>
                  Create Account
                </h1>
                <div>
                  <p className=' flex justify-center items-center text-[#627382] pt-2'>
                    Sign up for free in seconds. No credit card <br /> required
                    to get started.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[380px] h-[300px]  bg-white rounded-2xl'>
              <div className=''>
                <div className='flex justify-center items-center pt-10'>
                  <img
                    className='border-2 border-[#e2dbec] px-3 py-3 rounded-full '
                    src={packagImg}
                    alt=''
                  />
                  <div className=''>
                    <h1 className='border-2 bg-linear-65 from-purple-500 to-pink-500 px-4 py-3 rounded-full text-white'>
                      02
                    </h1>
                  </div>
                </div>

                <h1 className=' flex justify-center items-center font-bold text-2xl pt-3'>
                  Choose Products
                </h1>
                <div>
                  <p className=' flex justify-center items-center text-[#627382] pt-2'>
                    Browse our catalog and select the tools <br /> that fit your
                    needs.
                  </p>
                </div>
              </div>
            </div>
            <div className='w-[380px] h-[300px]  bg-white rounded-2xl'>
              <div className=''>
                <div className='flex justify-center items-center pt-10'>
                  <img
                    className='border-2 border-[#e2dbec] px-3 py-3 rounded-full '
                    src={rocketImg}
                    alt=''
                  />
                  <div className=''>
                    <h1 className='border-2 bg-linear-65 from-purple-500 to-pink-500 px-4 py-3 rounded-full text-white'>
                      03
                    </h1>
                  </div>
                </div>

                <h1 className=' flex justify-center items-center font-bold text-2xl pt-3'>
                  Start Creating
                </h1>
                <div>
                  <p className=' flex justify-center items-center text-[#627382] pt-2'>
                    Download and start using your premium <br /> tools
                    immediately.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Get;
