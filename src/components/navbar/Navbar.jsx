import React from "react";
import cartImg from "../../assets/assets/products/shopping-cart.png";
const Navbar = () => {
  return (
    <nav className='   h-20 mx-auto  border border-gray-300'>
      <div className='  mt-3'>
        <div className='flex justify-around   items-center  '>
          <h1 className='text-5xl font-bold'>
            <span className=' text-[#2b16cf]'>DigiTools</span>
          </h1>

          <div className='flex items-center'>
            <ul className='flex gap-6 font-bold'>
              <li>Products</li>
              <li>Features</li>
              <li>Pricing</li>
              <li>Testimonials</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className='flex gap-4 items-center'>
            <div>
              <img src={cartImg} alt='' />
            </div>
            <h2 className='font-bold'>Login</h2>
            <div>
              <button className='py-2 px-3 bg-linear-65 from-purple-500 to-pink-500 rounded-3xl text-white'>
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
