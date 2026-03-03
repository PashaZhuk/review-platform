export const Hero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2000" 
          alt="Поиск организаций" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-transparent to-slate-900/90"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 drop-shadow-2xl">
          Честные отзывы <br/><span className="text-indigo-400">от реальных людей</span>
        </h1>
        <p className="text-gray-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
          Помогаем выбрать лучшие заведения и услуги на основе тысяч мнений. Узнайте правду об организациях города перед посещением.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#catalog" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-indigo-500/20 text-center">
            Найти организацию
          </a>
          <a href="#contact" className="bg-white text-slate-900 px-10 py-4 rounded-full font-bold transition-all hover:bg-slate-100 text-center">
            Написать отзыв
          </a>
        </div>
      </div>
    </section>
  );
};