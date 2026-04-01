import React from "react";
import photoImg from "../../assets/assets/products/writing_2327400 1.png";
import designImg from "../../assets/assets/products/design-tool.png";
import operationImg from "../../assets/assets/products/operation.png";
import portfolioImg from "../../assets/assets/products/portfolio.png";
import socialImg from "../../assets/assets/products/social-media.png";

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
        <div className=' flex justify-center items-center gap-4 pt-3 '>
          <div className='btn py-2 px-3 bg-linear-65 from-purple-500 to-pink-500 rounded-3xl text-white'>
            Products
          </div>
          <div className=' rounded-3xl  bg-gray-100 py-2 px-3 hover:bg-linear-65 from-purple-500 to-pink-500 '>
            Cart (2)
          </div>
        </div>
      </div>
      <div className=' w-[1200px] h-[874px] mx-auto   pt-10 '>
        <div className='flex justify-center gap-4'>
          <div>
            <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl '>
              <div>
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
                      Generate high-quality content, blogs, and marketing copy
                      in seconds with advanced AI.
                    </p>
                    <h1 className='text-3xl font-bold pt-2'>$29/mo</h1>
                    <div>
                      <div className='flex items-center gap-x-3 pt-2'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>
                          Unlimited AI generations
                        </p>
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
          <div>
            <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl flex justify-around '>
              <div>
                <div className='justify-between flex pl-5'>
                  <div className='pt-7'>
                    <img
                      className='border-2 border-[#e2dbec] px-3 py-3 rounded-full'
                      src={designImg}
                      alt=''
                    />
                  </div>
                  <div className='pt-3 pr-5'>
                    <button className='bg-[#E1E7FF] font-bold text-primary  py-1 px-3 rounded-3xl '>
                      Popular
                    </button>
                  </div>
                </div>
                <div className='pl-7'>
                  <div>
                    <h1 className='text-3xl font-bold pt-3'>
                      Design Templates Pack
                    </h1>
                    <p className='text-[#627382] pt-3'>
                      2000+ premium templates for social media, presentations,
                      and marketing materials.
                    </p>
                    <h1 className='text-3xl font-bold pt-2'>$49/one-time</h1>
                    <div>
                      <div className='flex items-center gap-x-3 pt-2'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>2000+ templates</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>Monthly updates</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>Commercial license</p>
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
          <div>
            <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl '>
              <div>
                <div className='justify-between flex pl-5'>
                  <div className='pt-7'>
                    <img
                      className='border-2 border-[#e2dbec] px-3 py-3 rounded-full'
                      src={photoImg}
                      alt=''
                    />
                  </div>
                  <div className='pt-3 pr-5'>
                    <button className='text-[#0A883E] font-bold bg-green-200 py-1 px-3 rounded-3xl '>
                      New
                    </button>
                  </div>
                </div>
                <div className='pl-7'>
                  <div>
                    <h1 className='text-3xl font-bold pt-3'>
                      Premium Stock Assets
                    </h1>
                    <p className='text-[#627382] pt-3'>
                      Access millions of royalty-free photos, videos, and
                      graphics for your projects.
                    </p>
                    <h1 className='text-3xl font-bold pt-2'>$19/mo</h1>
                    <div>
                      <div className='flex items-center gap-x-3 pt-2'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>10M+ assets</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>Commercial use</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>No attribution</p>
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
        <div className='flex justify-center gap-4 pt-4'>
          <div>
            <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl '>
              <div>
                <div className='justify-between flex pl-5'>
                  <div className='pt-7'>
                    <img
                      className='border-2 border-[#e2dbec] px-3 py-3 rounded-full'
                      src={operationImg}
                      alt=''
                    />
                  </div>
                  <div className='pt-3 pr-5'>
                    <button className='bg-[#E1E7FF] font-bold text-primary py-1 px-3 rounded-3xl '>
                      Popular
                    </button>
                  </div>
                </div>
                <div className='pl-7'>
                  <div>
                    <h1 className='text-3xl font-bold pt-3'>
                      Automation Toolkit
                    </h1>
                    <p className='text-[#627382] pt-3'>
                      Automate repetitive tasks and streamline your workflow
                      with powerful tools.
                    </p>
                    <h1 className='text-3xl font-bold pt-2'>$79/mo</h1>
                    <div>
                      <div className='flex items-center gap-x-3 pt-2'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>50+ automations</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>API access</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>Custom workflows</p>
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
          <div>
            <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl flex justify-around '>
              <div>
                <div className='justify-between flex pl-5'>
                  <div className='pt-7'>
                    <img
                      className='border-2 border-[#e2dbec] px-3 py-3 rounded-full'
                      src={portfolioImg}
                      alt=''
                    />
                  </div>
                  <div className='pt-3 pr-5'>
                    <button className='text-[#0A883E] font-bold bg-green-200  py-1 px-3 rounded-3xl '>
                      New
                    </button>
                  </div>
                </div>
                <div className='pl-7'>
                  <div>
                    <h1 className='text-3xl font-bold pt-3'>
                      Resume Builder Pro
                    </h1>
                    <p className='text-[#627382] pt-3'>
                      Create professional resumes and cover letters that land
                      interviews.
                    </p>
                    <h1 className='text-3xl font-bold pt-2'>$15/one-time</h1>
                    <div>
                      <div className='flex items-center gap-x-3 pt-2'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>100+ templates</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>ATS optimization</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>Export to PDF</p>
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
          <div>
            <div className='w-[380px] h-[400px] border border-gray-300 rounded-3xl '>
              <div>
                <div className='justify-between flex pl-5'>
                  <div className='pt-7'>
                    <img
                      className='border-2 border-[#e2dbec] px-3 py-3 rounded-full'
                      src={socialImg}
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
                    <h1 className='text-3xl font-bold '>
                      Social Media Content Kit
                    </h1>
                    <p className='text-[#627382] '>
                      Complete toolkit for creating engaging social media
                      content across all platforms.
                    </p>
                    <h1 className='text-3xl font-bold pt-2'>$39/mo</h1>
                    <div>
                      <div className='flex items-center gap-x-3 pt-2'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>5000+ assets</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>Scheduler included</p>
                      </div>
                      <div className='flex items-center gap-x-3'>
                        <FaCheck style={{ color: "green" }} />
                        <p className='text-[#627382]'>Analytics dashboard</p>
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
      </div>
    </div>
  );
};

export default Card;
