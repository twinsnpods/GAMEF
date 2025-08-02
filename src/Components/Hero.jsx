import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className="bg-white flex flex-col md:flex-row md:gap-x-20 ustify-center items-center px-6 sm:px-8 lg:px-12 gap-10 md:gap-16 py-10 pt-20">
      {/* Text Content */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col justify-center items-start text-black max-w-2xl text-center md:text-left gap-4 md:ml-25 md:gap-x-20"
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold pb-4 sm:pb-6 ">
          Empowering Every Man and Boy in Gauteng
        </h1>
        <h2 className="text-lg sm:text-2xl md:text-4xl mt-2 font-medium">
          Stand Tall. Rise Together. Be Part of the Movement.
        </h2>
        <p className="text-base sm:text-lg md:text-xl mt-4 leading-relaxed text-justify">
          We are a non-profit organization rooted in the heart of Gauteng, driven by a bold mission: To uplift, support, and empower all men and boys — from every walk of life.
          Whether you’re a young boy finding your voice or a man seeking purpose, we’re here for you. We offer resources, mentorship, and opportunities that help you grow stronger — mentally, emotionally, and socially.
        </p>
      </motion.div>

      {/* Images Container */}
      <div className="relative w-full max-w-[22rem] sm:max-w-[28rem] md:max-w-[32rem] h-[24rem] sm:h-[28rem] md:h-[32rem] flex items-center justify-center">
        {/* Main Image */}
        <motion.img
          src="babyboy.jpg"
          alt="Main"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-full object-cover shadow-2xl z-10 
                     h-44 w-44 sm:h-64 sm:w-64 md:h-72 md:w-72"
        />

        {/* Small Images - Absolute Positioned */}
        {/* Top-left */}
        <motion.img
          src="worker.jpg"
          alt="Young Man"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5}}
          className="absolute rounded-full shadow-md border-4 border-white
                     h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24
                     top-2 left-2"
        />

        {/* Mid-left */}
        <motion.img
          src="school.jpg"
          alt="School"
          initial={{ opacity: 0, x: -30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute rounded-full shadow-md border-4 border-white
                     h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20
                     top-1/3 left-0"
        />

        {/* Bottom-left */}
        <motion.img
          src="groups.jpg"
          alt="Groups"
          initial={{ opacity: 0, x: -20, y: 40 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute rounded-full shadow-md border-4 border-white
                     h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20
                     bottom-20 left-4"
        />

        {/* Bottom-center */}
        <motion.img
          src="mental.jpg"
          alt="Mental Health"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute rounded-full shadow-md border-4 border-white
                     h-10 w-10 sm:h-14 sm:w-14 md:h-16 md:w-16
                     bottom-0 left-1/2 transform -translate-x-1/2"
        />
      </div>
    </div>
  );
}

export default Hero;
