"use client";
import { useState, useEffect } from "react";

type newsItem = {
  id: number;
  title: string;
  description: string;
  date: string;
}

export default function Home() {
  const [news, setNews] = useState<newsItem[]>([]);
  const [search, setSearch] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/main")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then(setNews)
      .catch(() => setError("Не удалось загрузить новости"))
      .finally(() => setLoading(false));
  }, []);
  

  const filteredNews = news.filter((item) => {
    const matchesText =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase());
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
          onChange={(e) => setSearch(e.target.value)}
          className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 w-full md:w-1/2 transition"
        />
        <input
          type="date"
          title="Поиск по дате"
          value={date}
          onChange={(e) => setDate(e.target.value)}
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
          (
            filteredNews.length === 0 ? (
              <div className="text-cyan-600">Новостей не найдено.</div>
            ) : (
              <ul className="space-y-6">
                {filteredNews.map((news) => (
                  <li key={news.id} className="bg-white rounded-xl shadow p-6 border-l-4 border-cyan-400">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <span className="text-lg font-bold text-cyan-700">{news.title}</span>
                      <span className="text-cyan-500 text-sm mt-2 md:mt-0">{news.date}</span>
                    </div>
                    <p className="text-gray-700">{news.description}</p>
                  </li>
                ))}
              </ul>
            )
          )
        )}
      </section>
    </main>
  );
}
