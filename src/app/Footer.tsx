"use client";
import {useState, useEffect} from "react";
import '@/css/footer.css';

export default function Footer() {
  const [weather, setWeather] = useState<{ temp: number; desc: string } | null>(null);
  useEffect(() => {
    fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=56.7094&longitude=36.7806&current_weather=true&timezone=Europe%2FMoscow"
    )
      .then((r) => r.json())
      .then((data) => {
        if (data.current_weather) {
          setWeather({
            temp: data.current_weather.temperature,
            desc:
              data.current_weather.weathercode === 0
                ? "Ясно"
                : data.current_weather.weathercode === 1
                ? "Преим. ясно"
                : data.current_weather.weathercode === 2
                ? "Облачно"
                : data.current_weather.weathercode === 3
                ? "Пасмурно"
                : "Погода",
          });
        }
      });
  }, []);


  const [isDarkMode, setIsDarkMode] = useState(false);
  
    useEffect(() => {
      const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeMediaQuery.matches);
  
      const handler = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      darkModeMediaQuery.addEventListener('change', handler);
      
      return () => darkModeMediaQuery.removeEventListener('change', handler);
  }, []);
  return (
    <footer className={`fixed bottom-0 left-0 w-full z-50 dark-footer shadow-inner ${
                    isDarkMode ? 'night-gradient-foot' : 'sky-gradient-foot'
                }`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4">
        <div className="flex-1 flex justify-center">
          <a
            href="https://t.me/sntrechitsy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 group flex md:flex-row"
            aria-label="Telegram"
          >
            <svg className="h-6 w-6 text-[#24A1DE] hover:text-sky-600 transition-colors" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.18l-1.91 9.02c-.14.64-.52.8-.1.45l-2.91-2.15-1.4 1.35c-.15.15-.28.27-.58.27l.21-2.97 5.41-4.89c.23-.21-.05-.33-.36-.12l-6.7 4.22-2.87-.9c-.62-.2-.63-.62.13-.92l11.23-4.33c.52-.19.97.12.79.92z"/>
            </svg>
            <h3>Telegram</h3>
          </a>
          <a
            href="https://vk.com/konakovo5"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 group flex md:flex-row"
            aria-label="ВКонтакте"
          >
          <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#24A1DE] hover:text-sky-600 transition-colors">
            <rect width="48" height="48" rx="10" fill="#0077FF"/>
            <path d="M24.085 32.355C15.013 32.355 9.852 26.136 9.646 16H14.808C14.954 23.334 18.232 26.438 20.613 27.035V16H25.566V22.257C27.947 21.998 30.435 19.261 31.31 16H36.263C35.485 19.888 32.518 22.855 30.286 24.133C32.518 25.171 35.588 27.525 36.8 31.355H31.536C30.551 28.324 28.063 26.25 25.566 25.991V31.355C25.566 31.97 24.73 32.355 24.085 32.355Z" fill="white"/>
          </svg>
            <h3>ВКонтакте</h3>
          </a>
        </div>
        <div className="flex-1 flex justify-end text-right items-center mt-4 md:mt-0">
          <div className="flex items-center gap-2">
            <svg
              className="w-6 h-6 text-cyan-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 15a4 4 0 004 4h10a4 4 0 004-4M16 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            {weather ? (
              <span className="text-cyan-700 text-sm">{weather.temp}&deg;C, {weather.desc}</span>
            ) : (
              <span className="text-cyan-700 text-sm">Погода: ...</span>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
