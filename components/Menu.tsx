import React from 'react';
import { MENU_ITEMS, APP_IMAGES } from '../constants';
import { Phone, ArrowRight, ShoppingBag, Star } from 'lucide-react';

export const Menu: React.FC = () => {
  return (
    <section id="menu" className="py-24 bg-brand-light/20 relative scroll-mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2E7D32 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display font-black text-4xl md:text-6xl text-brand-dark mb-6">Thực Đơn Mẹ Hiền</h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Được nấu từ nếp cái nếp dẻo thơm, gói trong lá chuối tươi giữ nhiệt và hương thơm tự nhiên. 
            <br className="hidden md:block" /> Mời bạn chọn món ngon cho bữa sáng nay!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MENU_ITEMS.map((item) => (
            <div key={item.id} className="group bg-white rounded-[2rem] p-4 shadow-card hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full relative overflow-hidden hover:-translate-y-2">
              
              {/* Badge */}
              {item.badge && (
                <div className="absolute top-4 left-4 z-20 bg-brand-accent text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg flex items-center gap-1">
                  <Star size={10} fill="currentColor" />
                  {item.badge}
                </div>
              )}

              {/* Image Area */}
              <div className="relative h-56 rounded-[1.5rem] overflow-hidden mb-5">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  loading="lazy"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <button className="absolute bottom-3 right-3 z-20 bg-white/90 backdrop-blur-sm p-3 rounded-full text-brand-green shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-brand-green hover:text-white">
                  <ShoppingBag size={20} />
                </button>
              </div>
              
              {/* Content Area */}
              <div className="flex flex-col flex-grow px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display font-bold text-xl text-brand-dark group-hover:text-brand-green transition-colors line-clamp-1">{item.name}</h3>
                </div>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2 flex-grow">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-auto border-t border-gray-50 pt-4">
                  <span className="font-black text-2xl text-brand-green">{item.price.toLocaleString('vi-VN')}
                    <span className="text-sm text-gray-400 font-normal align-top ml-0.5">đ</span>
                  </span>
                  <a href="tel:0353857799" className="text-sm font-bold text-gray-400 hover:text-brand-dark transition-colors flex items-center gap-1 group/btn">
                    Đặt ngay <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Big CTA Section */}
        <div className="mt-24">
          <div className="bg-brand-dark rounded-[3rem] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white">
            {/* Decorative Circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-green/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/2">
                <div className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-brand-accent font-bold text-xs mb-6 border border-white/10">
                  DỊCH VỤ ĐẶC XÔI CÔNG TY & SỰ KIỆN 
                </div>
                <h3 className="font-display font-black text-3xl md:text-5xl mb-6 leading-tight">
                  Cần đặt xôi số lượng lớn cho sự kiện,du lịch,công ty?
                </h3>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  Chúng tôi chuyên cung cấp xôi hộp, xôi gói lá chuối cho các dịp khai trương, sinh nhật,du lịch,từ thiện. Đóng gói chuyên nghiệp, giao hàng đúng giờ.
                </p>
                <a href="tel:0353857799" className="inline-flex items-center gap-3 bg-brand-accent text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all shadow-lg hover:shadow-brand-accent/50 transform hover:-translate-y-1">
                  <Phone size={20} />
                  <span>Tư vấn đặt hàng: 0353.857.799</span>
                </a>
              </div>
              
              <div className="md:w-1/2 w-full">
                <div className="relative rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500">
                  <img 
                    src={APP_IMAGES.BULK_ORDER_BIG} 
                    alt="Tiệc xôi" 
                    className="w-full h-auto object-cover aspect-video"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};