"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function TermsPage() {
    return (
        <motion.main 
            // Aesthetic entrance animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="min-h-screen bg-white py-20"
        >
            <Container>
                <Section
                    id="terms-section" // Fixed: Added required ID prop
                    title="Terms & Conditions"
                    description="Last updated: February 2, 2026"
                >
                    <motion.div 
                        // Subtle delay for content to keep the loading "deliberate"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        className="prose prose-slate max-w-none text-foreground-accent space-y-8"
                    >
                        <section className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 transition-colors hover:bg-white hover:border-primary/20">
                            <h3 className="text-2xl font-bold text-foreground mb-4 manrope">1. Agreement to Terms</h3>
                            <p className="leading-relaxed">
                                By accessing or using Finwise services, you agree to be bound by these Terms and Conditions. 
                                If you do not agree, please do not use our platform.
                            </p>
                        </section>

                        <section className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 transition-colors hover:bg-white hover:border-primary/20">
                            <h3 className="text-2xl font-bold text-foreground mb-4 manrope">2. Privacy Policy</h3>
                            <p className="leading-relaxed">
                                Your use of our platform is also governed by our Privacy Policy. Please review it to 
                                understand how we collect and use your data.
                            </p>
                        </section>

                        <section className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 transition-colors hover:bg-white hover:border-primary/20">
                            <h3 className="text-2xl font-bold text-foreground mb-4 manrope">3. Intellectual Property</h3>
                            <p className="leading-relaxed">
                                All content, logos, and designs on this website are the property of Finwise and are 
                                protected by copyright laws. Unauthorized use is strictly prohibited.
                            </p>
                        </section>

                        <motion.section 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1 }}
                            className="pt-10 border-t border-gray-100"
                        >
                            <div className="bg-primary/10 p-6 rounded-2xl border border-primary/20">
                                <p className="text-sm italic text-foreground font-medium">
                                    Questions? Contact us through the WhatsApp support button on our homepage.
                                </p>
                            </div>
                        </motion.section>
                    </motion.div>
                </Section>
            </Container>
        </motion.main>
    );
}