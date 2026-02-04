"use client";
import React, { useState, useEffect } from "react";

export interface NewsItem {
  id: string;
  title: string;
  description: string;
  date: string; // ISO date (YYYY-MM-DD) или формат, который вы используете
}

export default function Home() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Запрашиваем маршрут API без .ts
    fetch("http://localhost:9090", { method: "GET" })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json() as Promise<NewsItem[]>;
      })
      .then((data) => setNews(data))
      .catch(() => setError("Не удалось загрузить новости"))
      .finally(() => setLoading(false));
  }, []);

  const filteredNews = news.filter((item) => {
    const q = search.toLowerCase();
    const matchesText =
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);
    const matchesDate = date ? item.date === date : true;
    return matchesText && matchesDate;
  });

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6 text-cyan-700">Главная</h1>

      <div className="bg-cyan-50 rounded-xl p-6 mb-8 shadow flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          placeholder="Поиск по новостям..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
          className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-1/2 transition"
        />
        <input
          type="date"
          title="Поиск по дате"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
          className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-1/4 transition"
        />
        <button
          onClick={() => {
            setSearch("");
            setDate("");
          }}
          className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition"
        >
          Сбросить
        </button>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-cyan-800">Новости</h2>
        {loading && <div className="text-cyan-600">Загрузка...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && (
          filteredNews.length === 0 ? (
            <div className="text-cyan-600">Новостей не найдено.</div>
          ) : (
            <ul className="space-y-6">
              {filteredNews.map((item) => (
                <li key={item.id} className="bg-white rounded-xl shadow p-6 border-l-4 border-cyan-400">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <span className="text-lg font-bold text-cyan-700">{item.title}</span>
                    <span className="text-cyan-500 text-sm mt-2 md:mt-0">{item.date}</span>
                  </div>
                  <p className="text-gray-700">{item.description}</p>
                </li>
              ))}
            </ul>
          )
        )}
      </section>
    </main>
  );
}
