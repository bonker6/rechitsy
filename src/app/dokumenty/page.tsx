"use client";
import { useEffect, useState } from "react";
import type { DocumentItem } from "@/types/docsType";


export default function Dokumenty() {

  return (
    <main>
      <h1 className="text-3xl font-bold mb-8 text-cyan-700">Устав СНТ «Речицы»</h1>
      <section className="mb-8 bg-cyan-50 rounded-xl shadow p-6">
        <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Содержание</h2>
        <ol className="list-decimal pl-6 space-y-1 text-cyan-300">
          <li><a href="ustav" className="hover:underline text-cyan-700">Устав СНТ «Речицы»</a></li>
          <li><a href="dokumenty/electro_low" className="hover:underline text-cyan-700">Регламент пользования электросетями СНТ «Речицы»</a></li>
          <li><a href="dokumenty/firerule" className="hover:underline text-cyan-700">Положение о противопожарной безопасности</a></li>
          <li><a href="dokumenty/snow_cleaning_schedule" className="hover:underline text-cyan-700">График чистки снега 2023-2024</a></li>
          <li><a href="dokumenty/meetingprotocol10112023" className="hover:underline text-cyan-700">Выписка из протокола общего собрания от 10.11.2023</a></li>
          <li><a href="dokumenty/estimate" className="hover:underline text-cyan-700">Приходно-расходная смета 2023 года</a></li>
        </ol>
      </section>
    </main>
  );
}
