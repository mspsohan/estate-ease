"use client"
// import { Link } from "react-scroll";
import { RxDoubleArrowUp } from "react-icons/rx";

import { useEffect, useState } from "react";

const Footer = () => {
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

  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <>
      <footer className="bg-amber-800 relative">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <nav className="-mx-5 -my-2 flex flex-wrap justify-center">
            <div className="px-5 py-2">
              {/* <h3 className="text-xl text-white font-bold hover:text-gray-300 cursor-pointer">
                EstateEase
              </h3> */}
            </div>
            <div className="px-5 py-2 cursor-pointer">
              {/* <Link to="home" activeClassName="active"
              spy={true}
              smooth={true}
              offset={50}
              duration={500} className="text-white hover:text-gray-300">
              Home
            </Link> */}
            </div>
            {/* <div className="px-5 py-2 cursor-pointer">
            <Link to="feature" className="text-white hover:text-gray-300">
              Features
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="client" className="text-white hover:text-gray-300">
              Clients
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="about" className="text-white hover:text-gray-300">
              About Us
            </Link>
          </div>
          <div className="px-5 py-2 cursor-pointer">
            <Link to="contact" className="text-white hover:text-gray-300">
              Contact Us
            </Link>
          </div> */}

          </nav>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="col-span-1">
              <h3 className="text-2xl text-white font-bold hover:text-gray-300 cursor-pointer mb-5">
                Estate<span className="text-green-500">Ease</span>
              </h3>
              <p className="text-white mb-4">Real Estate Company is a leading provider of real estate services, with a focus on delivering exceptional value to our clients. Our team of experts has deep industry knowledge and a proven track record of success.</p>

            </div>
            <div className="col-span-1">
              <h3 className="text-white text-lg font-medium mb-4">Services</h3>
              <ul className="text-white">
                <li className="mb-2">Residential Real Estate</li>
                <li className="mb-2">Commercial Real Estate</li>
                <li className="mb-2">Property Management</li>
                <li className="mb-2">Real Estate Investing</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-white text-lg font-medium mb-4">Social links</h3>
              <ul className="text-white">
                <li className="mb-2">Facebook</li>
                <li className="mb-2">Instagram</li>
                <li className="mb-2">LinkedIn</li>

              </ul>
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <p className="text-base text-white">&copy; 2024 EstateEase - Real Estate Company. All rights reserved.</p>
          </div>
        </div>

        <button onClick={scrollToTop} className={`${isScrolled ? "fixed" : "hidden"} duration-700 -translate-y-2 bottom-3 right-2 font-bold text-2xl rounded bg-amber-800 p-2 text-white border-white border-2`}>
          <RxDoubleArrowUp />
        </button>
      </footer>
    </>
  );
};
export default Footer;