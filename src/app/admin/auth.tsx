'use client'

import {useState, useEffect} from 'react'

export default function AdminAuth() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [authorized, setAuthorized] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        if (login === 'admin' && password === '1234') {
            setAuthorized(true);
            setError('');
            if (typeof window !== 'undefined') {
                localStorage.setItem('admin_auth', '1');
            }
        } else {
            setError('Неверный логин или пароль');
        }
    }

    const handleLogout = () => {
        setAuthorized(false);
        setLogin('');
        setPassword('');
        if (typeof window !== 'undefined') {
            localStorage.removeItem('admin_auth');
        }
    }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isAuth = localStorage.getItem("admin_auth") === "1";
      setAuthorized(isAuth);
    }
  }, []);

    return (
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
            {error && <div className="text-red-600 text-sm">{error}</div>}
            <button type="submit" className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-700 transition">Войти</button>
            </form>
        </main>
    )
}