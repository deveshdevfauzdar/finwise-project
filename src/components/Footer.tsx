"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { FaFingerprint } from 'react-icons/fa';

import { siteDetails } from '@/data/siteDetails';
import { footerDetails } from '@/data/footer';
import { getPlatformIconByName } from '@/utils';

const Footer: React.FC = () => {
    // Animation variants for sections
    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <footer className="bg-hero-background text-foreground py-16 border-t border-gray-100">
            <motion.div 
                className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    visible: { transition: { staggerChildren: 0.1 } }
                }}
            >
                {/* Branding Section */}
                <motion.div variants={fadeInUp}>
                    <Link href="/" className="flex items-center gap-2 group w-fit">
                        <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:rotate-12">
                            <FaFingerprint className="text-black w-6 h-6" />
                        </div>
                        <h3 className="manrope text-xl font-bold cursor-pointer tracking-tight">
                            {siteDetails.siteName}
                        </h3>
                    </Link>
                    <p className="mt-5 text-foreground-accent leading-relaxed max-w-xs">
                        {footerDetails.subheading}
                    </p>
                </motion.div>

                {/* Navigation Section */}
                <motion.div variants={fadeInUp}>
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Quick Links</h4>
                    <ul className="text-foreground-accent space-y-3">
                        {footerDetails.quickLinks.map(link => (
                            <li key={link.text}>
                                <Link href={link.url} className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                                    {link.text}
                                </Link>
                            </li>
                        ))}
                        {/* Aesthetic Legal Links */}
                        <li>
                            <Link href="/privacy" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link href="/terms" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                                Terms & Conditions
                            </Link>
                        </li>
                        <li>
                            <Link href="/deletion" className="hover:text-primary transition-all hover:translate-x-1 inline-block">
                                User Account Data Deletion
                            </Link>
                        </li>
                    </ul>
                </motion.div>

                {/* Contact Section */}
                <motion.div variants={fadeInUp}>
                    <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 mb-6">Contact Us</h4>
                    
                    <div className="space-y-3">
                        {footerDetails.email && (
                            <a href={`mailto:${footerDetails.email}`} className="block text-foreground-accent hover:text-primary transition-colors">
                                <span className="font-semibold text-foreground text-sm block">Email</span>
                                {footerDetails.email}
                            </a>
                        )}

                        {footerDetails.telephone && (
                            <a href={`tel:${footerDetails.telephone}`} className="block text-foreground-accent hover:text-primary transition-colors">
                                <span className="font-semibold text-foreground text-sm block">Phone</span>
                                {footerDetails.telephone}
                            </a>
                        )}
                    </div>

                    {footerDetails.socials && (
                        <div className="mt-8 flex items-center gap-4 flex-wrap">
                            {Object.keys(footerDetails.socials).map(platformName => {
                                if (platformName && footerDetails.socials[platformName]) {
                                    return (
                                        <Link
                                            href={footerDetails.socials[platformName]}
                                            key={platformName}
                                            aria-label={platformName}
                                            className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-foreground-accent hover:text-white hover:bg-primary hover:border-primary transition-all hover:-translate-y-1 shadow-sm"
                                        >
                                            {getPlatformIconByName(platformName)}
                                        </Link>
                                    )
                                }
                                return null;
                            })}
                        </div>
                    )}
                </motion.div>
            </motion.div>

            {/* Bottom Bar */}
            <motion.div 
                className="mt-16 text-center text-foreground-accent px-6 border-t border-gray-100 pt-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
            >
                <p className="text-sm font-medium">
                    Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All rights reserved.
                </p>
                <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mt-4 text-xs text-gray-400">
                    <p>Made with &hearts; by <a href="https://nexilaunch.com" target="_blank" className="hover:text-primary transition-colors font-semibold">Nexi Launch</a></p>
                    <p>UI kit by <a href="https://ui8.net" target="_blank" className="hover:text-primary transition-colors font-semibold">Youthmind</a></p>
                </div>
            </motion.div>
        </footer>
    );
};

export default Footer;