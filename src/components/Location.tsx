export const Location = () => {
  // Координаты центра поиска (Москва-Сити)
  const lat = 55.748022;
  const lon = 37.537028;

  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Поиск на карте</h2>
        
        <div className="max-w-2xl mx-auto mb-10">
          <p className="text-slate-500 italic">
            Используйте интерактивную карту Яндекса ниже, чтобы найти ближайшие кафе, офисы или сервисы и прочитать отзывы прямо там.
          </p>
        </div>
        
        <div className="w-full h-[550px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 border-8 border-slate-50 relative">
          <iframe 
            // Добавили text=организации и mode=search для активации поиска внутри карты
            src={`https://yandex.ru/map-widget/v1/?ll=${lon}%2C${lat}&z=14&mode=search&text=организации&sll=${lon}%2C${lat}`}
            width="100%" 
            height="100%" 
            frameBorder="0"
            title="Yandex Search Map"
          ></iframe>
        </div>
        
        <div className="mt-8">
          <p className="text-sm text-slate-400">
            * Карта использует актуальные данные Яндекс.Бизнеса
          </p>
        </div>
      </div>
    </section>
  );
};