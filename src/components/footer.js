import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaVimeo, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return <>
    <div className="container mx-auto h-[500px] bg-white relative">
      <div className=''>
        <svg xmlns="http://www.w3.org/2000/svg" className='w-full overflow-hidden' height="337" viewBox="0 0 1600 337" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L1600 0V195C1600 195 1080.43 337 720.621 337C360.81 337 0 195 0 195V0Z" fill="#1B1D21" />
        </svg>
      </div>
      <div className='absolute left-0 right-0 flex justify-center top-40'>
        <div className='max-w-[1080px] w-full h-[200px] md:h-[190px] bg-amber-800 rounded-md text-white grid grid-cols-1  md:grid-cols-12 p-3 gap-3 md:gap-8'>
          <div className='col-span-5'>
            <h3 className='text-2xl md:text-3xl font-semibold pb-3'>Subscribe Newsletters</h3>
            <p className='text-sm md:text-base'>Subscribe to our newsletter and unlock a world of exclusive benefits. Be the first to know about our latest products, special promotions, and exciting updates. </p>
          </div>
          <div className='col-span-7 flex items-center'>
            <input type="text" name="" id="" className='w-full p-2 rounded-l-md border-amber-800' />
            <button className='w-52 p-[7px] border rounded-r-md hover:bg-white hover:text-amber-800'>Subscribe Now</button>
          </div>
        </div>
      </div>
      <div className='flex flex-col justify-end absolute bottom-0 left-0 right-0'>
        <div className="flex flex-col md:flex-row gap-5 justify-between w-full items-center mb-5">
          <div className="flex items-center">
            <Link href="/" className="w-[4.875rem] text-[#0a142f] font-['Poppins'] leading-[normal]">About us</Link>
            <Link href="/" className="w-[4.75rem] text-[#0a142f] font-['Poppins'] leading-[normal]">Discover</Link>
            <Link href="/" className="w-[3.9375rem] text-[#0a142f] font-['Poppins'] leading-[normal]">Explore</Link>
            <Link href="/" className="w-[3.25rem] text-[#0a142f] font-['Poppins'] leading-[normal]">FAQ</Link>
          </div>
          <div className='flex gap-5 items-center text-2xl justify-center'>
            <Link href="https://facebook.com" className='p-1 text-2xl'><FaFacebook /></Link>
            <Link href="https://twitter.com" className='p-1 text-2xl'><FaTwitter /></Link>
            <Link href="https://vimeo.com" className='p-1 text-2xl'><FaVimeo /></Link>
            <Link href="https://youtube.com" className='p-1 text-2xl'><FaYoutube /></Link>
          </div>
        </div>
        <div className="flex justify-between items-center py-5 px-3 xl:px-0 border-t border-t-[#000000]/25 ">
          <p className="text-[#0a142f] font-['Poppins'] text-sm leading-[normal]">© 2024 All rights reserved</p>
          <Link href="/" className="w-64 text-[#0a142f] hover:text-amber-800 text-right font-['Poppins'] text-sm leading-[normal]">Terms of Service <span className='pl-10'> Privacy Policy</span></Link>
        </div>
      </div>
    </div >
  </>
};

export default Footer;
