import React from "react";
import { motion } from "framer-motion";

function Aboutme() {
  return (
    <div className="flex flex-col items-center justify-center bg-white px-4 sm:px-8 md:px-12 py-10 gap-8 md:gap-16 overflow-x-hidden">
      
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl md:text-6xl font-bold text-center sm:text-left"
      >
        About Us
      </motion.h1>

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base md:text-lg mt-4 leading-relaxed text-justify max-w-4xl"
      >
        Gauteng Men’s Federation (GAMEF) was established in 2012 and officially registered as a non-profit organization under the NPO Act of 1997 with the National Department of Social Development. On 12 March 2014, the organization proudly adopted its current name — GAMEF.
        <br /><br />
        GAMEF exists to confront the pressing challenges faced by men and boys today. These include depression, anxiety, gender-based violence, suicide, and alcohol or substance abuse. But beyond that, we serve as a bridge to the next generation — creating pathways to healing, personal growth, and meaningful support through access to vital resources and community-driven programs.
      </motion.p>

      {/* 9-Image Scrollable Strip */}
      <div className="w-full overflow-x-auto flex justify-start sm:justify-center items-end mt-10 px-2 sm:px-0">
        <div className="flex flex-nowrap gap-4">
          {[
            "worker.jpg", "school.jpg", "babyboy.jpg", "groups2.jpg", "speaking.jpg",
            "speaking3.jpg", "media.jpg", "groups.jpg", "health.jpg",
          ].map((src, index) => {
            const sizeClasses = [
              "w-12 h-12 sm:w-16 sm:h-16",
              "w-16 h-16 sm:w-20 sm:h-20",
              "w-20 h-20 sm:w-24 sm:h-24",
              "w-24 h-24 sm:w-28 sm:h-28",
              "w-28 h-28 sm:w-32 sm:h-32",
              "w-24 h-24 sm:w-28 sm:h-28",
              "w-20 h-20 sm:w-24 sm:h-24",
              "w-16 h-16 sm:w-20 sm:h-20",
              "w-12 h-12 sm:w-16 sm:h-16",
            ];

            return (
              <motion.img
                key={src}
                src={src}
                alt={`image-${index + 1}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                className={`rounded-3xl object-cover transition-transform duration-300 ${sizeClasses[index]} shadow-md`}
              />
            );
          })}
        </div>
      </div>

      {/* Closing Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-sm sm:text-base md:text-lg mt-6 text-justify max-w-3xl"
      >
        Join us. Let’s build a generation of men who lead with strength, kindness, and courage.
      </motion.p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mt-6 w-full sm:w-auto px-4">
        {["Contact Us", "Register", "Contribute"].map((label, index) => (
          <motion.button
            key={label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            className="w-full sm:w-auto px-5 py-2 bg-gradient-to-r from-blue-700 to-cyan-600 text-white font-semibold rounded-2xl hover:scale-105 transition"
          >
            {label}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default Aboutme;
