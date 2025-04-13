"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
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
                    <Link className='font-bold text-xl' href={`#main`} scroll={true}> Home</Link>
                    <Link className='font-bold text-xl' href={`#about`} scroll={true}> About</Link>
                    <Link className='font-bold text-xl' href={`#project`} scroll={true}> Projects</Link>
                    <Link className='font-bold text-xl' href={`#contact`} scroll={true}> Contact</Link>
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
                    <Link className="font-bold text-lg" href="#main" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link className="font-bold text-lg" href="#about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link className="font-bold text-lg" href="#projecgt" onClick={() => setMenuOpen(false)}>Projects</Link>
                    <Link className="font-bold text-lg" href="#contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar