"use client"

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { navigation } from '@/data/navigation';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    // Cerrar menú cuando cambia la ruta
    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    // Cerrar menú al presionar ESC
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setMenuOpen(false);
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, []);

    // Prevenir scroll cuando el menú está abierto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    const handleLinkClick = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-yellow-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
                            <Image
                                src="/buenagrasa.png"
                                alt="Buena Grasa Logo"
                                width={48}
                                height={48}
                                className="w-12 h-12 object-cover rounded-lg"
                            />
                            <span className="text-2xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                                BUENA GRASA
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-8">
                            {navigation.map(item => (
                                <Link
                                    key={item.name}
                                    href={item.url}
                                    className={`capitalize transition-all relative group ${
                                        pathname === item.url
                                            ? 'text-yellow-400 font-semibold'
                                            : 'text-gray-300 hover:text-yellow-400'
                                    }`}
                                >
                                    {item.name}
                                    <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all group-hover:w-full ${
                                        pathname === item.url ? 'w-full' : ''
                                    }`}></span>
                                </Link>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-yellow-400 relative w-10 h-10 flex items-center justify-center"
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Toggle menu"
                        >
                            <div className="relative w-6 h-6">
                                <span
                                    className={`absolute top-1/2 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-300 ${
                                        menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                                    }`}
                                />
                                <span
                                    className={`absolute top-1/2 left-0 w-full h-0.5 bg-yellow-400 transition-all duration-300 ${
                                        menuOpen ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                <span
                                    className={`absolute top-1/2 left-0 w-full h-0.5 bg-yellow-400 transform transition-all duration-300 ${
                                        menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                                    }`}
                                />
                            </div>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden backdrop-blur-xl bg-black/95 border-t border-yellow-500/20 overflow-hidden transition-all duration-300 ease-in-out ${
                        menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div className="py-2">
                        {navigation.map((item, index) => (
                            <Link
                                key={item.name}
                                href={item.url}
                                onClick={handleLinkClick}
                                className={`block w-full text-left px-6 py-4 capitalize transition-all duration-200 border-l-4 ${
                                    pathname === item.url
                                        ? 'border-yellow-400 bg-yellow-500/10 text-yellow-400 font-semibold'
                                        : 'border-transparent hover:border-yellow-400 hover:bg-yellow-500/5 text-gray-300 hover:text-yellow-400'
                                }`}
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: menuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>

            {/* Overlay para cerrar menú al hacer clic fuera */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setMenuOpen(false)}
                    style={{ top: '64px' }}
                />
            )}

            <style jsx>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}
