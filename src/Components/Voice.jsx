import React from "react";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

function Voice() {
  return (
    <div className="bg-black flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 gap-12 py-20 text-white">
      
      {/* Heading */}
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center max-w-4xl"
      >
        Our Voice in the Community
      </motion.h1>

      {/* Full-Width Film Style Image */}
      <div className="relative w-full max-w-7xl overflow-hidden rounded-2xl shadow-2xl aspect-[16/9]">
        <motion.img
          src="SouthAfrica.jpg"
          alt="media"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 hover:bg-red-700 p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110"
          >
            <FaYoutube className="text-white text-2xl sm:text-3xl" />
          </a>
        </div>
      </div>

      {/* Description Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-lg sm:text-xl md:text-2xl font-medium text-center leading-relaxed max-w-5xl px-2"
      >
        As representatives of <strong>GAMEF</strong>, we’ve had the privilege of being invited to a range of events where we speak on the importance of leadership, personal growth, and the vital role individuals play in shaping a responsible society.
        <br /><br />
        Our outreach includes presentations at schools, places of worship, and community organizations, where we engage directly with young people and broader audiences. These platforms allow us to share our experiences, inspire change, and actively contribute to initiatives that align with our mission to empower and uplift men and boys across Gauteng.
      </motion.p>
    </div>
  );
}

export default Voice;
