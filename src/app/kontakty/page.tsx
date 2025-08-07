export default function Kontakty() {
  return (
    <main>
      <h1 className="text-3xl font-bold mb-8 text-cyan-700">Контакты</h1>
      <div className="grid gap-6 max-w-2xl mx-auto">
        <section className="bg-cyan-50 rounded-xl shadow p-6">
          <h2 className="text-xl font-semibold text-cyan-800 mb-2">СНТ «Речицы»</h2>
          <div className="mb-2 text-gray-800">Почта России: <span className="font-mono">171252 Конаково-2 А/Я 25</span></div>
          <div className="mb-2 text-gray-800">
            <span className="font-semibold">e-mail:</span> <a href="mailto:snt@rechitsy.ru" className="text-cyan-700 hover:underline">snt@rechitsy.ru</a><br/>
            <a href="mailto:snt.re4itsy@yandex.ru" className="text-cyan-700 hover:underline">snt.re4itsy@yandex.ru</a>
          </div>
          <div className="mb-2 text-gray-800">
            <span className="font-semibold">Вконтакте:</span> <a href="https://vk.com/konakovo5" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">https://vk.com/konakovo5</a>
          </div>
          <div className="mb-2 text-gray-800">
            <span className="font-semibold">Наш сайт:</span> <a href="https://rechitsy.ru/" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">https://rechitsy.ru/</a>
          </div>
          <div className="mb-2 text-gray-800">
            <span className="font-semibold">Телеграмм:</span> <a href="https://t.me/sntrechitsy" target="_blank" rel="noopener noreferrer" className="text-cyan-700 hover:underline">https://t.me/sntrechitsy</a>
          </div>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Председатель СНТ «Речицы»</h2>
          <div className="mb-1 text-gray-800 font-semibold">Калошин Виктор Геннадьевич</div>
          <div className="mb-2 text-gray-800">телефон: <a href="tel:+79099773930" className="text-cyan-700 hover:underline">+7 909 977-39-30</a></div>
        </section>
        <section className="bg-white rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Электрик</h2>
          <div className="mb-1 text-gray-800 font-semibold">Горячев Алексей Иванович</div>
          <div className="mb-2 text-gray-800">телефон: <a href="tel:+79040154045" className="text-cyan-700 hover:underline">+7 904 015-40-45</a></div>
        </section>
        <section className="bg-cyan-50 rounded-xl shadow p-6">
          <h2 className="text-lg font-semibold text-cyan-800 mb-2">Телефоны экстренных служб</h2>
          <div className="mb-2 text-gray-800 font-mono">112, 101, 102, 103</div>
          <div className="mb-2 text-gray-800">
            <span className="font-semibold">Ветеринарная служба района</span> <a href="tel:+74824232120" className="text-cyan-700 hover:underline">+7 (48242) 3-21-20</a>
          </div>
        </section>
      </div>
    </main>
  );
}
