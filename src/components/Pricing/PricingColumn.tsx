"use client";

import React from 'react';
import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";

import { IPricing } from "@/types";

interface Props {
    tier: IPricing;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }: Props) => {
    const { name, price, features } = tier;

    return (
        <motion.div 
            // Aesthetic Lift and Shadow interaction
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className={clsx(
                "w-full max-w-sm mx-auto bg-white rounded-3xl border transition-all duration-300 group lg:max-w-full", 
                { 
                    "shadow-2xl border-secondary/50 scale-105 z-10": highlight, 
                    "border-gray-100 hover:border-gray-300 shadow-sm hover:shadow-xl": !highlight 
                }
            )}
        >
            {/* Header Section */}
            <div className="p-8 border-b border-gray-100">
                <h3 className="text-xl font-bold mb-2 manrope">{name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                    <span className={clsx("text-4xl md:text-5xl font-black tracking-tight", { "text-secondary": highlight })}>
                        {typeof price === 'number' ? `$${price}` : price}
                    </span>
                    {typeof price === 'number' && <span className="text-gray-500 font-medium">/mo</span>}
                </div>
                
                {/* Responsive Button with Scale Effect */}
                <button className={clsx(
                    "w-full py-4 px-6 rounded-2xl font-bold transition-all duration-300 transform active:scale-95", 
                    { 
                        "bg-foreground text-white hover:bg-black shadow-lg shadow-gray-200": highlight, 
                        "bg-hero-background text-foreground hover:bg-gray-200": !highlight 
                    }
                )}>
                    Get Started
                </button>
            </div>

            {/* Features Section */}
            <div className="p-8">
                <p className="text-xs font-black tracking-[0.2em] text-gray-400 mb-6 uppercase">
                    What&apos;s included
                </p>
                <ul className="space-y-4">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start group/item">
                            <div className="mt-1 mr-3 transition-transform duration-300 group-hover/item:scale-125">
                                <BsFillCheckCircleFill className="h-5 w-5 text-secondary" />
                            </div>
                            <span className="text-foreground-accent font-medium leading-tight">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
}

export default PricingColumn;