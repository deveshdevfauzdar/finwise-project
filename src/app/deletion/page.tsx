"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from "@/components/Container";
import Section from "@/components/Section";

export default function DataDeletionPage() {
    const [status, setStatus] = useState<'idle' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('success');
    };

    return (
        <AnimatePresence mode="wait">
            {status === 'success' ? (
                <motion.main 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="min-h-screen flex items-center justify-center bg-white px-6"
                >
                    <div className="text-center max-w-md">
                        <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                            className="text-6xl mb-6"
                        >
                            ✅
                        </motion.div>
                        <h1 className="text-3xl font-bold mb-3 manrope">Request Received</h1>
                        <p className="text-foreground-accent leading-relaxed">
                            We have received your deletion request. Our team will process it and notify you via email within 30 days.
                        </p>
                        <button 
                            onClick={() => window.location.href = '/'} 
                            className="mt-8 px-8 py-3 bg-primary text-black font-bold rounded-xl hover:bg-black hover:text-white transition-all active:scale-95 shadow-lg shadow-primary/20"
                        >
                            Return Home
                        </button>
                    </div>
                </motion.main>
            ) : (
                <motion.main 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="min-h-screen pt-24 pb-12 bg-gray-50/30"
                >
                    <Container>
                        <Section 
                            id="data-deletion-form" // Fixed: Added required ID prop
                            title="Data Deletion Request" 
                            description="Fill out the form below to permanently delete your account and associated data."
                        >
                            <motion.div 
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="max-w-xl mx-auto bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100"
                            >
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Full Name</label>
                                            <input required type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold ml-1">Username</label>
                                            <input required type="text" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="johndoe123" />
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Phone Number</label>
                                        <input required type="tel" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="+1..." />
                                    </div>
                                    
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold ml-1">Email Address</label>
                                        <input required type="email" className="w-full px-5 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 focus:bg-white focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                                    </div>

                                    <div className="pt-6">
                                        <button type="submit" className="w-full bg-foreground text-white font-bold py-5 rounded-2xl hover:bg-black transition-all active:scale-[0.98] shadow-xl shadow-gray-300">
                                            Submit Deletion Request
                                        </button>
                                        <div className="bg-red-50 text-red-500 text-xs p-4 rounded-xl mt-6 border border-red-100 flex items-center gap-3">
                                            <span>⚠️</span>
                                            <p className="font-medium italic">Warning: This action is irreversible. All your data will be permanently removed.</p>
                                        </div>
                                    </div>
                                </form>
                            </motion.div>
                        </Section>
                    </Container>
                </motion.main>
            )}
        </AnimatePresence>
    );
}