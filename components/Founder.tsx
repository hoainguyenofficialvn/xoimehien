import React from 'react';
import { APP_IMAGES } from '../constants';
import { Quote, ChefHat, Star } from 'lucide-react';

export const Founder: React.FC = () => {
  return (
    <section id="founder" className="py-24 bg-white relative scroll-mt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light/30 rounded-l-[5rem] -z-10 hidden md:block"></div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="md:w-1/2 relative group">
             <div className="absolute inset-0 bg-brand-green rounded-[3rem] transform rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-10"></div>
             <img 
               src={APP_IMAGES.STORY_1} 
               alt="Cô Lê Thị Thu Hiền - Người sáng lập" 
               className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[3/4] transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 bg-white"
             />
             
             {/* Float Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl animate-bounce-slow flex items-center gap-3 border border-gray-50">
                <div className="bg-yellow-100 p-2 rounded-full">
                  <Star className="text-yellow-600 w-6 h-6" fill="currentColor" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Kinh nghiệm</p>
                  <p className="font-display font-bold text-brand-dark text-lg">Hơn 10 năm</p>
                </div>
             </div>
          </div>

          {/* Content Side */}
          <div className="md:w-1/2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-green/5 rounded-full text-brand-green font-bold text-sm mb-6 border border-brand-green/10">
              <ChefHat size={18} />
              <span>Bếp Trưởng & Nhà Sáng Lập</span>
            </div>

            <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-6 leading-tight">
              Cô Lê Thị <br/> <span className="text-brand-green">Thu Hiền</span>
            </h2>

            <div className="relative mb-8">
              <Quote size={48} className="absolute -top-4 -left-4 text-brand-green/10 transform -scale-x-100" />
              <p className="text-gray-600 leading-relaxed text-lg italic relative z-10">
                "Nấu xôi không khó, nhưng nấu để người ta nhớ mãi thì phải đặt cả cái tâm vào từng hạt nếp, từng thớ thịt. Khách ăn ngon miệng, quay lại cười với mình một cái, đó mới là lãi to nhất của người bán hàng."
              </p>
            </div>
            
            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                Đó là lời dạy của Cô Hiền - người đã dành hơn một thập kỷ bên bếp lửa để gìn giữ hương vị xôi mặn truyền thống.
              </p>
              <p>
                Không chạy theo lợi nhuận, Cô luôn khắt khe trong việc chọn lọc nguyên liệu: nếp phải là nếp cái hoa vàng loại 1, thịt phải tươi nóng mỗi sáng, chả lụa phải là loại không hàn the.
              </p>
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