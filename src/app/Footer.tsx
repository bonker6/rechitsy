"use client";
import React from "react";

export default function Footer() {
  const [weather, setWeather] = React.useState<{ temp: number; desc: string } | null>(null);
  React.useEffect(() => {
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

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 dark-footer border-t shadow-inner">
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
            <svg className="w-6 h-6 text-[#0077FF] hover:opacity-80 transition-opacity" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M23.45 5.94c.35-1.16 0-2.01-1.66-2.01h-5.48c-1.4 0-2.05.74-2.4 1.57 0 0-2.79 6.81-6.75 11.23-.31.31-.45.41-.62.41-.09 0-.21-.1-.21-.4V5.93c0-1.4-.4-2.01-1.57-2.01H1.14C.26 3.92 0 4.58 0 5.25c0 1.33 1.98 1.63 2.19 5.34V18.1c0 1.83-.34 2.1-.98 2.1h-1.6c-.63 0-.84.28-.84.71 0 .6.82 2.5 3.91 2.5 3.2 0 5.93-1.66 5.93-1.66s3.04-1.63 4.39-3.26c.46-.57.65-.82.88-.82.16 0 .3.1.58.4 0 0 2.58 3.6 5.16 5.12 1.93 1.13 3.4.88 3.92.88h5.48c1.55 0 2.33-.78 1.87-2.31-.49-1.53-2.25-3.76-4.59-6.41-.33-.37-.47-.53-.13-1.01.03-.04 3.12-4.5 3.43-5.9z"/>
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
