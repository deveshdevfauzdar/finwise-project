"use client";

import React from 'react';
import { motion } from 'framer-motion';
import BenefitSection from "./BenefitSection";
import { benefits } from "@/data/benefits";

const Benefits: React.FC = () => {
    return (
        <div id="features" className="overflow-hidden">
            <h2 className="sr-only">Features</h2>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    visible: { transition: { staggerChildren: 0.3 } }
                }}
            >
                {benefits.map((item, index) => (
                    <BenefitSection 
                        key={index} 
                        benefit={item} 
                        imageAtRight={index % 2 !== 0} 
                    />
                ))}
            </motion.div>
        </div>
    );
}

export default Benefits;