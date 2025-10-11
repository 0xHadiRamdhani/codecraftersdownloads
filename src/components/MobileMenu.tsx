"use client";

import { useState, useEffect } from 'react';
import SmoothScrollLink from './SmoothScrollLink';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={toggleMenu}
                className="md:hidden text-green-400 hover:text-green-300 transition-colors z-50"
                aria-label="Toggle menu"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    {isOpen ? (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                </svg>
            </button>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div className="fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-md z-40 md:hidden border-b border-green-500/30">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                        <div className="flex flex-col space-y-4">
                            <SmoothScrollLink
                                href="#features"
                                className="text-green-400 hover:text-green-300 transition-colors font-mono text-lg py-2"
                                onClick={closeMenu}
                            >
                                {"[ Fitur ]"}
                            </SmoothScrollLink>
                            <SmoothScrollLink
                                href="#download"
                                className="text-green-400 hover:text-green-300 transition-colors font-mono text-lg py-2"
                                onClick={closeMenu}
                            >
                                {"[ Download ]"}
                            </SmoothScrollLink>
                            <SmoothScrollLink
                                href="#contact"
                                className="text-green-400 hover:text-green-300 transition-colors font-mono text-lg py-2"
                                onClick={closeMenu}
                            >
                                {"[ Kontak ]"}
                            </SmoothScrollLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}