export default function Informaciya() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-8 text-cyan-700">Информация</h1>
      <section className="mb-8">
        <div className="bg-cyan-50 rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Руководство</h2>
          <ul className="space-y-2">
            <li><span className="font-semibold">Председатель:</span> Калошин Виктор Геннадьевич <span className="text-cyan-700">(тел. +7 901 128 57 81)</span></li>
            <li><span className="font-semibold">Электрик:</span> Горячев Алексей Иванович <span className="text-cyan-700">(тел. +7 904 015 40 45)</span></li>
          </ul>
        </div>
        <div className="bg-cyan-50 rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Члены правления</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Калошин Виктор Геннадьевич, улица 5 участок 3 <span className="text-cyan-700">(тел. +7 901 128 57 81)</span></li>
            <li>Филиппов Игорь Викторович, улица 16 участок 1 <span className="text-cyan-700">(тел. +7 904 003 49 66)</span></li>
            <li>Сафронов Александр Юрьевич, улица 18 участок 32 <span className="text-cyan-700">(тел. +7 905 602 86 70)</span></li>
            <li>Олин Максим Олегович, улица 20 участок 40 <span className="text-cyan-700">(тел. +7 985 232 69 10)</span></li>
            <li>Каримов Камиль Сайфулович, улица 5 участок 21</li>
            <li>Королева Марина Анатольевна, улица 9 участок 32 <span className="text-cyan-700">(тел. +7 904 357 06 72)</span></li>
          </ul>
        </div>
        <div className="bg-cyan-50 rounded-xl shadow p-6 mb-6">
          <h2 className="text-2xl font-semibold text-cyan-800 mb-4">Банковские реквизиты</h2>
          <div className="mb-2">Расчетный счет в ПАО «Сбербанк»</div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-gray-800 mb-2">
            <li><span className="font-semibold">ИНН/КПП:</span> 6911011248/694901001</li>
            <li><span className="font-semibold">ОГРН/ОГРНИП:</span> 1026901734705</li>
            <li><span className="font-semibold">БИК:</span> 042809679</li>
            <li><span className="font-semibold">Банк:</span> ТВЕРСКОЕ ОТДЕЛЕНИЕ N8607 ПАО СБЕРБАНК</li>
            <li><span className="font-semibold">Корр. счёт:</span> 30101810700000000679</li>
            <li><span className="font-semibold">Р/с:</span> 40703810063000000682</li>
          </ul>
          <div className="text-sm text-gray-700 mt-2">
            В назначении платежа указывать лицевой счет участка, назначение платежа (взносы или электричество), если это оплата за электричество — указывать прошлые и текущие показания. Список лицевых счетов участков доступен по ссылке.
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">Взносы (тариф 2023 года)</h2>
          <ul className="list-disc pl-6 mb-2">
            <li>842 рубля с сотки (5 052 руб. с участка 6 соток, 6 736 руб. с участка 8 соток)</li>
            <li>Целевые взносы: на замену проводов по центральным улицам — 1700 рублей; на частичную отсыпку улиц — 900 рублей</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 text-cyan-700 text-sm">
            <span>Финансово-экономическое обоснование взноса на 2023 год.</span>
            <span>Смета расходов на 2023 год</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">Взносы (тариф 2022 года)</h2>
          <ul className="list-disc pl-6 mb-2">
            <li>752 рубля с сотки (4 512 руб. с участка 6 соток, 6 016 руб. с участка 8 соток)</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 text-cyan-700 text-sm">
            <span>Финансово-экономическое обоснование взноса на 2022 год.</span>
            <span>Смета расходов на 2022 год</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">Взносы (тариф 2021 года)</h2>
          <ul className="list-disc pl-6 mb-2">
            <li>694 рубля с сотки (4 164 руб. с участка 6 соток, 5 552 руб. с участка 8 соток)</li>
            <li>Размер целевого взноса — 360 руб. с участка</li>
          </ul>
          <div className="flex flex-col md:flex-row gap-4 text-cyan-700 text-sm">
            <span>Финансово-экономическое обоснование взноса на 2021 год.</span>
            <span>Смета расходов на 2021 год</span>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">Взносы (тариф 2020 года)</h2>
          <ul className="list-disc pl-6 mb-2">
            <li>5400 рублей — членский взнос</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <div className="bg-cyan-50 rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">Оплата электричества (тарифы c декабря 2022 года)</h2>
          <ul className="list-disc pl-6 mb-2">
            <li>Однотарифный счетчик: <span className="font-semibold">4.94 руб.</span></li>
            <li>Двухтарифный счётчик:
              <ul className="pl-6">
                <li>День (T1): <span className="font-semibold">4.94 руб.</span></li>
                <li>Ночь (T2): <span className="font-semibold">3.36 руб.</span></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bg-cyan-50 rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">Оплата электричества (тарифы c июля 2021 года)</h2>
          <ul className="list-disc pl-6 mb-2">
            <li>Однотарифный счетчик: <span className="font-semibold">4.46 руб.</span></li>
            <li>Двухтарифный счётчик:
              <ul className="pl-6">
                <li>День (T1): <span className="font-semibold">4.46 руб.</span></li>
                <li>Ночь (T2): <span className="font-semibold">3.03 руб.</span></li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bg-cyan-50 rounded-xl shadow p-6 mb-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">Оплата электричества (тарифы 2020 года)</h2>
          <ul className="list-disc pl-6 mb-2">
            <li>Однотарифный счетчик: <span className="font-semibold">4.41 руб.</span></li>
            <li>Двухтарифный счётчик:
              <ul className="pl-6">
                <li>День (T1): <span className="font-semibold">4.41 руб.</span></li>
                <li>Ночь (T2): <span className="font-semibold">2.99 руб.</span></li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
