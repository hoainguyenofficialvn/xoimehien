import React, { useState } from 'react';
import { MENU_ITEMS, APP_IMAGES } from '../constants';
import { Instagram, X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Lấy ảnh từ menu và ảnh chung để tạo thư viện
  const galleryImages = [
    { src: APP_IMAGES.HERO_MAIN, alt: "Xôi ngon nhất" },
    { src: MENU_ITEMS[0].image, alt: "Xôi mặn đặc biệt" },
    { src: APP_IMAGES.STORY_1, alt: "Bếp Mẹ Hiền" },
    { src: MENU_ITEMS[2].image, alt: "Xôi xá xíu" },
    { src: MENU_ITEMS[4].image, alt: "Xôi heo cháy tỏi" },
    { src: APP_IMAGES.BULK_ORDER_BIG, alt: "Đặt tiệc xôi" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
            <div>
                <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-2 block">Thư viện ảnh</span>
                <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark">Góc Bếp & Món Ngon</h2>
            </div>
            <a 
                href="https://www.facebook.com/theritomki" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-brand-dark transition-colors"
            >
                <Instagram size={20} />
                Theo dõi chúng tôi
            </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4 auto-rows-[200px]">
            {galleryImages.map((img, index) => (
                <div 
                    key={index} 
                    onClick={() => setSelectedImage(img.src)}
                    className={`relative overflow-hidden rounded-2xl group cursor-pointer ${
                        index === 0 ? 'col-span-2 row-span-2' : 
                        index === 3 ? 'col-span-2' : ''
                    }`}
                >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Hover Icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 pointer-events-none">
                        <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                            <ZoomIn className="text-white" size={24} />
                        </div>
                    </div>

                    <div className="absolute bottom-4 left-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <span className="text-white text-sm font-bold bg-brand-green/80 backdrop-blur-md px-3 py-1 rounded-full shadow-lg">
                            {img.alt}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors bg-white/10 p-2 rounded-full hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
            >
                <X size={32} />
            </button>
            <img 
                src={selectedImage} 
                alt="Full size" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl scale-95 animate-in zoom-in-95 duration-300"
                onClick={(e) => e.stopPropagation()} 
            />
        </div>
      )}
    </section>
  );
};