import React from "react";
import cartImg from "../../assets/assets/Play.png";
import bannerImg from "../../assets/assets/banner.png";
const Banner = () => {
  return (
    <div className='flex justify-around w-11/12 mx-auto'>
      <div className='pt-32 '>
        <button className='text-[#2b16cf] py-2 px-14 bg-gray-200 rounded-3xl '>
          New: AI-Powered Tools Available
        </button>

        <div className='gap-3'>
          <h1 className='font-bold text-7xl pt-6 text-[#101727]'>
            Supercharge Your <br />
            Digital Workflow
          </h1>
        </div>
        <p className='text-[#627382] pt-4'>
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className='flex pt-5 gap-4'>
          <div>
            <button className='py-3 px-4 bg-linear-65 from-purple-500 to-pink-500 rounded-3xl text-white  font-bold'>
              Explore Products
            </button>
          </div>
          <div className=''>
            <button className='flex py-3 px-4 text-[#2b16cf] border-2 border-[#2b16cf] font-bold rounded-3xl gap-2'>
              <img src={cartImg} alt='' />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      <div className='pt-20'>
        <img src={bannerImg} alt='' />
      </div>
    </div>
  );
};

export default Banner;
