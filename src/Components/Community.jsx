import React from "react";
import { motion } from "framer-motion";
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
                    className="text-lg sm:text-xl md:text-2xl font-medium pb-6 text-center max-w-[1600px] "
                  >
                    We provide a range of programs and support services designed to uplift, empower, and meet the unique needs of our members.
            </motion.p>
            <section id="home" className="bg-blue-400 text-black flex flex-col items-center justify-center py-16 px-4 ">
      <div className="flex flex-col md:flex-row gap-12 items-stretch justify-center w-full max-w-6xl ">
        
        {/* Card 1 */}
        <div className="flex flex-col justify-between text-center p-6 border-2 border-gray-300 rounded-full shadow-2xl bg-blue-200 flex-1">
          <div>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Motlokwa Dental Studio offers expert, compassionate care in a welcoming environment. 
              From checkups to advanced treatments, we keep your smile healthy.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between text-center p-6 border-2 border-gray-300 rounded-full shadow-2xl bg-blue-200 flex-1">
          <div>
            <p className="text-base sm:text-lg text-gray-700 mb-6">
              Receive high-quality dental treatment from our skilled professionals at Motlokwa Dental Studio, where your health, 
              comfort, and smile come first. We are dedicated to providing personalized care in a welcoming environment.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center text-center p-6 border-2 border-gray-300 rounded-full shadow-2xl bg-blue-200 flex-1">
          <p className="text-base sm:text-lg text-gray-700">
            Your comfort comes first at Motlokwa Dental Studio. We provide personalized dental care for a lifetime of healthy, beautiful smiles.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center text-center p-6 border-2 border-gray-300 rounded-full shadow-2xl bg-blue-200 flex-1">
          <p className="text-base sm:text-lg text-gray-700">
            Your comfort comes first at Motlokwa Dental Studio. We provide personalized dental care for a lifetime of healthy, beautiful smiles.
          </p>
        </div>

      </div>
    </section>
        </div>
    )
}

export default Community;