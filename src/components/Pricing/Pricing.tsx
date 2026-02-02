"use client";

import React from 'react';
import { motion } from 'framer-motion';
import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <motion.div 
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.2 // Creates the "wave" entrance effect
                    }
                }
            }}
        >
            {tiers.map((tier, index) => (
                <motion.div
                    key={tier.name}
                    variants={{
                        hidden: { opacity: 0, y: 30 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
                    }}
                >
                    <PricingColumn 
                        tier={tier} 
                        highlight={index === 1} 
                    />
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Pricing;