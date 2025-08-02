import React from 'react';
import { motion } from 'framer-motion';
import { FaYoutube, FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Media() {
  return (
    <div className="bg-black flex flex-col justify-center items-center px-6 sm:px-8 md:px-12 gap-8 md:gap-16 py-10 pt-20 text-white pb-30">
      <motion.h1
        initial={{ y: +100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className='text-3xl sm:text-4xl md:text-5xl font-bold pb-6 text-center'
      >
        Our Media Presence
      </motion.h1>

      <div className='flex flex-row flex-wrap justify-center items-center gap-6'>
        <div className="relative group">
          <motion.img
            src="speaking.jpg"
            alt="media"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-2xl object-cover shadow-2xl z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-120 md:w-140"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button className="text-white bg-red-600 hover:bg-red-700 p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <FaYoutube className="text-2xl sm:text-3xl" />
            </button>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            src="media.jpg"
            alt="robotics"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-2xl object-cover shadow-2xl z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-120 md:w-80"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button className="bg-black hover:bg-gray-800 p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <FaTiktok className="text-2xl sm:text-3xl text-white" />
            </button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
            <div className="relative group">
          <motion.img
            src="babyboy.jpg"
            alt="robotics"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-2xl object-cover shadow-2xl z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-55 md:w-55"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button className="bg-blue-600 hover:bg-blue-700 p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <FaFacebookF className="text-2xl sm:text-3xl text-white" />
            </button>
          </div>
        </div>
        <div className="relative group">
          <motion.img
            src="school.jpg"
            alt="robotics"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="rounded-2xl object-cover shadow-2xl z-10 h-48 w-48 sm:h-64 sm:w-64 md:h-55 md:w-55"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <button className="bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 p-4 rounded-full shadow-lg transition-transform transform group-hover:scale-110">
              <FaInstagram className="text-2xl sm:text-3xl text-white" />
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Media;