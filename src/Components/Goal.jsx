import React from "react";
import { motion } from "framer-motion";

function Goal() {
  return (
    <div className="bg-white flex flex-col justify-center items-center gap-18 px-12 sm:px-6 md:px-12 py-10 overflow-x-hidden ">

      {/* Section 1: Vision */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl gap-x-10">
        <motion.img
          src="groups2.jpg"
          alt="vision"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl object-cover shadow-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-100 md:h-80"
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black text-center md:text-left max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6">Our Vision</h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            To empower, support, and uplift men and boys in Gauteng by addressing mental health challenges, promoting positive masculinity, and offering sustainable solutions to the societal issues that affect their well-being.
            <br /><br />
            We aim to work alongside men's groups and community partners, supporting them as a collective to achieve shared goals. By actively seeking out and collaborating with relevant programs and organizations, we strive to expand our reach and deepen our impact — all in pursuit of building a healthier, more sustainable society for men across South Africa.
          </p>
        </motion.div>
      </div>

      {/* Section 2: Goal */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full max-w-7xl">
        <motion.div
          initial={{ x: +100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black text-center md:text-left max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6">Our Main Goal</h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify ">
            Our goal is to unite the voices of men in Gauteng to stand against gender-based violence and support the social and economic empowerment of vulnerable men, women, and children.
            <br /><br />
            We work closely with affiliated men’s groups and organizations, offering coordination, support, and shared resources to strengthen their impact. By building partnerships and promoting collective action, we aim to create safer, more empowered communities across the province.
          </p>
        </motion.div>

        <motion.img
          src="bricks.jpg"
          alt="goal"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl object-cover shadow-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-100 md:h-80"
        />
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-7xl gap-x-20">
        <motion.img
          src="africa.jpg"
          alt="vision"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl object-cover shadow-2xl w-64 h-64 sm:w-72 sm:h-72 md:w-100 md:h-160"
        />
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black text-center md:text-left max-w-2xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-6">Our Background</h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-justify">
            The Gauteng Men’s Federation (GAMEF) was born out of a men’s consultative conference held in May 2013 in Turffontein, where men’s groups across the province came together to align their efforts with government policies and to shape a unified men’s movement. This initiative was driven by the newly formed Men’s Forum within the Gauteng Department of Social Development (DSD), which initially focused on empowering male staff members and later expanded to engage men in communities.
The conference highlighted the urgent need to involve men in addressing social ills, particularly gender-based violence (GBV), substance abuse, and mental health challenges. Recognizing that traditional gender roles often contribute to these issues, GAMEF promotes positive masculinity and encourages men to be active participants in social change.
In 2015, GAMEF conducted a study to assess the state of men’s organizations across Gauteng, revealing that many lacked coordination and structure. This reinforced the need for a central movement to unite and support these groups. GAMEF continues to lead efforts to strengthen men’s organizations, build social capital, and mobilize men as key agents of transformation in their communities.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Goal;
