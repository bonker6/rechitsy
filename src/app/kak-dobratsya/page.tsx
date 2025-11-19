"use client";
import { useEffect, useRef, useState } from "react";

const DESTINATION: [number, number] = [56.728767, 36.827567];

// Минимальные безопасные типы для используемых частей Yandex Maps
type YMapOptions = {
  center?: [number, number];
  zoom?: number;
  controls?: string[];
  [k: string]: unknown;
};

type PlacemarkProps = {
  balloonContent?: string;
  [k: string]: unknown;
};

type PlacemarkOptions = {
  preset?: string;
  [k: string]: unknown;
};

interface YMaps {
  ready: (cb: () => void) => void;
  Map: new (container: HTMLElement, opts: YMapOptions) => YMapInstance;
  Placemark: new (coords: [number, number], props?: PlacemarkProps, opts?: PlacemarkOptions) => PlacemarkInstance;
}

interface PlacemarkInstance {
  // оставляем минимально необходимые поля — подробности не нужны
  getBounds?: () => [number, number][];
}

interface GeoObjectsCollection {
  add: (obj: PlacemarkInstance) => void;
}

interface RoutePanelState {
  set: (obj: { [k: string]: unknown }) => void;
}

interface RoutePanel {
  state: RoutePanelState;
}

interface RoutePanelControl {
  routePanel: RoutePanel;
}

interface ControlsCollection {
  get: (name: string) => RoutePanelControl;
}

interface YMapInstance {
  geoObjects: GeoObjectsCollection;
  controls: ControlsCollection;
  destroy?: () => void;
}

declare global {
  interface Window {
    ymaps?: YMaps;
  }
}

export default function KakDobratsya() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstance = useRef<YMapInstance | null>(null);
  const routePanelRef = useRef<RoutePanelControl | null>(null);
  const [from, setFrom] = useState<string>("");
  const [input, setInput] = useState<string>("");
  const [ymapsLoaded, setYmapsLoaded] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.ymaps) {
      setYmapsLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?lang=ru_RU&apikey=1d251639-e01e-4a4a-a3ec-652334aa5f86";
    script.async = true;
    script.onload = () => setYmapsLoaded(true);
    document.body.appendChild(script);
    return () => {
      // не удаляем script принудительно
    };
  }, []);

  useEffect(() => {
    if (!ymapsLoaded || !mapRef.current || mapInstance.current) return;
    window.ymaps!.ready(() => {
      const map = new window.ymaps!.Map(mapRef.current as HTMLElement, {
        center: DESTINATION,
        zoom: 12,
        controls: ["zoomControl", "routePanelControl"],
      });
      map.geoObjects.add(
        new window.ymaps!.Placemark(
          DESTINATION,
          { balloonContent: "СНТ Речицы" },
          { preset: "islands#redDotIcon" }
        )
      );
      const routePanel = map.controls.get("routePanelControl");
      routePanel.routePanel.state.set({
        type: "auto",
        fromEnabled: true,
        toEnabled: false,
        to: DESTINATION,
      });
      mapInstance.current = map;
      routePanelRef.current = routePanel;
    });
    return () => {
      if (mapInstance.current && typeof mapInstance.current.destroy === "function") {
        mapInstance.current.destroy();
        mapInstance.current = null;
      }
    };
  }, [ymapsLoaded]);

  useEffect(() => {
    if (routePanelRef.current) {
      routePanelRef.current.routePanel.state.set({ from });
    }
  }, [from]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) {
      setError("Введите адрес отправления");
      return;
    }
    setError("");
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
        <b>Адрес СНТ «Речицы»:</b> Тверская область, Конаковский район, деревня Речицы<br />
        Координаты: 56.728767, 36.827567
      </div>
    </main>
  );
}
