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
                : "Погода",
          });
        }
      });
  }, []);

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-cyan-200 shadow-inner">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-4">
        <div className="flex-1 flex justify-center">
          <a
            href="https://t.me/sntrechitsy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 group"
            aria-label="Telegram"
          >
            <svg
              className="w-8 h-8 fill-cyan-600 group-hover:fill-cyan-400 transition-all duration-200"
              viewBox="0 0 32 32"
            >
              <path d="M29.919 6.112c-.336-.288-.8-.368-1.216-.208l-26 10c-.432.168-.72.6-.704 1.064.016.456.32.856.76.984l6.68 1.96 2.56 8.08c.136.432.528.728.976.728h.016c.456-.008.848-.32.968-.76l2.36-8.52 7.44 6.16c.192.16.432.248.68.248.128 0 .256-.024.376-.072.352-.144.6-.472.624-.848l2-18c.048-.456-.16-.904-.56-1.128zM12.44 25.08l-2.08-6.56 4.56 1.336-2.48 5.224zm3.08-7.44l-7.36-2.16 20.08-7.72-12.72 9.88zm8.56 6.16l-6.64-5.48 8.08-6.28-1.44 11.76z" />
            </svg>
          </a>
          <a
            href="https://t.me/sntrechitsy"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 group"
            aria-label="ВКонтакте"
          >
            <svg
              className="w-8 h-8 fill-cyan-600 group-hover:fill-cyan-400 transition-all duration-200"
              viewBox="0 0 32 32"
            >
              <path d="M16.001 23.999h-1.6c-4.8 0-7.2-3.2-7.2-9.6v-1.6c0-1.6.8-2.4 2.4-2.4h2.4c.8 0 1.2.4 1.2 1.2v2.4c0 .8-.4 1.2-1.2 1.2h-1.2c.8 2.4 2.4 3.6 4.8 3.6s4-1.2 4.8-3.6h-1.2c-.8 0-1.2-.4-1.2-1.2v-2.4c0-.8.4-1.2 1.2-1.2h2.4c1.6 0 2.4.8 2.4 2.4v1.6c0 6.4-2.4 9.6-7.2 9.6z" />
            </svg>
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
