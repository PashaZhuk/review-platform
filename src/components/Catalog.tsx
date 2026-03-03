import { useState } from 'react';

const PLACES = [
  { id: 1, name: 'Ресторан "Grand Garden"', category: 'Рестораны', rating: '4.8', reviewsCount: '124', description: 'Изысканная кухня и отличный сервис.', img: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=1200' },
  { id: 2, name: 'Фитнес-клуб "Energy"', category: 'Спорт', rating: '4.5', reviewsCount: '89', description: 'Профессиональное оборудование и бассейн.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1200' },
  { id: 3, name: 'Кофейня "Roast & Bean"', category: 'Кафе', rating: '4.9', reviewsCount: '256', description: 'Лучший кофе в центре города.', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1200' }
];

export const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Функция для плавного скролла к форме
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredPlaces = PLACES.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    place.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="catalog" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight">Популярные организации</h2>
          <div className="max-w-2xl mx-auto relative">
            <input 
              type="text"
              placeholder="Поиск по названию или категории..."
              className="w-full px-8 py-5 rounded-2xl border-2 border-slate-200 focus:border-indigo-500 outline-none shadow-lg transition-all text-lg"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute right-6 top-5 text-2xl">🔍</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredPlaces.map((item) => (
            <div key={item.id} className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">★ {item.rating}</div>
              </div>
              <div className="p-8 flex flex-1 flex-col">
                <div className="text-indigo-600 text-xs font-bold uppercase mb-2">{item.category}</div>
                <h3 className="text-2xl font-bold mb-3">{item.name}</h3>
                <p className="text-slate-500 text-sm mb-6 flex-1">{item.description}</p>
                
                {/* ИЗМЕНЕНИЕ ТУТ: Добавили onClick */}
                <button 
                  onClick={scrollToContact}
                  className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all active:scale-95"
                >
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