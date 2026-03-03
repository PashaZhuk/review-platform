import './App.css';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { Location } from './components/Location'; // Добавлен импорт карты
import { ContactForm } from './components/ContactForm';


function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-indigo-500 selection:text-white">
      {/* Навигация */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">
            Правда<span className="text-indigo-600">Орг</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
            <a href="#catalog" className="hover:text-indigo-600 transition-colors">Организации</a>
            <a href="#location" className="hover:text-indigo-600 transition-colors">Поиск на карте</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Добавить отзыв</a>
          </div>
        </div>
      </nav>

      <main>
        {/* Главный экран */}
        <Hero />

        {/* Каталог с живым поиском */}
        <Catalog />

        {/* Карта с поиском Яндекса */}
        <Location />

        {/* Форма добавления отзыва */}
        <ContactForm />
      </main>

      {/* Компонент аналитики */}
      

      <footer className="bg-slate-900 py-12 text-center text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-4 text-white font-bold tracking-tighter uppercase">
            Правда<span className="text-indigo-400">Орг</span>
          </div>
          <p>&copy; 2026 ПравдаОрг — честные отзывы о компаниях вашего города.</p>
          <p className="mt-2 text-slate-600 text-[10px] uppercase tracking-widest">
            Powered by Yandex Maps API & Vercel Analytics
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;