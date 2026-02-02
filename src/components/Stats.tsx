"use client";

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { stats } from "@/data/stats";

// Sub-component to handle the animated counting logic
const Counter = ({ value }: { value: string }) => {
    const [displayValue, setDisplayValue] = useState("0");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (isInView) {
            // Extract the number and any suffix (like + or %)
            const numericPart = parseFloat(value.replace(/[^0-9.]/g, ''));
            const suffix = value.replace(/[0-9.]/g, '');

            const controls = animate(0, numericPart, {
                duration: 2,
                ease: "easeOut",
                onUpdate: (latest) => {
                    // Handle decimals (e.g., 5.0) vs integers (e.g., 2000)
                    const formatted = numericPart % 1 === 0 
                        ? Math.floor(latest).toString() 
                        : latest.toFixed(1);
                    setDisplayValue(formatted + suffix);
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value]);

    return <span ref={ref}>{displayValue}</span>;
};

const Stats: React.FC = () => {
    return (
        <section id="stats" className="py-10 lg:py-20 overflow-hidden">
            <motion.div 
                className="grid sm:grid-cols-3 gap-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                {stats.map((stat, index) => (
                    <motion.div 
                        key={stat.title} 
                        className="text-center sm:text-left max-w-md sm:max-w-full mx-auto group"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <h3 className="mb-5 flex items-center gap-2 text-3xl md:text-4xl font-bold justify-center sm:justify-start text-foreground transition-colors group-hover:text-secondary">
                            <span className="text-secondary scale-110 transition-transform duration-300 group-hover:rotate-12">
                                {stat.icon}
                            </span>
                            <Counter value={stat.title} />
                        </h3>
                        <p className="text-foreground-accent leading-relaxed">
                            {stat.description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Stats;