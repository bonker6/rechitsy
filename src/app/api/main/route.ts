import { NextResponse } from 'next/server';

export type newsItem = {
    id: number;
    title: string;
    description: string;
    date: string;
}

const news: newsItem[] = [
  {
    id: 1,
    title: "Открытие сезона",
    date: "2024-06-01",
    description: "Торжественное открытие летнего сезона на базе отдыха! Ждём всех гостей.",
  },
  {
    id: 2,
    title: "Обновление инфраструктуры",
    date: "2024-05-20",
    description: "Завершён ремонт пирса и благоустройство территории.",
  },
];

export async function GET() {
    return NextResponse.json(news);
}
export async function POST() {
  const { news } = await request.json();
  // Обновление данных новостей на сервере
  return NextResponse.json({ message: 'Данные новостей обновлены' });
}
