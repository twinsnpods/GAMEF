import React from "react";
import { motion } from "framer-motion";
import {
  CircleQuestionMark,
  Ampersand,
  BookA,
} from "lucide-react";

function Questions() {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      
      {/* Left Column (Black Background with Icons) */}
      <div className="flex flex-col bg-black items-center sm:items-start px-6 sm:px-10 py-10 sm:w-1/2">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center sm:text-left mb-10"
        >
          Looking for Answers? See Our FAQ Section
        </motion.h1>
            <CircleQuestionMark className="size-20 text-white items-center ml-20 mt-20"/>
            <Ampersand className="size-15 text-white text-center ml-30 mt-15"/>
            <BookA className="size-15 text-white text-center ml-40 mt-15"/>
      </div>

      {/* Right Column (Text Section) */}
      <div className="flex flex-col bg-gray-200 p-6 sm:p-10 sm:w-1/2">
        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4"
        >
          Reflecting on Life, Growth, and Well-being?
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-4"
        >
          Sometimes, life feels like a winding path — unpredictable and full of contrast. We move forward, balancing freedom with responsibility, and comfort with challenge.
        </motion.p>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4"
        >
          Are we truly connected to what matters most, or are we caught in the noise of daily life?
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-4"
        >
          Growth requires discomfort. It’s in the moments of pressure and uncertainty that we discover strength. Like a seed breaking through the soil, we, too, must stretch and endure to rise.
        </motion.p>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4"
        >
          Does indulgence, like too much chocolate, sometimes lead to unexpected consequences?
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-4"
        >
          Pain and love often walk side by side. In our relationships, our health, and our choices, we feel the tension between what we want and what we need. True transformation lies in navigating that tension with intention and care.
        </motion.p>

        <motion.h1
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-400 mb-4"
        >
          Are we paying attention to the signs our bodies and minds are giving us?
        </motion.h1>

        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-4"
        >
          Every decision shapes our journey. Whether we seek comfort or choose challenge, we grow. The discomfort we avoid today might be the lesson we need for tomorrow.
        </motion.p>
      </div>
    </div>
  );
}

export default Questions;
