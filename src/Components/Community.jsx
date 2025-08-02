import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  ShieldCheck,
  HeartPulse,
  School,
} from "lucide-react"; // Lucide icons

function Community() {
  return (
    <div className="bg-blue-400 flex flex-col justify-center items-center px-6 sm:px-10 md:px-16 gap-12 py-20 text-black">
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
        transition={{ duration: 2 }}
        className="text-lg sm:text-xl md:text-2xl font-medium pb-6 text-center max-w-[1600px]"
      >
        We provide a range of programs and support services designed to uplift,
        empower, and meet the unique needs of our members.
      </motion.p>

      <section
        id="home"
        className="bg-blue-400 text-black flex flex-col items-center justify-center py-16 px-4"
      >
        <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center w-full max-w-6xl">

          {/* Card 1 */}
          <div className="relative overflow-visible flex flex-col justify-between text-center p-6 border-2 border-gray-400 rounded-2xl shadow-2xl bg-blue-200 flex-1">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-2 right-2 z-10 text-blue-900"
            >
              <Users size={48} />
            </motion.div>
            <p className="text-base sm:text-lg text-gray-700 mb-6 mt-6">
              Building Men’s Networks and Forums
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative overflow-visible flex flex-col justify-between text-center p-6 border-2 border-gray-400 rounded-2xl shadow-2xl bg-blue-200 flex-1">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-2 right-2 z-10 text-blue-900"
            >
              <ShieldCheck size={48} />
            </motion.div>
            <p className="text-base sm:text-lg text-gray-700 mb-6 mt-6">
              Empowering Change: Tackling Violence and Substance Abuse
            </p>
          </div>

          {/* Card 3 */}
          <div className="relative overflow-visible flex flex-col items-center text-center p-6 border-2 border-gray-400 rounded-2xl shadow-2xl bg-blue-200 flex-1">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-2 right-2 z-10 text-blue-900"
            >
              <HeartPulse size={48} />
            </motion.div>
            <p className="text-base sm:text-lg text-gray-700 mb-6 mt-6">
              Strength in Health: Men’s Wellness Program
            </p>
          </div>

          {/* Card 4 */}
          <div className="relative overflow-visible flex flex-col items-center text-center p-6 border-2 border-gray-400 rounded-2xl shadow-2xl bg-blue-200 flex-1">
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className="absolute bottom-2 right-2 z-10 text-blue-900"
            >
              <School size={48} />
            </motion.div>
            <p className="text-base sm:text-lg text-gray-700 mb-6 mt-6">
              Empowering the Boy Child Through Male Role Models
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}

export default Community;
