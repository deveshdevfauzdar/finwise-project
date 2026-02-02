"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="py-10 lg:py-20 overflow-hidden">
            <div className="flex flex-col lg:flex-row gap-10">
                {/* Left Side: Header Info */}
                <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/3"
                >
                    <p className="hidden lg:block text-foreground-accent font-semibold tracking-widest text-sm mb-4">FAQ&apos;S</p>
                    <SectionTitle>
                        <h2 className="my-3 !leading-snug text-center lg:text-left text-3xl md:text-4xl font-bold">
                            Frequently Asked Questions
                        </h2>
                    </SectionTitle>
                    <p className="lg:mt-10 text-foreground-accent text-center lg:text-left">
                        Ask us anything!
                    </p>
                    <a href="mailto:help@finwise.com" className="mt-3 block text-xl lg:text-3xl text-secondary font-bold hover:text-foreground transition-colors text-center lg:text-left underline-offset-8 hover:underline">
                        help@finwise.com
                    </a>
                </motion.div>

                {/* Right Side: Animated Accordion */}
                <div className="w-full lg:max-w-2xl mx-auto">
                    {faqs.map((faq, index) => (
                        <motion.div 
                            key={index} 
                            className="mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <Disclosure>
                                {({ open }) => (
                                    <div className={`border rounded-2xl transition-all duration-300 ${open ? 'bg-gray-50/50 border-secondary/30 shadow-sm' : 'border-gray-100 hover:border-gray-200'}`}>
                                        <DisclosureButton className="flex items-center justify-between w-full px-6 py-6 text-left group">
                                            <span className={`text-lg md:text-xl font-semibold transition-colors ${open ? 'text-foreground' : 'text-foreground/80 group-hover:text-foreground'}`}>
                                                {faq.question}
                                            </span>
                                            <div className={`p-2 rounded-full transition-transform duration-300 ${open ? 'bg-secondary text-white rotate-180' : 'bg-gray-100 text-secondary'}`}>
                                                {open ? <BiMinus className="w-5 h-5" /> : <BiPlus className="w-5 h-5" />}
                                            </div>
                                        </DisclosureButton>

                                        <AnimatePresence>
                                            {open && (
                                                <DisclosurePanel static>
                                                    {/* Move motion logic here to avoid prop collision with Headless UI */}
                                                    <motion.div
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="px-6 pb-6 text-foreground-accent leading-relaxed text-base md:text-lg">
                                                            {faq.answer}
                                                        </div>
                                                    </motion.div>
                                                </DisclosurePanel>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}
                            </Disclosure>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;