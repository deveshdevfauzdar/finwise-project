"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import AppStoreButton from './AppStoreButton';
import PlayStoreButton from './PlayStoreButton';

import { heroDetails } from '@/data/hero';

const Hero: React.FC = () => {
    // Animation variants for children components
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 overflow-hidden"
        >
            {/* Background Grid Pattern */}
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            {/* Aesthetic Blur Gradient */}
            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <motion.div 
                className="text-center"
                initial="hidden"
                animate="visible"
                variants={{
                    visible: { transition: { staggerChildren: 0.2 } } // Delays each child's entry
                }}
            >
                {/* Heading Animation */}
                <motion.h1 
                    variants={fadeInUp}
                    className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-2xl mx-auto"
                >
                    {heroDetails.heading}
                </motion.h1>

                {/* Subheading Animation */}
                <motion.p 
                    variants={fadeInUp}
                    className="mt-4 text-foreground max-w-lg mx-auto opacity-80"
                >
                    {heroDetails.subheading}
                </motion.p>

                {/* Button Container with Hover Effects */}
                <motion.div 
                    variants={fadeInUp}
                    className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto"
                >
                    <div className="transition-transform duration-300 hover:scale-105 active:scale-95">
                        <AppStoreButton dark />
                    </div>
                    <div className="transition-transform duration-300 hover:scale-105 active:scale-95 mt-4 sm:mt-0">
                        <PlayStoreButton dark />
                    </div>
                </motion.div>

                {/* Mockup Image Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: "circOut" }}
                >
                    <Image
                        src={heroDetails.centerImageSrc}
                        width={384}
                        height={340}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 384px"
                        priority={true}
                        unoptimized={true}
                        alt="app mockup"
                        className='relative mt-12 md:mt-16 mx-auto z-10 transition-transform duration-500 hover:scale-[1.02]'
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;