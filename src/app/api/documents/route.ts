import { NextResponse } from 'next/server';

export type DocumentItem = {
  title: string;
  url: string;
};

const documents: DocumentItem[] = [
  {
    title: 'Бланк квитанции для безналичной оплаты (бланк квитанции для оплаты взносов и электричества с реквизитами Сбербанк)',
    url: 'https://rechitsy.ru/wp-content/uploads/2022/05/sber.pdf',
  },
  {
    title: 'Устав СНТ «Речицы»',
    url: 'https://rechitsy.ru/charter/',
  },
  {
    title: 'Регламент пользования электросетями СНТ «Речицы»',
    url: 'https://rechitsy.ru/electro_low/',
  },
  {
    title: 'Положение о противопожарной безопасности',
    url: 'https://rechitsy.ru/firerule/',
  },
  {
    title: 'График чистки снега 2023-2024',
    url: 'https://rechitsy.ru/snow_clearing_schedule_2023_2024/',
  },
  {
    title: 'Выписка из протокола общего собрания от 10.11.2023',
    url: 'https://rechitsy.ru/meetingprotocol10112023/',
  },
  {
    title: 'Приходно-расходная смета 2023 года',
    url: 'https://rechitsy.ru/estimate_2023/',
  },
  {
    title: 'Выписка из протокола общего собрания от 07.05.2022',
    url: 'https://rechitsy.ru/meetingprotocol07052022/',
  },
  {
    title: 'Приходно-расходная смета 2022 года',
    url: 'https://rechitsy.ru/cost2022/',
  },
  {
    title: 'Выписка из протокола общего собрания от 22.11.2021',
    url: 'https://rechitsy.ru/fullvoteresult/',
  },
  {
    title: 'Согласие на строительство (форма согласия разрешения на строительство)',
    url: 'https://rechitsy.ru/wp-content/uploads/2021/01/obrazec_soglasije_na_stroitelstvo.pdf',
  },
];

export async function GET() {
  return NextResponse.json(documents);
}
