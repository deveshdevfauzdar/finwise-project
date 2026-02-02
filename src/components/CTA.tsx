"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ctaDetails } from "@/data/cta";

import AppStoreButton from "./AppStoreButton";
import PlayStoreButton from "./PlayStoreButton";

const CTA: React.FC = () => {
    return (
        <section id="cta" className="mt-10 mb-5 lg:my-24 px-5">
            {/* Main Animated Container */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative h-full w-full z-10 mx-auto py-16 sm:py-24 overflow-hidden rounded-[2.5rem] shadow-2xl"
            >
                {/* Dynamic Background with breathing animation */}
                <div className="absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3] 
                        }}
                        transition={{ 
                            duration: 8, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                        }}
                        className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_50%_50%,#1C1C02,transparent)]"
                    />
                </div>

                <div className="h-full flex flex-col items-center justify-center text-white text-center px-6 relative z-10">
                    {/* Animated Heading */}
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-6xl md:leading-tight font-bold mb-6 max-w-3xl manrope"
                    >
                        {ctaDetails.heading}
                    </motion.h2>

                    {/* Animated Subheading */}
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="mx-auto max-w-xl text-lg text-gray-300 leading-relaxed"
                    >
                        {ctaDetails.subheading}
                    </motion.p>

                    {/* Animated Buttons with Hover Scaling */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
                    >
                        <div className="w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
                            <AppStoreButton />
                        </div>
                        <div className="w-full sm:w-auto transition-transform hover:scale-105 active:scale-95">
                            <PlayStoreButton />
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};

export default CTA;