"use client"

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 dark-header shadow-md">
                <nav className="container mx-auto flex flex-wrap items-center justify-between py-4 px-4">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className="text-xl md:text-2xl font-bold tracking-tight">СНТ &quot;Речицы&quot;</div>
                        
                        {/* Hamburger menu button for mobile */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                                    isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                                }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out my-1 ${
                                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
                                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                                }`}
                            ></span>
                        </button>
                    </div>

                    {/* Desktop navigation - hidden on mobile */}
                    <ul className="hidden md:flex flex-wrap gap-4 text-lg font-medium">
                        <li>
                            <Link href="/" className="hover:text-cyan-200 transition-colors transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-cyan-700 px-3 py-1 rounded-xl">
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/informaciya" className="hover:text-cyan-200 transition-colors transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-cyan-700 px-3 py-1 rounded-xl">
                                Информация
                            </Link>
                        </li>
                        <li>
                            <Link href="/dokumenty" className="hover:text-cyan-200 transition-colors transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-cyan-700 px-3 py-1 rounded-xl">
                                Документы
                            </Link>
                        </li>
                        <li>
                            <Link href="/ustav" className="hover:text-cyan-200 transition-colors transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-cyan-700 px-3 py-1 rounded-xl">
                                Устав
                            </Link>
                        </li>
                        <li>
                            <Link href="/foto" className="hover:text-cyan-200 transition-colors transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-cyan-700 px-3 py-1 rounded-xl">
                                Фото
                            </Link>
                        </li>
                        <li>
                            <Link href="/kak-dobratsya" className="hover:text-cyan-200 transition-colors transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-cyan-700 px-3 py-1 rounded-xl">
                                Как добраться
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakty" className="hover:text-cyan-200 transition-colors transition-transform duration-200 ease-in-out transform hover:scale-110 hover:bg-cyan-700 px-3 py-1 rounded-xl">
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile sliding menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 dark-mobile-menu text-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold">Меню</h2>
                            <button
                                onClick={toggleMenu}
                                className="text-white hover:text-cyan-200 focus:outline-none"
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col gap-4 text-lg font-medium">
                            <li>
                                <Link
                                    href="/"
                                    onClick={toggleMenu}
                                    className="block hover:text-cyan-200 transition-colors duration-200 dark-mobile-menu-hover px-3 py-2 rounded-xl"
                                >
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/informaciya"
                                    onClick={toggleMenu}
                                    className="block hover:text-cyan-200 transition-colors duration-200 dark-mobile-menu-hover px-3 py-2 rounded-xl"
                                >
                                    Информация
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/dokumenty"
                                    onClick={toggleMenu}
                                    className="block hover:text-cyan-200 transition-colors duration-200 dark-mobile-menu-hover px-3 py-2 rounded-xl"
                                >
                                    Документы
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/ustav"
                                    onClick={toggleMenu}
                                    className="block hover:text-cyan-200 transition-colors duration-200 dark-mobile-menu-hover px-3 py-2 rounded-xl"
                                >
                                    Устав
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/foto"
                                    onClick={toggleMenu}
                                    className="block hover:text-cyan-200 transition-colors duration-200 dark-mobile-menu-hover px-3 py-2 rounded-xl"
                                >
                                    Фото
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kak-dobratsya"
                                    onClick={toggleMenu}
                                    className="block hover:text-cyan-200 transition-colors duration-200 dark-mobile-menu-hover px-3 py-2 rounded-xl"
                                >
                                    Как добраться
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/kontakty"
                                    onClick={toggleMenu}
                                    className="block hover:text-cyan-200 transition-colors duration-200 dark-mobile-menu-hover px-3 py-2 rounded-xl"
                                >
                                    Контакты
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Overlay for mobile menu */}
                {isMenuOpen && (
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                        onClick={toggleMenu}
                    ></div>
                )}
            </header>
        </>
    )
}
