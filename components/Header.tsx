import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Phone } from 'lucide-react';
import { APP_IMAGES } from '../constants';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    // Only scroll if it's an anchor link
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'Câu Chuyện', href: '#story' },
    { name: 'Liên Hệ', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4 flex justify-center`}
      >
        <div className={`
          flex items-center justify-between w-full max-w-6xl rounded-full px-4 md:px-6 py-2 md:py-3 transition-all duration-300
          ${isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-soft border border-brand-green/10' : 'bg-white/60 backdrop-blur-sm'}
        `}>
          {/* Logo Image */}
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group"
          >
             <img 
               src={APP_IMAGES.LOGO}
               alt="Logo Xôi Mẹ Hiền" 
               className="h-20 md:h-24 w-auto object-contain rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300"
             />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-bold text-gray-600 hover:text-brand-green transition-colors uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
            <a href="tel:0353857799" className="bg-brand-green text-white px-5 py-2.5 rounded-full font-bold text-sm hover:bg-brand-dark transition-transform transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-brand-green/20">
              <Phone size={16} />
              0353.857.799
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-brand-green bg-white/50 p-2 rounded-full"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] bg-white transform transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-6 flex flex-col h-full bg-warm-bg">
          <div className="flex justify-between items-center mb-12">
            <span className="font-display font-black text-2xl text-brand-green">Menu</span>
            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 bg-white rounded-full text-brand-green shadow-sm">
              <X size={24} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-display font-bold text-brand-dark text-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-brand-green transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto mb-8">
            <a href="tel:0353857799" className="flex flex-col items-center justify-center w-full bg-brand-green text-white py-6 rounded-3xl font-bold text-xl shadow-xl hover:bg-brand-dark transition-colors">
              <Phone size={32} className="mb-2" />
              Gọi 0353.857.799
            </a>
          </div>
        </div>
      </div>
    </>
  );
};