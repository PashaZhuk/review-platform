export const ContactForm = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-slate-900">Поделитесь мнением</h2>
        <p className="text-slate-500 mb-10 text-lg">Ваш опыт поможет другим сделать правильный выбор.</p>
        <form className="space-y-4">
          <input type="text" placeholder="Название организации" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-600 focus:bg-white transition-all outline-none" />
          <div className="flex gap-2 justify-center mb-4 py-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} type="button" className="text-3xl text-slate-300 hover:text-yellow-400 transition-colors">★</button>
            ))}
          </div>
          <textarea placeholder="Ваш отзыв" className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-indigo-600 focus:bg-white transition-all outline-none h-32"></textarea>
          <button className="w-full bg-indigo-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-indigo-500/30 hover:bg-indigo-700 transition-all transform active:scale-95">
            Опубликовать отзыв
          </button>
        </form>
        <p className="mt-6 text-xs text-slate-400">Публикуя отзыв, вы подтверждаете его достоверность.</p>
      </div>
    </section>
  );
};