// ./src/app/ThemeProvider.tsx
"use client";

import { useState, useEffect } from "react";

export default function ThemeProvider() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handler);
    
    return () => darkModeMediaQuery.removeEventListener('change', handler);
  }, []);

  return (
    <>
      {/* Декоративный слой с облаками поверх всего */}
      <div className="theme-provider-overlay">
        {/* Дневные облака */}
        {!isDarkMode && (
          <>
            <div className="theme-cloud cloud-large day-cloud"></div>
            <div className="theme-cloud cloud-medium day-cloud"></div>
          </>
        )}

        {/* Ночные облака */}
        {isDarkMode && (
          <>
            <div className="theme-cloud cloud-large night-cloud"></div>
            <div className="theme-cloud cloud-medium night-cloud"></div>
          </>
        )}

        {/* Падающие звёзды (только ночью) */}
        {isDarkMode && (
          <>
            <div className="shooting-star star-one"></div>
            <div className="shooting-star star-two"></div>
            <div className="shooting-star star-two"></div>

          </>
        )}
      </div>

      {/* Солнечные лучи (только днём) */}
      {!isDarkMode && (
        <div className="sun-rays"></div>
      )}

      <style jsx>{`
        .theme-provider-overlay {
            background: linear-gradient(145deg, #70c1ff 0%, #b1e1ff 50%, #d4eafe 100%)
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 60;
            overflow: hidden;
            opacity: 0.3;
        }

        /* Облака */
        .theme-cloud {
            position: absolute;
            border-radius: 1000px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .theme-cloud::before,
        .theme-cloud::after {
            content: '';
            position: absolute;
            background: inherit;
            border-radius: 50%;
        }

        /* Большое облако */
        .cloud-large {
            top: 15%;
            left: -300px;
            width: 400px;
            height: 120px;
            animation: moveCloud 250s linear infinite;
        }

        .cloud-large::before {
            width: 140px;
            height: 140px;
            top: -70px;
            left: 50px;
        }

        .cloud-large::after {
            width: 180px;
            height: 180px;
            top: -90px;
            left: 170px;
        }

        /* Среднее облако */
        .cloud-medium {
            top: 45%;
            left: -200px;
            width: 300px;
            height: 100px;
            animation: moveCloud 200s linear infinite;
        }

        .cloud-medium::before {
            width: 120px;
            height: 120px;
            top: -60px;
            left: 30px;
        }

        .cloud-medium::after {
            width: 150px;
            height: 150px;
            top: -80px;
            left: 110px;
        }

        /* Дневные облака */
        .day-cloud {
            background: white;
        }

        /* Ночные облака */
        .night-cloud {
            background: #4a4a6a;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        /* Падающие звёзды */
        .shooting-star {
            position: absolute;
            background: white;
            border-radius: 50%;
            box-shadow: 0 0 10px white;
            animation: shoot 15s linear infinite;
        }

        .shooting-star::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(90deg, white, transparent);
            transform: rotate(-45deg);
        }

        .star-one {
            top: 10%;
            right: 20%;
            width: 2px;
            height: 2px;
        }

        .star-one::before {
            width: 50px;
            height: 1px;
            transform: rotate(-45deg) translateX(-25px);
        }

        .star-two {
            top: 30%;
            right: 40%;
            width: 3px;
            height: 3px;
            animation: shoot 20s linear infinite;
            animation-delay: 10s;
        }

        .star-two::before {
            width: 70px;
            height: 1px;
            transform: rotate(-45deg) translateX(-35px);
        }

        /* Солнечные лучи */
        .sun-rays {
            position: fixed;
            inset: 0;
            pointer-events: none;
            z-index: 55;
            overflow: hidden;
        }

        .sun-rays::before {
            content: '';
            position: absolute;
            top: -100px;
            right: -100px;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(255, 221, 89, 0.1) 0%, transparent 70%);
            animation: pulseSun 8s infinite alternate;
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

        @keyframes pulseSun {
            from {
                opacity: 0.1;
                transform: scale(0.9);
            }
            to {
                opacity: 0.3;
                transform: scale(1.2);
            }
        }

        /* Адаптивность для мобильных */
        @media (max-width: 768px) {
            .cloud-large {
                width: 280px;
                height: 90px;
            }
            
            .cloud-medium {
                width: 220px;
                height: 70px;
            }
            
            .sun-rays::before {
                width: 200px;
                height: 200px;
                top: -50px;
                right: -50px;
            }
        }

        @media (max-width: 480px) {
            .cloud-large {
                width: 220px;
                height: 70px;
            }
            
            .cloud-medium {
                width: 180px;
                height: 60px;
            }
        }
      `}</style>
    </>
  );
}