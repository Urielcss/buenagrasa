"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { navigation } from '@/data/navigation';
import Link from 'next/link';

export default function Header() {
    const [currentSection, setCurrentSection] = useState('/');
    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (section: string) => {
        setCurrentSection(section);
        setMenuOpen(false);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-yellow-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center space-x-3">
                        <Image
                            src="/buenagrasa.png"
                            alt="Buena Grasa Logo"
                            width={300}
                            height={300}
                            className="w-12 h-12 object-cover rounded-lg"
                        />
                        <span className="text-2xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                            BUENA GRASA
                        </span>
                    </div>

                    <div className="hidden md:flex space-x-8">
                        {navigation.map(item => (
                            <Link
                                key={item.name}
                                href={item.url}
                                className={`capitalize transition-all ${currentSection === item.name
                                    ? 'text-yellow-400 font-semibold'
                                    : 'text-gray-300 hover:text-yellow-400'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <button
                        className="md:hidden text-yellow-400"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden backdrop-blur-xl bg-black/90 border-t border-yellow-500/20">
                    {navigation.map(item => (
                        <Link
                            key={item.name}
                            href={item.url}
                            className="block w-full text-left px-4 py-3 capitalize hover:bg-yellow-500/10 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}                    
                </div>
            )}
        </nav>
    )
}
