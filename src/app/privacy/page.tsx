"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function PrivacyPolicy() {
  return (
    <motion.main 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="min-h-screen bg-white py-20"
    >
      <Container>
        {/* Added the required 'id' prop here to satisfy the Section component */}
        <Section
          id="privacy-policy-section"
          title="Privacy Policy"
          description="Your privacy is our priority. Last updated: February 2, 2026"
        >
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="prose prose-slate max-w-none text-foreground-accent space-y-8"
          >
            {/* Section 1: Collection */}
            <section className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 transition-colors hover:bg-white hover:border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 manrope flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                Information We Collect
              </h3>
              <p className="leading-relaxed mb-4">
                We collect information to provide better services to our users. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2 marker:text-primary">
                <li>Contact details like email and phone numbers.</li>
                <li>Usage data to improve your experience on our landing page.</li>
                <li>Communication history via our WhatsApp support channel.</li>
              </ul>
            </section>

            {/* Section 2: Usage */}
            <section className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 transition-colors hover:bg-white hover:border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 manrope flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                How We Use Data
              </h3>
              <p className="leading-relaxed">
                Your data is strictly used to personalize your experience, provide customer support, 
                and send important project updates. We never sell your personal information to third parties.
              </p>
            </section>

            {/* Section 3: Security */}
            <section className="p-8 rounded-[2rem] bg-gray-50/50 border border-gray-100 transition-colors hover:bg-white hover:border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4 manrope flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                Security Standards
              </h3>
              <p className="leading-relaxed">
                We implement a variety of security measures to maintain the safety of your personal 
                information when you enter, submit, or access your personal details on the Finwise platform.
              </p>
            </section>

            <div className="pt-10 border-t border-gray-100 text-center">
              <p className="text-slate-400 text-sm italic">
                Last modified: February 2, 2026
              </p>
            </div>
          </motion.div>
        </Section>
      </Container>
    </motion.main>
  );
}