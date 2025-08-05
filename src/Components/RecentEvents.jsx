import React from "react";
import { motion } from "framer-motion";

function RecentEvents() {
  return (
    <div className="bg-blue-400 text-black flex flex-col justify-center items-center gap-20 px-6 md:px-20 py-10 overflow-x-hidden pt-20">
      <motion.h1
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold  text-center"
      >
        Recent Events
      </motion.h1>

      <motion.h1
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl sm:text-3xl md:text-4xl font-semibold  text-center"
      >
        Want to Get Involved?
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        <div className="relative ml-8 mb-8">
  <motion.img
    src="speaking2.webp"
    alt="pe"
    initial={{ scale: 0.8, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1 }}
    className="rounded-full object-cover shadow-2xl z-10 
               h-48 w-48 sm:h-64 sm:w-64 md:h-120 md:w-120 border-2 border-white"
  />
  <img
    src="speaking.webp"  // Replace with your small image file name
    alt="corner"
    className="absolute bottom-2 right-2 w-12 h-12 sm:w-32 sm:h-32 border-2 border-white rounded-full object-cover shadow-md"
  />
</div>


        <div className="flex flex-col gap-6 text-center md:text-left max-w-xl">
          <motion.h1
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold"
          >
            Public Speaking Event
          </motion.h1>

          <motion.p
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-base sm:text-lg md:text-xl leading-relaxed font-semibold"
          >
            <strong>Our Outreach:</strong> As GAMEF representatives, we are often invited
            to speak at schools, faith-based gatherings, and community events to promote
            leadership, personal development, and social responsibility.
            <br /><br />
            Through these engagements, we empower men and boys to become agents of change,
            raise awareness about mental health and gender-based violence, and encourage
            positive masculinity. These platforms also help us build meaningful partnerships
            and expand the impact of our mission across Gauteng.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default RecentEvents;
