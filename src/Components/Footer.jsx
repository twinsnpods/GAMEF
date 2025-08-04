import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <div className="bg-blue-600">
            <div className="flex flex-col md:flex-row w-full">
                
                {/* Address Section */}
                <div className="flex flex-col m-6 md:m-10 flex-1">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold pb-2 text-center md:text-left text-white"
                    >
                        GAMEF
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white"
                    >
                        Mansion House 132 Office 203, Albertina Sisulu Street Johannesburg 2000
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white"
                    >
                        Phone: 076 – 946 – 9668
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white"
                    >
                        Email: info@gamef.co.za
                    </motion.p>
                </div>

                {/* Links Section */}
                <div className="flex flex-col m-6 md:m-10 flex-1">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold pb-2 text-center md:text-left text-white"
                    >
                        LINKS
                    </motion.h1>
                    {['Home', 'About Us', 'Media', 'Programs', 'Events', 'Services', 'Contact Us', 'More'].map((link, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 2 }}
                            className="text-base sm:text-lg md:text-2xl pb-2 text-center md:text-left text-white"
                        >
                            {link}
                        </motion.p>
                    ))}
                </div>

                {/* Social Media Section */}
                <div className="flex flex-col m-6 md:m-10 flex-1">
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-2xl sm:text-3xl md:text-5xl font-bold pb-2 text-center md:text-left text-white"
                    >
                        SOCIAL MEDIA
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2 }}
                        className="flex justify-center md:justify-start gap-6 md:gap-10 pt-4 pb-6 text-white"
                    >
                        <FaEnvelope className="text-2xl sm:text-3xl" />
                        <FaTiktok className="text-2xl sm:text-3xl" />
                        <FaFacebookF className="text-2xl sm:text-3xl" />
                        <FaInstagram className="text-2xl sm:text-3xl" />
                    </motion.div>

                    {/* Google Map */}
                    <div className="w-full">
                        <iframe
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.2220046859726!2d28.0339!3d-26.2041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c6e2a1f0d69%3A0x8d8e0a1f1e9b0e9a!2sJohannesburg!5e0!3m2!1sen!2sza!4v1691422980000!5m2!1sen!2sza"
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
