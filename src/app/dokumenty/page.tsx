"use client";
import { useEffect, useState } from "react";

type DocumentItem = {
  title: string;
  url: string;
};

export default function Dokumenty() {
  const [docs, setDocs] = useState<DocumentItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/documents")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка загрузки");
        return res.json();
      })
      .then(setDocs)
      .catch(() => setError("Не удалось загрузить документы"))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8 text-cyan-700">Документы</h1>
      <section className="bg-white/80 rounded-xl shadow p-6 max-w-2xl mx-auto">
        {loading && <div className="text-cyan-600">Загрузка...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && (
          <ul className="divide-y divide-cyan-100">
            {docs.map((doc) => (
              <li key={doc.url} className="py-4 flex items-center gap-3">
                <span className="inline-block text-cyan-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7 7V3a1 1 0 011-1h8a1 1 0 011 1v18a1 1 0 01-1 1H8a1 1 0 01-1-1v-4" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 17l-4-4m0 0l4-4m-4 4h14" /></svg>
                </span>
                <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-cyan-800 hover:text-cyan-600 hover:underline transition font-medium">{doc.title}</a>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
