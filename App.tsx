import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { ZaloWidget } from './components/ZaloWidget';

function App() {
  return (
    <div className="min-h-screen bg-warm-bg flex flex-col font-sans">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Story />
        <Menu />
      </main>
      <Footer />
      <ZaloWidget />
    </div>
  );
}

export default App;