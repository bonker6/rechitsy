export default function SnowClearingSchedule() {
    return (
    <main className="container mx-auto p-6">
  <section id="snow-cleaning-schedule" className="mb-8 bg-white rounded-xl shadow p-6">
    <h1 className="text-2xl font-bold text-cyan-800 mb-6">График чистки снега сезона 2023-2024</h1>
    
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="bg-cyan-50">
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
              План
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
              Факт
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
              Вид техники, очищаемые локации
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider border-r border-gray-300">
              Выполнение
            </th>
            <th scope="col" className="px-4 py-3 text-left text-xs font-bold text-cyan-700 uppercase tracking-wider">
              Стоимость
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Строка 1 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
              02.12.2023
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-r border-gray-300">
              02.12.2023
            </td>
            <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
              Погрузчик, все улицы
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm border-r border-gray-300">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full font-bold">
                X
              </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              17 000 ₽
            </td>
          </tr>
          
          {/* Строка 2 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
              -
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 italic border-r border-gray-300">
              04.12.2023
            </td>
            <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
              Погрузчик, все улицы (внепланово)
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm border-r border-gray-300">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full font-bold">
                X
              </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              17 000 ₽
            </td>
          </tr>
          
          {/* Строка 3 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
              16.12.2023
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-r border-gray-300">
              17.12.2023
            </td>
            <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
              Грейдер, центральные улицы (погрузчик, все улицы)
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm border-r border-gray-300">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full font-bold">
                X
              </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              17 000 ₽
            </td>
          </tr>
          
          {/* Строка 4 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
              28.12.2023
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-800 border-r border-gray-300">
              30.12.2023
            </td>
            <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
              Погрузчик, все улицы
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm border-r border-gray-300">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full font-bold">
                X
              </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              16 500 ₽
            </td>
          </tr>
          
          {/* Строка 5 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
              13.01.2024
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 italic border-r border-gray-300">
              —
            </td>
            <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
              Погрузчик, все улицы
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm border-r border-gray-300">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-800 rounded-full font-bold">
                —
              </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              0 ₽
            </td>
          </tr>
          
          {/* Строка 6 */}
          <tr className="hover:bg-gray-50">
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900 border-r border-gray-300">
              27.01.2024
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500 italic border-r border-gray-300">
              —
            </td>
            <td className="px-4 py-3 text-sm text-gray-800 border-r border-gray-300">
              Грейдер, центральные улицы
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm border-r border-gray-300">
              <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-500 rounded-full">
                ?
              </span>
            </td>
            <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
              —
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className="mt-6 pt-4 border-t border-gray-200">
      <div className="flex flex-wrap gap-4">
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-800 rounded-full font-bold mr-2">X</span>
          <span className="text-sm text-gray-700">Выполнено</span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-800 rounded-full font-bold mr-2">—</span>
          <span className="text-sm text-gray-700">Не выполнено</span>
        </div>
        <div className="flex items-center">
          <span className="inline-flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-500 rounded-full mr-2">?</span>
          <span className="text-sm text-gray-700">Запланировано</span>
        </div>
      </div>
    </div>
  </section>
</main>
    );
}