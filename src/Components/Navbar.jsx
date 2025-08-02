import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-300 text-black fixed top-0 z-50 w-full shadow-md overflow-x-hidden">
      <div className="max-w-[2000px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <img
            src="GamefLogo.png"
            className="h-6 w-auto hover:scale-150 transition-transform duration-300"
            alt="Gamef"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-base font-medium">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#blog" className="hover:text-blue-600">Media</a>
            <a href="#treatments" className="hover:text-blue-600">Programs</a>
            <a href="#about-us" className="hover:text-blue-600">Services</a>
            <a href="#contact-us" className="hover:text-blue-600">Contact</a>
            <a href="#more" className="hover:text-blue-600">More</a>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-4 py-2 rounded-full hover:scale-105 transition">
              Get Started <FaArrowRight />
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 text-base font-medium px-4 pb-6 pt-2 bg-blue-200 rounded-b-lg transition-all duration-300">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#blog" className="hover:text-blue-600">Media</a>
            <a href="#treatments" className="hover:text-blue-600">Programs</a>
            <a href="#about-us" className="hover:text-blue-600">Services</a>
            <a href="#contact-us" className="hover:text-blue-600">Contact</a>
            <a href="#more" className="hover:text-blue-600">More</a>
            <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white px-4 py-2 rounded-full hover:scale-105 transition">
              Get Started <FaArrowRight />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
