import React from 'react';
import { APP_IMAGES } from '../constants';
import { Quote, ChefHat, Star, GraduationCap } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-white relative scroll-mt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/30 rounded-l-[5rem] -z-10 hidden md:block"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Image Side - 4 Image Collage */}
          <div className="md:w-1/2 relative">
             <div className="grid grid-cols-2 gap-4">
                {/* Column 1 */}
                <div className="space-y-4 pt-8">
                   <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-1">
                      <img 
                        src={APP_IMAGES.FOUNDER_GALLERY_1} 
                        alt="Chị Hiền dạy nghề" 
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                   <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-1">
                      <img 
                        src={APP_IMAGES.FOUNDER_GALLERY_3} 
                        alt="Xôi Mẹ Hiền" 
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                </div>
                
                {/* Column 2 - Shifted Up */}
                <div className="space-y-4">
                   <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-1">
                      <img 
                        src={APP_IMAGES.FOUNDER_GALLERY_2} 
                        alt="Xôi ngon Bình Thạnh" 
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                   </div>
                   <div className="relative group overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-500 hover:-translate-y-1">
                      <img 
                        src={APP_IMAGES.FOUNDER_GALLERY_4} 
                        alt="Chị Hiền chủ quán" 
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                   </div>
                </div>
             </div>
             
             {/* Float Badge - Moved further down to avoid overlap */}
             <div className="absolute -bottom-20 -left-4 bg-white/95 backdrop-blur-sm p-4 rounded-full shadow-2xl animate-bounce-slow flex flex-col items-center justify-center border-4 border-brand-light w-32 h-32 z-20 text-center">
                <div className="bg-brand-accent/10 p-2 rounded-full mb-1">
                  <Star className="text-brand-accent w-6 h-6" fill="currentColor" />
                </div>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Kinh nghiệm</p>
                <p className="font-display font-black text-brand-dark text-xl leading-none">10+ Năm</p>
             </div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/5 rounded-full text-brand-green font-bold text-sm mb-6 border border-brand-green/10">
              <ChefHat size={18} />
              <span>Bếp Trưởng & Nhà Sáng Lập</span>
            </div>

            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
              Chị <span className="text-brand-green">Hiền</span>
            </h2>

            <div className="relative mb-8">
              <Quote size={48} className="absolute -top-4 -left-4 text-brand-green/10 transform -scale-x-100" />
              <p className="text-gray-600 leading-relaxed text-lg italic relative z-10">
                "Nấu xôi không khó, nhưng nấu để người ta nhớ mãi thì phải đặt cả cái tâm vào từng hạt nếp, từng thớ thịt. Khách ăn ngon miệng, quay lại cười với mình một cái, đó mới là lãi to nhất của người bán hàng."
              </p>
            </div>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Đó là lời dạy của Chị Hiền - người đã dành hơn một thập kỷ bên bếp lửa để gìn giữ hương vị <strong>xôi mặn ngon Bình Thạnh</strong> truyền thống.
              </p>
              <p>
                Không chỉ bán xôi, Chị Hiền còn mở lớp <strong>dạy nghề nấu xôi Bình Thạnh</strong>, truyền đạt bí quyết nấu xôi dẻo, làm topping đậm đà cho những bạn trẻ muốn khởi nghiệp.
              </p>
            </div>

            {/* Teaching Call to Action */}
            <div className="bg-brand-light/50 p-4 rounded-xl border border-brand-green/10 mb-8 flex items-start gap-3 text-left transition-colors hover:bg-brand-light hover:border-brand-green/30">
               <div className="bg-brand-green text-white p-2.5 rounded-lg mt-1 shadow-sm">
                 <GraduationCap size={22} />
               </div>
               <div>
                  <h4 className="font-bold text-brand-dark text-lg mb-1">Học nghề nấu xôi ở đâu?</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Liên hệ trực tiếp Chị Hiền để được tư vấn khóa <strong>học nghề nấu xôi Bình Thạnh</strong> 1 kèm 1. 
                    <br/><span className="text-brand-green font-medium">Bao ra nghề - Hỗ trợ setup mở quán.</span>
                  </p>
               </div>
            </div>
            
            <div className="border-t border-gray-100 pt-6">
                <div className="flex items-center justify-center md:justify-start gap-4">
                   <img src={APP_IMAGES.LOGO} alt="Signature" className="h-16 w-16 rounded-full border-2 border-brand-green p-1 object-cover" />
                   <div>
                      <p className="font-display font-bold text-lg text-brand-dark">Xôi Lá Chuối Mẹ Hiền</p>
                      <p className="text-sm text-gray-400">Since 2012</p>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};