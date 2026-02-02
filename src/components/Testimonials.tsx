"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { testimonials } from '@/data/testimonials';
import { BiSolidQuoteLeft } from 'react-icons/bi';

const Testimonials: React.FC = () => {
    // Animation variants for the card entrance
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.7, ease: "easeOut" } 
        }
    };

    return (
        <motion.div 
            className="grid gap-8 max-w-lg w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-full overflow-visible py-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
        >
            {testimonials.map((testimonial, index) => (
                <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{ y: -8 }}
                    className="relative p-8 rounded-[2rem] bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                >
                    {/* Aesthetic Quote Icon */}
                    <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <BiSolidQuoteLeft className="w-10 h-10 text-secondary" />
                    </div>

                    <div className="flex items-center mb-6 w-full justify-center lg:justify-start">
                        <div className="relative">
                            <Image
                                src={testimonial.avatar}
                                alt={`${testimonial.name} avatar`}
                                width={56}
                                height={56}
                                className="rounded-2xl shadow-sm object-cover border-2 border-white"
                            />
                            {/* Decorative element behind avatar */}
                            <div className="absolute -inset-1 bg-secondary/20 rounded-2xl -z-10 group-hover:scale-110 transition-transform" />
                        </div>
                        <div className="ml-4">
                            <h3 className="text-lg font-bold text-foreground leading-tight">
                                {testimonial.name}
                            </h3>
                            <p className="text-sm font-medium text-secondary">
                                {testimonial.role}
                            </p>
                        </div>
                    </div>

                    <p className="text-foreground-accent leading-relaxed italic text-center lg:text-left">
                        &quot;{testimonial.message}&quot;
                    </p>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Testimonials;