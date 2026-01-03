import React from 'react';
import { APP_IMAGES } from '../constants';

export const Story: React.FC = () => {
  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden scroll-mt-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
           
           {/* Image Collage Area */}
           <div className="md:w-1/2 relative">
              <div className="relative z-10 grid grid-cols-2 gap-4">
                 {/* Main Column - Tall Image */}
                 <div className="mt-8 transform transition-transform duration-500 hover:-translate-y-2">
                    <img 
                      src={APP_IMAGES.STORY_1} 
                      className="rounded-2xl shadow-xl w-full h-[320px] object-cover" 
                      alt="Cô chủ Mẹ Hiền" 
                    />
                 </div>
                 
                 {/* Side Column - 2 Stacked Images */}
                 <div className="flex flex-col gap-4">
                    {/* New Ingredients Image */}
                    <div className="transform transition-transform duration-500 hover:-translate-y-2 delay-75">
                      <img 
                        src={APP_IMAGES.STORY_INGREDIENTS} 
                        className="rounded-2xl shadow-xl w-full h-40 object-cover" 
                        alt="Nguyên liệu tươi ngon" 
                      />
                    </div>
                    {/* Cooking/Process Image */}
                    <div className="transform transition-transform duration-500 hover:-translate-y-2 delay-100">
                      <img 
                        src={APP_IMAGES.STORY_2} 
                        className="rounded-2xl shadow-xl w-full h-48 object-cover" 
                        alt="Quy trình chế biến" 
                      />
                    </div>
                 </div>
              </div>
              
              {/* Decorative Blur Background */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-light/60 rounded-full blur-3xl"></div>
           </div>

           {/* Content Area */}
           <div className="md:w-1/2">
             <span className="text-brand-green font-bold tracking-wider uppercase text-sm mb-2 block">Câu Chuyện Bếp</span>
             <h2 className="font-display font-black text-4xl md:text-5xl text-brand-dark mb-6">
               Giữ Gìn Hương Vị <br/> Xôi Truyền Thống Người Việt
             </h2>
             <p className="text-gray-600 leading-relaxed mb-6 text-lg">
               Bắt đầu từ một gánh xôi nhỏ đầu ngõ từ năm 2012, Mẹ Hiền luôn tâm niệm: "Nấu cho khách cũng như nấu cho con cháu trong nhà".
             </p>
             <p className="text-gray-600 leading-relaxed mb-8">
               Từng hạt nếp được ngâm đủ 8 tiếng, đồ hai lửa để giữ độ dẻo thơm suốt cả ngày. Thịt kho, pate, chả lụa đều được làm thủ công mỗi sáng sớm, đảm bảo vệ sinh và hương vị tươi mới nhất.
             </p>

             <div className="grid grid-cols-3 gap-4 border-t border-gray-100 pt-8">
                <div className="text-center">
                   <div className="font-display font-black text-3xl text-brand-green mb-1">2012</div>
                   <div className="text-xs text-gray-500 font-bold uppercase">Thành lập</div>
                </div>
                <div className="text-center border-l border-gray-100">
                   <div className="font-display font-black text-3xl text-brand-green mb-1">500+</div>
                   <div className="text-xs text-gray-500 font-bold uppercase">Gói mỗi ngày</div>
                </div>
                <div className="text-center border-l border-gray-100">
                   <div className="font-display font-black text-3xl text-brand-green mb-1">100%</div>
                   <div className="text-xs text-gray-500 font-bold uppercase">Tự nhiên</div>
                </div>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};