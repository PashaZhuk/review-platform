import './App.css';
import { Hero } from './components/Hero';
import { Catalog } from './components/Catalog';
import { ContactForm } from './components/ContactForm';


function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-indigo-500 selection:text-white">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">
            Правда<span className="text-indigo-600">Орг</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-600">
            <a href="#catalog" className="hover:text-indigo-600 transition-colors">Популярные места</a>
            <a href="#contact" className="hover:text-indigo-600 transition-colors">Добавить отзыв</a>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <Catalog />
        <ContactForm />
      </main>

      

      <footer className="bg-slate-900 py-12 text-center text-slate-500 text-sm">
        <p>&copy; 2026 ПравдаОрг — честные отзывы о компаниях вашего города.</p>
      </footer>
    </div>
  );
}

export default App;