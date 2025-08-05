import React from "react";
import { motion } from "framer-motion";

function Upcoming() {
  return (
    <div className="bg-white text-black flex flex-col justify-center items-center gap-10 px-6 md:px-20 py-10 overflow-x-hidden pt-20 max-w-[1200px] mx-auto">
      
      <motion.h1
        initial={{ y: +100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6 text-center max-w-[900px]"
      >
        Be Part of Our Programs
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-lg sm:text-xl md:text-2xl font-medium pb-6 text-center max-w-[800px]"
      >
        Stay informed and get involved — our latest programs and event announcements will always be featured here.
      </motion.p>

      {/* Wrap image in a full-width div to override max-width container */}
      <div className="w-full px-0 md:px-0">
        <motion.img
          src="Loading.webp"
          alt="robotics"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full rounded-md shadow-2xl object-cover aspect-[16/9]"
        />
      </div>

      <motion.h1
        initial={{ y: +100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6 text-center max-w-[900px]"
      >
        Public Speaking Moments
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5}}
        className="text-lg sm:text-xl md:text-2xl font-medium pb-6 text-center max-w-[1600px]"
      >
        As representatives of Gamef, we have had the honor of being invited to a variety of events to discuss the significance of leadership, personal development, and the responsibilities that individuals must uphold within society. Our engagements have included presentations at educational institutions, places of worship, and various organizations, where we have the opportunity to share our insights and experiences with young audiences, while actively participating in the events organized by these entities.
      </motion.p>
    </div>
  );
}

export default Upcoming;
