import React, { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    // If we’re not on the home page, go there first
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100); // small delay to let page render
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="bg-blue-300 text-black fixed top-0 z-50 w-full shadow-md overflow-x-hidden">
      <div className="max-w-[2000px] mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between py-3">
          <img
            src="GamefLogo.png"
            className="h-6 w-auto hover:scale-150 transition-transform duration-300"
            alt="Gamef"
          />

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 text-base font-medium">
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection("blog")} className="hover:text-blue-600">Media</button>
            <button onClick={() => scrollToSection("programs")} className="hover:text-blue-600">Programs</button>
            <button onClick={() => scrollToSection("Services")} className="hover:text-blue-600">Services</button>
            <button onClick={() => scrollToSection("contact-us")} className="hover:text-blue-600">Contact</button>
            <button onClick={() => scrollToSection("more")} className="hover:text-blue-600">More</button>
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
            <button onClick={() => scrollToSection("home")} className="hover:text-blue-600">Home</button>
            <button onClick={() => scrollToSection("blog")} className="hover:text-blue-600">Media</button>
            <button onClick={() => scrollToSection("programs")} className="hover:text-blue-600">Programs</button>
            <button onClick={() => scrollToSection("Services")} className="hover:text-blue-600">Services</button>
            <button onClick={() => scrollToSection("contact-us")} className="hover:text-blue-600">Contact</button>
            <button onClick={() => scrollToSection("more")} className="hover:text-blue-600">More</button>
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
