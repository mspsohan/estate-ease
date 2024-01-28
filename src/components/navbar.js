"use client"
import Link from "next/link";
import {
   FaMapMarkerAlt,
   FaMobileAlt,
   FaRegClock,
   FaFacebook,
   FaInstagram,
   FaWhatsapp,
} from "react-icons/fa";
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';



const Navbar = () => {
   const [showMenu, setShowMenu] = useState(false);



   const handleMenuClick = () => {
      setShowMenu(!showMenu);
   };

   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 33) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
         window.removeEventListener("scroll", handleScroll);
      };
   }, []);

   return (
      <div className={`fixed top-0 z-50 w-full h-[80px] lg:h-[120px] px-4 text-black ${isScrolled ? "bg-white" : "bg-transparent"}`} >
         <div className=" ">
            <div className="container mx-auto hidden lg:flex lg:flex-row  lg:justify-between justify-center items-center space-y-1  text-gray-500 py-3 w-full">
               <div className="lg:flex lg:flex-row flex flex-col justify-center items-center space-x-12 lg:space-y-0 space-y-2">
                  <div className="flex flex-row space-x-2">
                     <FaMapMarkerAlt className="w-5 h-5 text-gray-500" />
                     <p>Nikanjia-2 Dhaka, Bangladesh</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                     <FaMobileAlt className="w-5 h-5 text-gray-500" />
                     <p> (880) 1234-567890</p>
                  </div>
                  <div className="flex flex-row space-x-2">
                     <FaRegClock className="w-5 h-5 text-gray-500" />
                     <p>Mon-Sat: 08:00 - 20:00</p>
                  </div>
               </div>
               <div className="flex flex-row space-x-4  justify-center items-center ">
                  <Link href="/"><FaFacebook className="w-6 h-6 text-gray-500" /></Link>
                  <Link href="/"><FaInstagram className="w-6 h-6 text-gray-500" /></Link>
                  <Link href="/"><FaWhatsapp className="w-6 h-6 text-gray-500" /></Link>
               </div>
            </div>
         </div>
         <nav className="sm:px-4 py-5 ">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
               <div className="text-3xl xl:text-4xl cursor-pointer inline-flex items-center text-amber-800">
                  <ScrollLink to="home" smooth={true} duration={500} >
                     EstateEase
                  </ScrollLink>
               </div>
               <div className="lg:hidden" onClick={handleMenuClick}>
                  {showMenu ? (
                     <svg
                        className="h-6 w-6 text-black cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fillRule="evenodd"
                           d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
                           clipRule="evenodd"
                        />
                     </svg>
                  ) : (
                     <svg
                        className="h-6 w-6 text-black cursor-pointer"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                     >
                        <path
                           fillRule="evenodd"
                           d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                           clipRule="evenodd"
                        />
                     </svg>
                  )}
               </div>
               <ul className="hidden lg:flex lg:gap-5">
                  <li className={`hover:text-amber-800 font-semibold border-b-2  hover:border-b-amber-800 ${isScrolled ? "border-b-white" : "border-gradient-to-b from-white to-gray-400"}`}>
                     <ScrollLink to="home" smooth={true} duration={500}>
                        Home
                     </ScrollLink>
                  </li>
                  <li className={`hover:text-amber-800 font-semibold border-b-2  hover:border-b-amber-800 ${isScrolled ? "border-b-white" : "border-gradient-to-b from-white to-gray-400"}`}>
                     <ScrollLink to="about" smooth={true} duration={500}>
                        About Us
                     </ScrollLink>
                  </li>
                  <li className={`hover:text-amber-800 font-semibold border-b-2  hover:border-b-amber-800 ${isScrolled ? "border-b-white" : "border-gradient-to-b from-white to-gray-400"}`}>
                     <ScrollLink to="feature" smooth={true} duration={500}>
                        Our Features
                     </ScrollLink>
                  </li>
                  <li className={`hover:text-amber-800 font-semibold border-b-2  hover:border-b-amber-800 ${isScrolled ? "border-b-white" : "border-gradient-to-b from-white to-gray-400"}`}>
                     <ScrollLink to="sale" smooth={true} duration={500}>
                        On Sale
                     </ScrollLink>
                  </li>
                  <li className={`hover:text-amber-800 font-semibold border-b-2  hover:border-b-amber-800 ${isScrolled ? "border-b-white" : "border-gradient-to-b from-white to-gray-400"}`}>
                     <ScrollLink to="service" smooth={true} duration={500}>
                        Our Services
                     </ScrollLink>
                  </li>
                  <li className={`hover:text-amber-800 font-semibold border-b-2  hover:border-b-amber-800 ${isScrolled ? "border-b-white" : "border-gradient-to-b from-white to-gray-400"}`}>
                     <ScrollLink to="demo" smooth={true} duration={500}>
                        Demo
                     </ScrollLink>
                  </li>
                  <li className={`hover:text-amber-800 font-semibold border-b-2  hover:border-b-amber-800 ${isScrolled ? "border-b-white" : "border-gradient-to-b from-white to-gray-400"}`}>
                     <ScrollLink to="client" smooth={true} duration={500}>
                        Our Clients
                     </ScrollLink>
                  </li>

               </ul>
               <div className="hidden lg:flex">

                  <button className="px-4 py-2 bg-amber-700 text-white rounded-md hover:bg-amber-900 hover:text-white mx-2">
                     <ScrollLink to="contact" smooth={true} duration={500}>
                        Contact Us
                     </ScrollLink>
                  </button>
               </div>
               <div className={`${showMenu ? "flex" : "hidden"} 
               lg:hidden flex flex-col bg-amber-800 text-white w-full absolute top-16 left-0 z-10`}>
                  <ScrollLink
                     to="home"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     Home
                  </ScrollLink>
                  <ScrollLink
                     to="about"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     About Us
                  </ScrollLink>
                  <ScrollLink
                     to="feature"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     Our Features
                  </ScrollLink>
                  <ScrollLink
                     to="sale"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     On Sale
                  </ScrollLink>
                  <ScrollLink
                     to="service"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     Our Services
                  </ScrollLink>
                  <ScrollLink
                     to="demo"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     Demo
                  </ScrollLink>
                  <ScrollLink
                     to="client"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     Our Clients
                  </ScrollLink>
                  <ScrollLink
                     to="contact"
                     smooth={true}
                     duration={500}
                     className="p-4 hover:bg-gray-700 cursor-pointer"
                     onClick={handleMenuClick}
                  >
                     Contact Us
                  </ScrollLink>
               </div>
            </div>
         </nav>
      </div>
   );
};
export default Navbar;