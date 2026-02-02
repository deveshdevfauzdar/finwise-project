'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import { FaFingerprint } from 'react-icons/fa';
import clsx from 'clsx';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';
import { menuItems } from '@/data/menuItems';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Track scroll position to trigger Glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header 
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out w-full",
                {
                    "bg-transparent py-5": !isScrolled,
                    "bg-white/70 backdrop-blur-md shadow-sm py-3 border-b border-white/20": isScrolled
                }
            )}
        >
            <Container className="!px-5">
                <nav className="mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary p-1.5 rounded-lg transition-transform group-hover:rotate-12">
                            <FaFingerprint className="text-black w-6 h-6" />
                        </div>
                        <span className="manrope text-xl font-bold text-foreground cursor-pointer tracking-tight">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex items-center space-x-8">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link 
                                href="#cta" 
                                className="text-black bg-primary hover:bg-black hover:text-white px-7 py-2.5 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-primary/20 active:scale-95"
                            >
                                Download
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="bg-primary text-black focus:outline-none rounded-xl w-10 h-10 flex items-center justify-center shadow-lg shadow-primary/20"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            {isOpen ? (
                                <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <HiBars3 className="h-6 w-6" aria-hidden="true" />
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
            <Transition
                show={isOpen}
                enter="transition ease-out duration-200 transform"
                enterFrom="opacity-0 -translate-y-4"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150 transform"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 -translate-y-4"
            >
                <div id="mobile-menu" className="md:hidden bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-2xl absolute w-full left-0">
                    <ul className="flex flex-col space-y-4 pt-4 pb-8 px-6">
                        {menuItems.map(item => (
                            <li key={item.text}>
                                <Link 
                                    href={item.url} 
                                    className="text-foreground font-semibold text-lg hover:text-primary block transition-colors" 
                                    onClick={toggleMenu}
                                >
                                    {item.text}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-2">
                            <Link 
                                href="#cta" 
                                className="text-black bg-primary hover:bg-black hover:text-white px-6 py-3 rounded-xl font-bold block text-center transition-all shadow-lg shadow-primary/20" 
                                onClick={toggleMenu}
                            >
                                Get Started
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;