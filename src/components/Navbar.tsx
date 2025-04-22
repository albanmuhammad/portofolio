"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll("section[id]");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.2,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    const navLinks = [
        { id: "main", label: "Home" },
        { id: "about", label: "About" },
        { id: "project", label: "Projects" },
        { id: "contact", label: "Contact" },
    ];

    return (
        <header className='fixed top-0 w-full bg-white left-0 px-6 py-3 shadow-sm z-50'>
            <nav className='flex justify-between items-center'>
                <div className='flex items-center gap-5'>
                    <Link href={`/`}>
                        <Image src={`/closeup.jpg`} alt='foto' width={84} height={84} className='rounded-full'></Image>
                    </Link>
                    <p className='font-bold text-xl'>Alban Muhamamd Satria Firdaus</p>
                </div>
                <div className='hidden md:flex items-center gap-10'>
                    {navLinks.map(link => (
                        <Link
                            key={link.id}
                            className={`font-bold text-xl ${activeSection === link.id ? 'underline' : 'text-gray-500'}`}
                            href={`#${link.id}`}
                            scroll={true}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className='md:hidden'>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className='p-0'
                    >
                        {menuOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </nav>
            <div className={`md:hidden absolute top-full left-0 w-full bg-white transition-all duration-300 ease-in-out shadow-md z-40 ${menuOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
                } overflow-hidden`}>
                <div className="flex flex-col items-center gap-4">
                    {navLinks.map(link => (
                        <Link
                            key={link.id}
                            className={`font-bold text-lg ${activeSection === link.id ? 'underline' : 'text-gray-500'}`}
                            href={`#${link.id}`}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default Navbar;
