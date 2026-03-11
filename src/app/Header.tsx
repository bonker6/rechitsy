"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Проверяем системные настройки темы
    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
        darkModeMediaQuery.addEventListener('change', handler);
        
        return () => darkModeMediaQuery.removeEventListener('change', handler);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <header className="relative w-full z-50">
                {/* Контейнер с анимацией (дневная или ночная) */}
                <div className={`absolute top-0 left-0 w-full h-full overflow-hidden ${
                    isDarkMode ? 'night-gradient' : 'sky-gradient'
                }`}>
                    {/* Луна (для ночной темы) */}
                    {isDarkMode && (
                        <>
                            <div className="moon"></div>
                            {/* Звёзды */}
                            <div className="star star1"></div>
                            <div className="star star2"></div>
                            <div className="star star3"></div>
                            <div className="star star4"></div>
                            <div className="star star5"></div>
                            <div className="star star6"></div>
                            {/* Падающая звезда */}
                            <div className="shooting-star"></div>
                        </>
                    )}
                    
                    {/* Солнце (для дневной темы) */}
                    {!isDarkMode && (
                        <div className="sun"></div>
                    )}
                    
                    {/* Облака (разные для дня и ночи) */}
                    <div className={`cloud cloud1 ${isDarkMode ? 'night-cloud' : ''}`}></div>
                    <div className={`cloud cloud2 ${isDarkMode ? 'night-cloud' : ''}`}></div>
                    <div className={`cloud cloud3 ${isDarkMode ? 'night-cloud' : ''}`}></div>
                </div>

                {/* Навигация */}
                <nav className="relative container mx-auto flex flex-wrap items-center justify-between py-4 px-4">
                    <div className="flex items-center justify-between w-full md:w-auto">
                        <div className={`text-xl md:text-2xl font-bold tracking-tight drop-shadow-lg ${
                            isDarkMode ? 'text-blue-100' : 'text-white'
                        }`}>
                            СНТ &quot;Речицы&quot;
                        </div>
                        
                        {/* Hamburger menu button */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none relative z-50"
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                                    isDarkMode ? 'bg-blue-100' : 'bg-white'
                                } ${
                                    isMenuOpen ? 'rotate-45 translate-y-1.5' : '-translate-y-1'
                                }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out my-1 ${
                                    isDarkMode ? 'bg-blue-100' : 'bg-white'
                                } ${
                                    isMenuOpen ? 'opacity-0' : 'opacity-100'
                                }`}
                            ></span>
                            <span
                                className={`block w-6 h-0.5 transition-all duration-300 ease-in-out ${
                                    isDarkMode ? 'bg-blue-100' : 'bg-white'
                                } ${
                                    isMenuOpen ? '-rotate-45 -translate-y-1.5' : 'translate-y-1'
                                }`}
                            ></span>
                        </button>
                    </div>

                    {/* Desktop navigation */}
                    <ul className="hidden md:flex flex-wrap gap-4 text-lg font-medium relative z-10">
                        <li>
                            <Link href="/" className={`transition-all duration-200 hover:scale-110 hover:bg-black/20 px-3 py-1 rounded-xl inline-block drop-shadow-lg ${
                                isDarkMode 
                                    ? 'text-blue-100 hover:text-yellow-200' 
                                    : 'text-white hover:text-amber-200'
                            }`}>
                                Главная
                            </Link>
                        </li>
                        <li>
                            <Link href="/informaciya" className={`transition-all duration-200 hover:scale-110 hover:bg-black/20 px-3 py-1 rounded-xl inline-block drop-shadow-lg ${
                                isDarkMode 
                                    ? 'text-blue-100 hover:text-yellow-200' 
                                    : 'text-white hover:text-amber-200'
                            }`}>
                                Информация
                            </Link>
                        </li>
                        <li>
                            <Link href="/dokumenty" className={`transition-all duration-200 hover:scale-110 hover:bg-black/20 px-3 py-1 rounded-xl inline-block drop-shadow-lg ${
                                isDarkMode 
                                    ? 'text-blue-100 hover:text-yellow-200' 
                                    : 'text-white hover:text-amber-200'
                            }`}>
                                Документы
                            </Link>
                        </li>
                        <li>
                            <Link href="/ustav" className={`transition-all duration-200 hover:scale-110 hover:bg-black/20 px-3 py-1 rounded-xl inline-block drop-shadow-lg ${
                                isDarkMode 
                                    ? 'text-blue-100 hover:text-yellow-200' 
                                    : 'text-white hover:text-amber-200'
                            }`}>
                                Устав
                            </Link>
                        </li>
                        <li>
                            <Link href="/foto" className={`transition-all duration-200 hover:scale-110 hover:bg-black/20 px-3 py-1 rounded-xl inline-block drop-shadow-lg ${
                                isDarkMode 
                                    ? 'text-blue-100 hover:text-yellow-200' 
                                    : 'text-white hover:text-amber-200'
                            }`}>
                                Фото
                            </Link>
                        </li>
                        <li>
                            <Link href="/kak-dobratsya" className={`transition-all duration-200 hover:scale-110 hover:bg-black/20 px-3 py-1 rounded-xl inline-block drop-shadow-lg ${
                                isDarkMode 
                                    ? 'text-blue-100 hover:text-yellow-200' 
                                    : 'text-white hover:text-amber-200'
                            }`}>
                                Как добраться
                            </Link>
                        </li>
                        <li>
                            <Link href="/kontakty" className={`transition-all duration-200 hover:scale-110 hover:bg-black/20 px-3 py-1 rounded-xl inline-block drop-shadow-lg ${
                                isDarkMode 
                                    ? 'text-blue-100 hover:text-yellow-200' 
                                    : 'text-white hover:text-amber-200'
                            }`}>
                                Контакты
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Mobile sliding menu */}
                <div
                    className={`fixed top-0 right-0 h-full w-64 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
                        isDarkMode 
                            ? 'bg-gradient-to-b from-indigo-900 to-purple-900 text-blue-100' 
                            : 'bg-gradient-to-b from-sky-400 to-sky-600 text-white'
                    } ${
                        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="p-4">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-bold drop-shadow-md">Меню</h2>
                            <button
                                onClick={toggleMenu}
                                className={`focus:outline-none ${
                                    isDarkMode ? 'text-blue-100 hover:text-yellow-200' : 'text-white hover:text-amber-200'
                                }`}
                                aria-label="Close menu"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <ul className="flex flex-col gap-4 text-lg font-medium">
                            {['/', '/informaciya', '/dokumenty', '/ustav', '/foto', '/kak-dobratsya', '/kontakty'].map((path, index) => {
                                const names = ['Главная', 'Информация', 'Документы', 'Устав', 'Фото', 'Как добраться', 'Контакты'];
                                return (
                                    <li key={path}>
                                        <Link
                                            href={path}
                                            onClick={toggleMenu}
                                            className={`block transition-colors duration-200 px-3 py-2 rounded-xl ${
                                                isDarkMode 
                                                    ? 'hover:text-yellow-200 hover:bg-white/10' 
                                                    : 'hover:text-amber-200 hover:bg-white/20'
                                            }`}
                                        >
                                            {names[index]}
                                        </Link>
                                    </li>
                                );
                            })}
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

            <style jsx>{`
                /* Дневной градиент */
                .sky-gradient {
                    background: linear-gradient(145deg, #70c1ff 0%, #b1e1ff 50%, #d4eafe 100%);
                    border-bottom-left-radius: 50px 30px;
                    border-bottom-right-radius: 50px 30px;
                    pointer-events: none;
                }

                /* Ночной градиент */
                .night-gradient {
                    background: linear-gradient(145deg, #0b1120 0%, #1a1f35 50%, #2d2a5c 100%);
                    border-bottom-left-radius: 50px 30px;
                    border-bottom-right-radius: 50px 30px;
                    pointer-events: none;
                }

                /* Солнце */
                .sun {
                    position: absolute;
                    top: 30px;
                    right: 10%;
                    width: 80px;
                    height: 80px;
                    background: #ffdd59;
                    border-radius: 50%;
                    box-shadow: 0 0 0 15px rgba(255, 221, 89, 0.3), 0 0 0 30px rgba(255, 221, 89, 0.2), 0 0 0 45px rgba(255, 221, 89, 0.1);
                    animation: rotateSun 40s linear infinite;
                }

                .sun::after {
                    content: '';
                    position: absolute;
                    top: -15px;
                    left: -15px;
                    right: -15px;
                    bottom: -15px;
                    background: radial-gradient(circle, rgba(255,221,89,0.5) 0%, rgba(255,221,89,0) 70%);
                    border-radius: 50%;
                    animation: pulseSun 3s infinite alternate;
                }

                /* Луна */
                .moon {
                    position: absolute;
                    top: 30px;
                    right: 10%;
                    width: 70px;
                    height: 70px;
                    background: #f0f0f0;
                    border-radius: 50%;
                    box-shadow: 0 0 0 15px rgba(255, 255, 255, 0.1), 0 0 0 30px rgba(255, 255, 255, 0.05);
                    animation: floatMoon 6s ease-in-out infinite;
                }

                .moon::before {
                    content: '';
                    position: absolute;
                    top: -10px;
                    left: 15px;
                    width: 20px;
                    height: 20px;
                    background: #e0e0e0;
                    border-radius: 50%;
                    opacity: 0.3;
                }

                .moon::after {
                    content: '';
                    position: absolute;
                    bottom: 5px;
                    right: 10px;
                    width: 25px;
                    height: 25px;
                    background: #d0d0d0;
                    border-radius: 50%;
                    opacity: 0.3;
                }

                /* Звёзды */
                .star {
                    position: absolute;
                    background: white;
                    border-radius: 50%;
                    animation: twinkle 2s infinite alternate;
                }

                .star1 {
                    width: 4px;
                    height: 4px;
                    top: 50px;
                    left: 20%;
                    animation-delay: 0s;
                }

                .star2 {
                    width: 6px;
                    height: 6px;
                    top: 100px;
                    left: 40%;
                    animation-delay: 0.5s;
                }

                .star3 {
                    width: 3px;
                    height: 3px;
                    top: 150px;
                    left: 60%;
                    animation-delay: 1s;
                }

                .star4 {
                    width: 5px;
                    height: 5px;
                    top: 200px;
                    left: 30%;
                    animation-delay: 1.5s;
                }

                .star5 {
                    width: 4px;
                    height: 4px;
                    top: 80px;
                    left: 80%;
                    animation-delay: 2s;
                }

                .star6 {
                    width: 7px;
                    height: 7px;
                    top: 180px;
                    left: 70%;
                    animation-delay: 2.5s;
                }

                /* Падающая звезда */
                .shooting-star {
                    position: absolute;
                    top: 20px;
                    right: 20%;
                    width: 4px;
                    height: 4px;
                    background: white;
                    border-radius: 50%;
                    box-shadow: 0 0 10px white;
                    animation: shoot 8s linear infinite;
                }

                .shooting-star::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100px;
                    height: 2px;
                    background: linear-gradient(90deg, white, transparent);
                    transform: rotate(-45deg) translateX(-50px);
                }

                /* Облака */
                .cloud {
                    position: absolute;
                    background: white;
                    border-radius: 1000px;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
                }

                .cloud.night-cloud {
                    background: #4a4a6a;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.3);
                }

                .cloud::before,
                .cloud::after {
                    content: '';
                    position: absolute;
                    background: inherit;
                    border-radius: 50%;
                }

                .cloud1 {
                    top: 80px;
                    left: -200px;
                    width: 220px;
                    height: 70px;
                    opacity: 0.9;
                    animation: moveCloud 80s linear infinite;
                }
                .cloud1::before {
                    width: 90px;
                    height: 90px;
                    top: -45px;
                    left: 25px;
                }
                .cloud1::after {
                    width: 110px;
                    height: 110px;
                    top: -60px;
                    left: 85px;
                }

                .cloud2 {
                    top: 160px;
                    left: -300px;
                    width: 280px;
                    height: 80px;
                    opacity: 0.8;
                    animation: moveCloud 100s linear infinite 5s;
                }
                .cloud2::before {
                    width: 100px;
                    height: 100px;
                    top: -50px;
                    left: 40px;
                }
                .cloud2::after {
                    width: 130px;
                    height: 130px;
                    top: -70px;
                    left: 120px;
                }

                .cloud3 {
                    top: 30px;
                    left: -150px;
                    width: 180px;
                    height: 50px;
                    opacity: 0.7;
                    animation: moveCloud 60s linear infinite 10s;
                }
                .cloud3::before {
                    width: 70px;
                    height: 70px;
                    top: -35px;
                    left: 15px;
                }
                .cloud3::after {
                    width: 90px;
                    height: 90px;
                    top: -45px;
                    left: 70px;
                }

                /* Анимации */
                @keyframes moveCloud {
                    from {
                        transform: translateX(0);
                    }
                    to {
                        transform: translateX(150vw);
                    }
                }

                @keyframes rotateSun {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes pulseSun {
                    from {
                        opacity: 0.5;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }

                @keyframes floatMoon {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }

                @keyframes twinkle {
                    0% {
                        opacity: 0.3;
                        transform: scale(0.8);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1.2);
                    }
                }

                @keyframes shoot {
                    0% {
                        transform: translateX(0) translateY(0);
                        opacity: 1;
                    }
                    20% {
                        transform: translateX(-200px) translateY(200px);
                        opacity: 0;
                    }
                    100% {
                        transform: translateX(-200px) translateY(200px);
                        opacity: 0;
                    }
                }

                /* Адаптация для мобильных */
                @media (max-width: 768px) {
                    .sky-gradient, .night-gradient {
                        height: fullscreen;
                    }
                    .sun, .moon {
                        width: 50px;
                        height: 50px;
                        top: 20px;
                        right: 15px;
                    }
                    .cloud1 {
                        top: 40px;
                    }
                    .cloud2 {
                        top: 100px;
                    }
                    .cloud3 {
                        top: 15px;
                    }
                }
            `}</style>
        </>
    )
}