import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Founder } from './components/Founder';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { ZaloWidget } from './components/ZaloWidget';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-warm-bg flex flex-col font-sans transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Story />
        <Menu />
        <Founder />
      </main>
      <Footer />
      <ZaloWidget />
    </div>
  );
}

export default App;