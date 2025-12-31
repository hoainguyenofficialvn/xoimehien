import React from 'react';
import { MENU_ITEMS, APP_IMAGES } from '../constants';
import { Phone, ArrowRight } from 'lucide-react';

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-brand-light/20 relative scroll-mt-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-4">Thực Đơn Mẹ Hiền</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Hương vị truyền thống, nguyên liệu tươi sạch. Mời bạn chọn món!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-[2rem] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row gap-6 border border-transparent hover:border-brand-green/20 group">
              {/* Image Container */}
              <div className="w-full sm:w-32 h-32 flex-shrink-0 relative overflow-hidden rounded-2xl">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {item.badge && (
                  <div className="absolute top-0 left-0 bg-brand-accent text-white text-[10px] font-bold px-3 py-1 rounded-br-xl uppercase tracking-wider shadow-sm">
                    {item.badge}
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-grow flex flex-col justify-center">
                <div className="flex justify-between items-baseline mb-2">
                  <h3 className="font-display font-bold text-xl text-brand-dark">{item.name}</h3>
                  <span className="font-bold text-brand-green text-lg whitespace-nowrap ml-4">{item.price.toLocaleString('vi-VN')}đ</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer within Menu - Redesigned with Image */}
        <div className="mt-20">
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-brand-green/10 max-w-5xl mx-auto overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="flex flex-col md:flex-row h-full">
              
              {/* Text Content */}
              <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center text-left">
                <span className="inline-block px-4 py-1.5 bg-brand-light text-brand-green font-bold text-sm rounded-full w-fit mb-4">
                  Dành cho Sự Kiện & Tiệc
                </span>
                <h3 className="font-display font-black text-3xl md:text-4xl text-brand-dark mb-4 leading-tight">
                  Bạn muốn đặt <br/> số lượng lớn?
                </h3>
                <p className="text-gray-500 mb-8 text-lg leading-relaxed">
                  Mẹ Hiền nhận đặt xôi cho tiệc, sự kiện, sinh nhật, từ thiện. Đảm bảo nóng hổi, đóng gói chỉn chu và giao đúng giờ.
                </p>
                <a href="tel:0353857799" className="inline-flex items-center justify-center gap-3 bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand-green/30 w-full sm:w-fit group">
                  <Phone size={20} />
                  <span>Gọi 0353.857.799</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 min-h-[300px] relative">
                <div className="absolute inset-0 bg-brand-dark/10 z-10"></div>
                <img 
                  src={APP_IMAGES.BULK_ORDER_BIG}
                  alt="Tiệc xôi" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};