"use client";
import { useEffect, useRef, useState } from "react";

const DESTINATION = [56.728767, 36.827567]; // СНТ Речицы

export default function KakDobratsya() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<any>(null);
  const routePanelRef = useRef<any>(null);
  const [from, setFrom] = useState("");
  const [input, setInput] = useState("");
  const [ymapsLoaded, setYmapsLoaded] = useState(false);
  const [error, setError] = useState("");

  // Загрузка скрипта Яндекс.Карт
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.ymaps) {
      setYmapsLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=1d251639-e01e-4a4a-a3ec-652334aa5f86";
    script.onload = () => setYmapsLoaded(true);
    document.body.appendChild(script);
  }, []);

  // Инициализация карты
  useEffect(() => {
    if (!ymapsLoaded || !mapRef.current || mapInstance.current) return;
    window.ymaps.ready(() => {
      mapInstance.current = new window.ymaps.Map(mapRef.current, {
        center: DESTINATION,
        zoom: 12,
        controls: ["zoomControl", "routePanelControl"],
      });
      // Маркер СНТ
      mapInstance.current.geoObjects.add(
        new window.ymaps.Placemark(DESTINATION, {
          balloonContent: "СНТ Речицы",
        }, {
          preset: "islands#redDotIcon"
        })
      );
      // Панель маршрута
      routePanelRef.current = mapInstance.current.controls.get("routePanelControl");
      routePanelRef.current.routePanel.state.set({
        type: "auto",
        fromEnabled: true,
        toEnabled: false,
        to: DESTINATION,
      });
    });
    // eslint-disable-next-line
  }, [ymapsLoaded]);

  // Обновление маршрута без пересоздания карты
  useEffect(() => {
    if (routePanelRef.current) {
      routePanelRef.current.routePanel.state.set({ from });
    }
  }, [from]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Введите адрес отправления");
      return;
    }
    setFrom(input.trim());
  };

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8 text-cyan-700">Как добраться до СНТ «Речицы»</h1>
      <form onSubmit={handleSubmit} className="mb-6 flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Введите адрес отправления (например, Конаково, Тверь, Москва)"
          className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-1/2 transition"
        />
        <button
          type="submit"
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
        >
          Построить маршрут
        </button>
      </form>
      {error && <div className="text-red-600 mb-4">{error}</div>}
      <div ref={mapRef} className="w-full h-[480px] rounded-xl shadow bg-cyan-50" />
      <div className="mt-4 text-gray-700 text-sm">
        <b>Адрес СНТ «Речицы»:</b> Тверская область, Конаковский район, деревня Речицы<br/>
        Координаты: 56.728767, 36.827567
      </div>
    </main>
  );
}
