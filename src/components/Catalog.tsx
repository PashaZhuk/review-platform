const PLACES = [
  {
    id: 1,
    name: 'Ресторан "Grand Garden"',
    rating: '4.8',
    reviewsCount: '124',
    category: 'Рестораны',
    description: 'Изысканная кухня и отличный сервис. Пользователи хвалят десертную карту и атмосферу в вечернее время.',
    img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 2,
    name: 'Фитнес-клуб "Energy"',
    rating: '4.5',
    reviewsCount: '89',
    category: 'Спорт',
    description: 'Профессиональное оборудование и бассейн. Из минусов отмечают большое количество людей в час пик.',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200'
  },
  {
    id: 3,
    name: 'Кофейня "Roast & Bean"',
    rating: '4.9',
    reviewsCount: '256',
    category: 'Кафе',
    description: 'Лучший кофе в центре города по мнению 80% посетителей. Быстрое обслуживание и уютные места для работы.',
    img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200'
  }
];

export const Catalog = () => {
  return (
    <section id="catalog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-slate-900 tracking-tight text-center">Популярные организации</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PLACES.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  ★ {item.rating}
                </div>
              </div>
              <div className="p-8 flex flex-1 flex-col">
                <div className="text-indigo-600 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">{item.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">{item.description}</p>
                <div className="flex justify-between items-center mb-6 pt-4 border-t border-slate-100">
                  <span className="text-slate-400 text-sm font-medium">{item.reviewsCount} отзывов</span>
                  <button className="text-indigo-600 font-bold hover:underline">Читать всё</button>
                </div>
                <button className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all transform active:scale-95">
                  Оставить отзыв
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};