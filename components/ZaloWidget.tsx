import React, { useState } from 'react';
import { X, Phone, MessageCircle } from 'lucide-react';

const ZaloIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 48 48" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M24 4C14.0589 4 6 12.0589 6 22C6 26.9706 8.01472 31.7059 11.8235 34.8235C11.3529 36.6471 10.1176 39.5294 8 42.1176C8 42.1176 14.8235 42.3529 19.5294 39.0588C21 39.7647 22.4706 40 24 40C33.9411 40 42 31.9411 42 22C42 12.0589 33.9411 4 24 4Z" fill="currentColor"/>
    <path d="M15 19H18V26H21V29H15V19Z" fill="white"/>
    <path d="M26.4943 19.3364C26.1557 19.0061 25.6883 18.9103 25.2289 18.9818C24.7695 19.0534 24.3638 19.2858 24.1207 19.6763C23.6338 20.459 23.3333 21.3789 23.3333 22.3333C23.3333 24.1743 24.8257 25.6667 26.6667 25.6667C26.942 25.6667 27.2081 25.6322 27.4632 25.5669L24.8876 28.5376C24.6214 28.8447 24.6214 29.3101 24.8876 29.6172C25.1537 29.9244 25.5852 29.9244 25.8514 29.6172L30.3333 24.4444V29H33V19H29.6667L26.4943 19.3364Z" fill="white"/>
  </svg>
);

export const ZaloWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const contacts = [
    { name: 'Hotline 1', phone: '035.385.7799', zaloId: '0353857799' },
    { name: 'Hotline 2', phone: '0972.158.079', zaloId: '0972158079' }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      
      {/* Popup Contact List */}
      <div 
        className={`bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 origin-bottom-right border border-blue-100 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-8 pointer-events-none'
        }`}
        style={{ width: '280px' }}
      >
        <div className="bg-[#0068FF] p-4 flex justify-between items-center">
          <div className="text-white font-bold flex items-center gap-2">
            <MessageCircle size={20} />
            <span>Chat Zalo</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="p-2 bg-slate-50">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={`https://zalo.me/${contact.zaloId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3 hover:bg-white rounded-xl transition-all border border-transparent hover:border-blue-100 hover:shadow-sm group mb-1 last:mb-0"
            >
              <div className="bg-blue-100 text-[#0068FF] p-2.5 rounded-full group-hover:bg-[#0068FF] group-hover:text-white transition-colors">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{contact.name}</p>
                <p className="font-bold text-gray-800 text-lg font-display">{contact.phone}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center bg-[#0068FF] hover:bg-blue-700 text-white p-0 w-16 h-16 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 ${isOpen ? 'rotate-90' : 'animate-bounce-slow'}`}
      >
        {isOpen ? (
          <X size={28} />
        ) : (
          <>
            <ZaloIcon size={32} />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};