import React from "react";
import { FaCheck } from "react-icons/fa";

const Simple = () => {
  return (
    <div className='h-[800px]'>
      <div>
        <div className='pt-32'>
          <h1 className='text-4xl font-bold flex justify-center items-center'>
            Simple, Transparent Pricing
          </h1>
          <p className='text-[#627382] flex justify-center items-center pt-5'>
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>
      </div>
      <div className='flex  justify-center items-center gap-4 pt-8'>
        <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl bg-gray-100 pt-3'>
          <div className='pl-7'>
            <h1 className='text-2xl font-bold pt-3'>Starter</h1>
            <p className='text-[#627382] pt-3'>Perfect for getting started</p>

            <h1 className='text-3xl font-bold pt-5'>$0/month</h1>

            <div className='flex items-center gap-x-3 pt-5'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Access to 10 free tools</p>
            </div>
            <div className='flex items-center gap-x-3 pt-2'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Basic templates</p>
            </div>
            <div className='flex items-center gap-x-3 pt-2'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Community support</p>
            </div>
            <div className='flex items-center gap-x-3 pt-2'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Access to 10 free tools</p>
            </div>

            <div className='pt-12'>
              <button className='w-11/12 py-2 bg-linear-65  from-purple-500 to-pink-500 rounded-3xl text-white'>
                Get Started Free
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-center items-center'>
            <button className='px-5 py-2 rounded-3xl text-[#BB4D00] bg-[#FEF3C6] absolute '>
              Most Popular
            </button>
          </div>
          <div className='w-[380px] h-[400px] border border-gray-300  bg-linear-65 relative  from-purple-500 to-pink-500 rounded-3xl text-white'>
            <div className='pl-7'>
              <h1 className='text-2xl font-bold pt-3'>Pro</h1>
              <p className='text-white pt-2'>Best for professionals</p>

              <h1 className='text-3xl font-bold pt-2'>$29/month</h1>

              <div className='flex items-center gap-x-3 pt-3'>
                <FaCheck style={{ color: "white" }} />
                <p className='text-white'>Access to all premium tools</p>
              </div>
              <div className='flex items-center gap-x-3 pt-2'>
                <FaCheck style={{ color: "white" }} />
                <p className='text-white'>Unlimited templates</p>
              </div>
              <div className='flex items-center gap-x-3 pt-2'>
                <FaCheck style={{ color: "white" }} />
                <p className='text-white'>Priority support</p>
              </div>
              <div className='flex items-center gap-x-3 pt-2'>
                <FaCheck style={{ color: "white" }} />
                <p className='text-white'>Unlimited projects</p>
              </div>
              <div className='flex items-center gap-x-3 pt-2'>
                <FaCheck style={{ color: "white" }} />
                <p className='text-white'>Cloud sync</p>
              </div>
              <div className='flex items-center gap-x-3 pt-2'>
                <FaCheck style={{ color: "white" }} />
                <p className='text-white'>Advanced analytics</p>
              </div>

              <div className='pt-4'>
                <button className='w-11/12 py-2 bg-white text-purple-700 rounded-3xl'>
                  Start Pro Trial
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl bg-gray-100'>
          <div className='pl-7'>
            <h1 className='text-3xl font-bold pt-3'>Starter</h1>
            <p className='text-[#627382] pt-3'>Perfect for getting started</p>

            <h1 className='text-3xl font-bold pt-5'>$0/month</h1>

            <div className='flex items-center gap-x-3 pt-5'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Access to 10 free tools</p>
            </div>
            <div className='flex items-center gap-x-3 pt-2'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Basic templates</p>
            </div>
            <div className='flex items-center gap-x-3 pt-2'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Community support</p>
            </div>
            <div className='flex items-center gap-x-3 pt-2'>
              <FaCheck style={{ color: "green" }} />
              <p className='text-[#627382]'>Access to 10 free tools</p>
            </div>

            <div className='pt-14'>
              <button className='w-11/12 py-2 bg-linear-65  from-purple-500 to-pink-500 rounded-3xl text-white'>
                Get Started Free
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simple;
