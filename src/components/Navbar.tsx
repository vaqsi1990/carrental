'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'

export const Navbar = () => {
   
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        // Check if user has a theme preference in localStorage
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
           
            document.documentElement.classList.add('dark');
            document.body.classList.add('dark');
        } else {
            
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('dark');
        }

        // Handle scroll effect
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 150);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0  mx-auto px-6 lg:px-12 py-4 flex justify-center items-center z-50 transition-all duration-300 ease-in-out ${
                isScrolled 
                    ? 'bg-black/80 w-full   shadow-lg  text-white' 
                    : 'bg-transparent  text-white'
            }`}>
                <div className="flex items-center gap-10 justify-between ">

                <div className="hidden lg:flex  ">
                    <Link href="/" className="nav-link group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <span className="relative z-10 font-semibold ">მთავარი</span>
                    </Link>
                    <Link href="/about" className="nav-link group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <span className="relative z-10 font-semibold ">ჩემს შესახებ</span>
                    </Link>
                    
                </div>

               
                <div className="flex-1 flex justify-center">
                    <Link href="/" className="group">
                        <div className="relative overflow-hidden rounded-2xl p-2 transition-all duration-300   ">
                            <Image 
                                src={"/logo-light.png"} 
                                className='cursor-pointer rounded-full transition-transform duration-300  filter drop-shadow-lg' 
                                alt='logo' 
                                width={100} 
                                height={100} 
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
                        </div>
                    </Link>
                </div>

                {/* Right Navigation Items */}
                <div className="hidden lg:flex items-center gap-8">
                    <Link href="/services" className="nav-link group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <span className="relative z-10 font-semibold ">სერვისები</span>
                    </Link>
                  
                    <Link href="/contact" className="nav-link group relative px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/10 hover:scale-105">
                        <span className="relative z-10 font-semibold ">კონტაქტი</span>
                    </Link>
                </div>
                </div>
                {/* Left Navigation Items */}

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center gap-4">
                    <button 
                        onClick={toggleMobileMenu} 
                        className='group relative p-3 rounded-full bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border border-white/20 dark:border-gray-700/30 transition-all duration-300 hover:bg-white/20 hover:scale-110'
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center gap-1">
                            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
                            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
                        </div>
                    </button>
                </div>

                {/* Mobile Side Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-white/20 backdrop-blur-2xl z-40 transition-all duration-300" onClick={closeMobileMenu}>
                    </div>
                )}
                
                {/* Mobile Side Menu */}
                <div className={`lg:hidden fixed top-0 right-0 w-80 h-screen z-50  bg-white/20 border-l border-white/20 dark:border-gray-700/30 transition-all duration-500 ease-out flex flex-col gap-6 py-20 px-8 shadow-2xl ${
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="absolute right-6 top-6">
                        <button 
                            onClick={closeMobileMenu} 
                            className="p-3 rounded-full bg-white/40  hover:bg-white/30  transition-all duration-300 hover:scale-110"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="mt-8 space-y-6">
                        <ul className='text-center text-[18px] gap-x-4'>


                        <li className='mb-4'>
                            <Link onClick={closeMobileMenu} href="#top" className="mobile-nav-link group">
                                <span className="relative z-10">მთავარი</span>
                            </Link>
                        </li>
                        <li className='mb-4'>
                            <Link onClick={closeMobileMenu} href="#about" className="mobile-nav-link group">
                                <span className="relative z-10">ჩემს შესახებ</span>
                            </Link>
                        </li>
                       
                        <li className='mb-4'>
                            <Link onClick={closeMobileMenu} href="#services" className="mobile-nav-link group">
                                <span className="relative z-10">სერვისები</span>
                            </Link>
                        </li>
                       
                        <li className='mb-4'>
                            <Link onClick={closeMobileMenu} href="#contact" className="mobile-nav-link group">
                                <span className="relative z-10">კონტაქტი</span>
                            </Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
