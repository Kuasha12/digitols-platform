import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className='footer lg:footer-horizontal bg-neutral text-neutral-content p-20  justify-center items-center gap-24'>
        <div>
          <h1 className='text-4xl font-bold '>DigiTools</h1>
          <p className='pt-5'>
            Premium digital tools for creators, <br /> professionals, and
            businesses. Work smarter <br /> with our suite of powerful tools.
          </p>
        </div>
        <nav>
          <h6 className='footer-title'>Services</h6>
          <a className='link link-hover'>Branding</a>
          <a className='link link-hover'>Design</a>
          <a className='link link-hover'>Marketing</a>
          <a className='link link-hover'>Advertisement</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Company</h6>
          <a className='link link-hover'>About us</a>
          <a className='link link-hover'>Contact</a>
          <a className='link link-hover'>Jobs</a>
          <a className='link link-hover'>Press kit</a>
        </nav>
        <nav>
          <h6 className='footer-title'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <a className='link link-hover'>Privacy policy</a>
          <a className='link link-hover'>Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
