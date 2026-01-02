import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Founder } from './components/Founder';
import { Menu } from './components/Menu';
import { Reviews } from './components/Reviews';
import { Quality } from './components/Quality';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { ZaloWidget } from './components/ZaloWidget';
import { AiAssistant } from './components/AiAssistant';
import { ArrowUp } from 'lucide-react';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const checkScrollTop = () => {
      if (!showScrollTop && window.scrollY > 400) {
        setShowScrollTop(true);
      } else if (showScrollTop && window.scrollY <= 400) {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScrollTop]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`min-h-screen bg-warm-bg flex flex-col font-sans transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Story />
        <Menu />
        <Quality />
        <Founder />
        <Gallery />
        <Reviews />
      </main>
      <Footer />
      <ZaloWidget />
      <AiAssistant />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 z-40 bg-white text-brand-green border border-brand-green p-3 rounded-full shadow-lg transition-all duration-300 hover:bg-brand-green hover:text-white transform ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
        aria-label="Lên đầu trang"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
}

export default App;