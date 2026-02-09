export default function estimate() {
    return (
<main className="container mx-auto p-6">
  <section id="income-expense-budget" className="mb-8 bg-white rounded-xl shadow p-6">
    <h1 className="text-2xl font-bold text-cyan-800 mb-6">Приходно-расходная смета на 2023 год</h1>
    
    {/* Доходы (планируемые) */}
    <div className="mb-10">
      <h2 className="text-xl font-bold text-cyan-600 mb-4">Доходы (планируемые)</h2>
      
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-cyan-50">
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300 w-16">
                №
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                Статья
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                Размер членского взноса с сотки, руб.
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                Сумма членского взноса с участка, руб.
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider">
                Общая сумма членских взносов, руб.
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Строка 1.1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                1.1.
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
                Участков по 6 соток 518
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                842
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                5 052
              </td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                2 616 936
              </td>
            </tr>
            
            {/* Строка 1.2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                1.2.
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
                Участков по 8 соток 27
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                842
              </td> 
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                6 736
              </td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                181 872
              </td>
            </tr>
            
            {/* Итого членские взносы */}
            <tr className=" font-bold">
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300" colSpan={4}>
                Итого членские взносы
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">
                2 798 808
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Иные доходы */}
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-cyan-50">
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300 w-16">
                №
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                Иные доходы
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                в месяц, руб.
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                кол-во месяцев
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider">
                общая сумма, руб.
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Строка 2.1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm font-medium text-gray-900 border-r border-gray-300">
                2.1.
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
                Оплата операторами связи за пользование трансформатором СНТ
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                3 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                12
              </td>
              <td className="px-4 py-3 text-sm font-medium text-gray-900 text-right">
                36 000
              </td>
            </tr>
            
            {/* Итого иные доходы */}
            <tr className="font-bold">
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300" colSpan={4}>
                Итого иные доходы
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">
                36 000
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Итого доходы */}
      <div className="p-4 rounded-lg border border-blue-200">
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-cyan-800">Итого доходы (планируемые)</span>
          <span className="text-2xl font-bold text-green-700">2 834 808 руб.</span>
        </div>
      </div>
    </div>
    
    {/* Расходы (планируемые) */}
    <div className="mb-10">
      <h2 className="text-xl font-bold text-cyan-600 mb-4">Расходы (планируемые):</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-cyan-50">
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                Наименование статьи
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                сумма в месяц, руб.
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                сумма в год, руб.
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider">
                сумма с участка, руб.
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Заголовок 1 */}
            <tr className="">
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300">
                1 Расходы на административные нужды
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300 text-right">
                97 540,5
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300 text-right">
                1 170 486
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                2 147,68
              </td>
            </tr>
            
            {/* 1.1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.1. Оплата труда председателя
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                30 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                360 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                660,55
              </td>
            </tr>
            
            {/* 1.2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.2. Оплата труда электрика
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                24 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                288 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                528,44
              </td>
            </tr>
            
            {/* 1.3 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.3. Обязательные взносы с ФОТ
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                16 200
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                194 400
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                356,70
              </td>
            </tr>
            
            {/* 1.4 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.4. Бухгалтерское обслуживание (в т.ч. услуги по сдаче отчетности)
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                17 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                204 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                374,31
              </td>
            </tr>
            
            {/* 1.5 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.5. Банковское обслуживание (ведение расчетного счета в ПАО Сбербанк)
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                4 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                48 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                88,07
              </td>
            </tr>
            
            {/* 1.6 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.6. ЭЦП, ПО, IT-оборудование, сотовая связь, аренда а/я
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                2 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                24 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                44,04
              </td>
            </tr>
            
            {/* 1.7 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.7. Программное обеспечения для ведения учета 1С Садовод
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                2 340,5
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                28 086
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                51,53
              </td>
            </tr>
            
            {/* 1.8 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.8. Документооборот, информирование садоводов (сайт, стенд, объявления и т.п.), канцтовары
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                2 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                24 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                44,04
              </td>
            </tr>
            
            {/* Заголовок 2 */}
            <tr className="bg-gray-700">
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300">
                2. Расходы на содержание объектов общего пользования
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300 text-right">
                156 193,5
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300 text-right">
                1 664 322
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                3 053,80
              </td>
            </tr>
            
            {/* 2.1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.1. Сдвигание снега в зимнее время (цена указана за 5 месяцев, ноябрь-март)
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                30 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                150 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                275,23
              </td>
            </tr>
            
            {/* 2.2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.2. Вывоз ТКО
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                25 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                300 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                550,46
              </td>
            </tr>
            
            {/* 2.3 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.3. Уборка контейнерной площадки
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                8 300
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                99 600
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                182,75
              </td>
            </tr>
            
            {/* 2.4 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.4. Расходы э/э на общие нужды, оплата потерь э/э и задолженности перед Атомэнергосбытом
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                50 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                600 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                1 100,92
              </td>
            </tr>
            
            {/* 2.5 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.5. Приобретение боксов учета ЭЭ по улицам
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                18 500
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                222 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                407,34
              </td>
            </tr>
            
            {/* 2.6 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.6. Плановое ТО трансформатора
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                1 250
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                15 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                27,52
              </td>
            </tr>
            
            {/* 2.7 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.7. Оплата услуг по охране здания правления
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                3 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                36 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                66,06
              </td>
            </tr>
            
            {/* 2.8 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.8. Содержание территории СНТ
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                7 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                84 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                154,13
              </td>
            </tr>
            
            {/* 2.9 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                2.9. Непредвиденные расходы
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                13 143,5
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                157 722
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                289,40
              </td>
            </tr>
            
            {/* Итого расходы */}
            <tr className="bg-gray-700 font-bold">
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300">
                Итого расходы (планируемые)
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 text-right">
                —
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-300 text-right">
                2 834 808
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 text-right">
                —
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    
    {/* Целевые взносы (планируемые) */}
    <div>
      <h2 className="text-xl font-bold text-cyan-600 mb-4">Целевые взносы (планируемые)</h2>
      
      <div className="overflow-x-auto mb-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-cyan-50">
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                Наименование статьи
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
                сумма в год, руб.
              </th>
              <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider">
                сумма с участка, руб.
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Заголовок 1 */}
            <tr className="bg-gray-600">
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300">
                1 Целевые взносы*
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 border-r border-gray-300 text-right">
                2 888 500
              </td>
              <td className="px-4 py-3 text-sm font-bold text-gray-900 text-right">
                5 300,00
              </td>
            </tr>
            
            {/* 1.1 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.1. Замена проводов по 18, 19, 20 и 21 улицах¹
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                926 500
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                1 700,00
              </td>
            </tr>
            
            {/* 1.2 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.2. Шлагбаум (подготовка площадки, закупка оборудования, установка шлагбаума, охрана на 3 месяца с целью стабилизации работы и проезда)²
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                599 500
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                1 100,00
              </td>
            </tr>
            
            {/* 1.3 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.3. Отсыпка центральных дорог (100 м3 шебня + погрузчик)³
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                872 000
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                1 600,00
              </td>
            </tr>
            
            {/* 1.4 */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 text-sm text-gray-800 pl-8 border-r border-gray-300">
                1.4. Частичная отсыпка улиц (100 м3 шебня + погрузчик)₄
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300 text-right">
                490 500
              </td>
              <td className="px-4 py-3 text-sm text-gray-800 text-right">
                900,00
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* Примечания */}
      <div className=" p-4 rounded-lg border">
        <p className="text-sm text-gray-800 mb-2">
          <span className="font-bold">*</span>Указанные целевые взносы не являются неотъемлемой частью сметы. Голосование по ним происходит отдельно по каждому целевому взносу. При этом в случае принятия общим собранием самостоятельного решения по реализации мероприятий (работ) и утверждению целевого взноса, соответствующий целевой взнос становится неотъемлемой частью сметы.
        </p>
        <ul className="text-sm text-gray-800 space-y-1">
          <li>1. Целевой взнос устанавливается в случае принятия общим собранием решения по вопросу 9.2 повестки дня.</li>
          <li>2. Целевой взнос устанавливается в случае принятия общим собранием решения по вопросу 9.3 повестки дня.</li>
          <li>3. Целевой взнос устанавливается в случае принятия общим собранием решения по вопросу 9.4 повестки дня.</li>
          <li>4. Целевой взнос устанавливается в случае принятия общим собранием решения по вопросу 9.5 повестки дня.</li>
        </ul>
      </div>
    </div>
  </section>
</main>
    );
}