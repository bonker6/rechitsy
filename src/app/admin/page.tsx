"use client";
import { useState, useEffect } from "react";
import type { newsItem } from "@/types/newsType";
import { signIn, useSession, SessionProvider, signOut } from "next-auth/react";
import { useApi } from "@/hooks/useApi"

export default function AdminPage() {
  const { data: session, status } = useSession()
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const api = useApi()

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const result = await signIn("credentials", {
    login: login,
    password: password,
    redirect: false,
  });

  if (result?.error) {
    setError("Неверный логин или пароль");
  } else {
    window.location.href = "/admin"; 
  }
};

  const  handleLogout = async() => {
    await signOut({ 
      callbackUrl: "/", 
      redirect: true
    });
  };

  // --- Новости ---
  const [news, setNews] = useState<newsItem[]>([]);
  const [form, setForm] = useState({ title: "", date: "", description: "" });
  const [editId, setEditId] = useState<number | null>(null);

  // Загрузка новостей из БД при инициализации
useEffect(() => {
  api.get("http://localhost/api/news")
    .then((res) => {

      const data = Array.isArray(res.data) ? res.data : [];
      setNews(data);
    })
    .catch((err) => {
      console.error(err);
      setError("Не удалось загрузить новости");
      setNews([]); 
    })
    .finally(() => {
      setLoading(false);
    });
}, [api]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.title || !form.date || !form.description) return;
    if (editId) {
      await api.put("http://localhost/api/news/", { ...form, id: editId});
      setNews(news.map(n => n.id === editId ? { ...n, ...form,} : n));
      setEditId(null);
    } else { // отпправка формы новостей в БД
      await api.post("http://localhost/api/news/",
        { ...form}
      )
      setNews([
        ...news,
        { ...form, id: Date.now() },
      ]);
    }
    setForm({ title: "", date: "", description: "" });
  };

  const handleEdit = (id: number) => {
    const n = news.find(n => n.id === id);
    if (n) {

      setForm({ title: n.title, date: n.date, description: n.description });
      setEditId(id);
    }
  };

  const handleDelete = async (id: number) => {
    setNews(news.filter(n => n.id !== id));
    await api.delete("http://localhost/api/news/", {
      data: { id }
    });
    setEditId(null);
    setForm({ title: "", date: "", description: "" });
  };

  if (!session) {
    return (
    <SessionProvider>
      <main className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-6 text-cyan-700">Вход в админку</h1>
        <form onSubmit={handleLogin} className="bg-cyan-50 rounded-xl p-6 shadow flex flex-col gap-4 w-full max-w-sm">
          <input
            type="text"
            placeholder="Логин"
            value={login}
            onChange={e => setLogin(e.target.value)}
            className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
          />
          {status == "loading" ? <div className="text-blue-600 text-sm">Проверка доступа...</div> : null}
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition">Войти</button>
        </form>
      </main>
      </SessionProvider>
    );
  }

  return (
    <main>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-cyan-700">Админка: Новости</h1>
        <button onClick={handleLogout} className="bg-gray-200 text-red-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition">Выйти</button>
      </div>
      <form onSubmit={handleSubmit} className="bg-cyan-50 rounded-xl p-6 mb-8 shadow flex flex-col gap-4 max-w-xl">
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Заголовок"
          className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <input
          name="date"
          type="date"
          title="*"
          value={form.date}
          onChange={handleChange}
          className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Описание"
          className="border border-cyan-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition min-h-[80px]"
        />
        <div className="flex gap-2">
          <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition">
            {editId ? "Сохранить" : "Добавить"}
          </button>
          {editId && (
            <button type="button" onClick={() => { setEditId(null); setForm({ title: "", date: "", description: "" }); }} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition">
              Отмена
            </button>
          )}
        </div>
      </form>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-cyan-800">Список новостей</h2>
        {loading && <div className="text-cyan-600">Загрузка...</div>}
        {error && <div className="text-red-600">{error}</div>}
        {!loading && !error && (
          news?.length === undefined ? (
            <div className="text-cyan-600">Новостей нет.</div>
          ) : (
            <ul className="space-y-6">
              {news.map((n) => (
                <li key={n.id} className="bg-white rounded-xl shadow p-6 border-l-4 border-cyan-400 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <div>
                    <div className="text-lg font-bold text-cyan-700">{n.title}</div>
                    <div className="text-cyan-500 text-sm">{n.date}</div>
                    <div className="text-gray-700 mt-2 break-all">{n.description}</div>
                  </div>
                  <div className="flex gap-2 mt-2 md:mt-0">
                    <button onClick={() => handleEdit(n.id)} className="bg-cyan-100 text-cyan-700 px-3 py-1 rounded-lg hover:bg-cyan-200 transition">Редактировать</button>
                    <button onClick={() => handleDelete(n.id)} className="bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200 transition">Удалить</button>
                  </div>
                </li>
              ))}
            </ul>
          )
        )}
      </section>
    </main>
  );
}
