import React from 'react';
import { ArrowDown, Star } from 'lucide-react';
import { APP_IMAGES } from '../constants';

const QUICK_FEEDBACKS = [
  { text: "Xôi dẻo, nóng hổi vừa thổi vừa ăn", name: "Chị Lan (NV Văn Phòng)" },
  { text: "Sốt đậm đà, topping ngập tràn hộp", name: "Anh Tuấn (Shipper)" },
  { text: "Giao hàng siêu nhanh, rất nhiệt tình", name: "Bạn Vy (Sinh viên Hutech)" },
  { text: "Gói lá chuối sạch sẽ, vị chuẩn bắc", name: "Cô Hạnh (Nội trợ)" },
  { text: "Ăn sáng mỗi ngày không ngán", name: "Anh Minh (IT)" }
];

export const Hero: React.FC = () => {
  const handleScrollToMenu = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const MarqueeItem = ({ feedback }: { feedback: typeof QUICK_FEEDBACKS[0] }) => (
    <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-brand-green/10 shadow-sm mx-4">
      <Star size={14} className="text-brand-accent fill-brand-accent flex-shrink-0"/>
      <div className="flex flex-col md:flex-row md:items-center gap-1">
        <span className="text-brand-dark italic text-sm">"{feedback.text}"</span>
        <span className="hidden md:inline text-brand-green/40">-</span>
        <span className="text-brand-green font-bold text-xs uppercase tracking-wide whitespace-nowrap">{feedback.name}</span>
      </div>
    </div>
  );

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 flex items-center justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-brand-light/30 rounded-l-[100px] -z-10 hidden md:block"></div>
      
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <span className="inline-flex items-center gap-1.5 bg-brand-light text-brand-green px-4 py-1.5 rounded-full text-sm font-bold tracking-wide mb-2">
              <Star size={14} fill="currentColor" />
              Tiệm xôi đánh giá ngon ở Bình Thạnh
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black text-brand-dark leading-tight">
              Hương Vị <br/>
              <span className="text-brand-green">Xôi Lá Chuối</span> <br/>
              Truyền Thống
            </h1>
            <p className="text-lg text-gray-600 max-w-lg mx-auto md:mx-0 leading-relaxed">
              Mỗi gói xôi là một ký ức tuổi thơ. Nếp dẻo thơm, topping đầy ắp, gói trong lá chuối xanh mướt giữ trọn hương vị.
            </p>
            
            <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
                  <a 
                    href="#menu" 
                    onClick={handleScrollToMenu}
                    className="bg-brand-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-dark transition-all shadow-lg hover:shadow-brand-green/30 flex items-center justify-center gap-2"
                  >
                    Xem Menu Ngay
                    <ArrowDown size={20} />
                  </a>
                  <a href="tel:0353857799" className="bg-white text-brand-green border-2 border-brand-green/20 px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-light transition-all flex items-center justify-center">
                    0353.857.799
                  </a>
                </div>
                
                {/* Social Proof */}
                <div className="flex items-center justify-center md:justify-start gap-4 pl-2">
                    <div className="flex -space-x-4">
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop&crop=faces" alt="User" />
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop&crop=faces" alt="User" />
                        <img className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=faces" alt="User" />
                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-bold text-gray-500">+6k</div>
                    </div>
                    <span className="text-lg text-gray-600 font-medium">Đã hơn <span className="font-bold text-brand-green text-2xl">6.000+</span> người mua</span>
                </div>

                {/* Marquee Feedback Section - Seamless Loop */}
                <div className="w-full overflow-hidden bg-brand-light/30 py-4 rounded-xl border border-brand-green/5 mt-2 max-w-xl mx-auto md:mx-0 relative">
                  {/* Left fade mask */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-warm-bg to-transparent z-10"></div>
                  {/* Right fade mask */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-warm-bg to-transparent z-10"></div>
                  
                  <div className="whitespace-nowrap flex animate-marquee hover:[animation-play-state:paused] cursor-default w-max">
                     {/* Original Content */}
                     <div className="flex items-center">
                        {QUICK_FEEDBACKS.map((fb, idx) => (
                           <MarqueeItem key={`orig-${idx}`} feedback={fb} />
                        ))}
                     </div>
                     {/* Duplicated Content for Seamless Loop */}
                     <div className="flex items-center">
                        {QUICK_FEEDBACKS.map((fb, idx) => (
                           <MarqueeItem key={`dup-${idx}`} feedback={fb} />
                        ))}
                     </div>
                  </div>
                </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
              <img 
                src={APP_IMAGES.HERO_MAIN} 
                alt="Xôi Mặn Mẹ Hiền" 
                className="w-full h-auto rounded-[2.5rem] shadow-2xl rotate-2 hover:rotate-0 transition-all duration-500 object-cover aspect-[4/3] bg-white"
              />
              {/* Float Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce-slow hidden md:flex">
                <div className="bg-brand-accent/10 p-3 rounded-full">
                  <span className="text-2xl">🌟</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">Best Seller</p>
                  <p className="font-bold text-brand-dark">Xôi Mặn Đặc Biệt</p>
                </div>
              </div>
            </div>
            {/* Dots Pattern */}
            <div className="absolute -top-10 -right-10 w-24 h-24 text-brand-accent/20">
               <svg viewBox="0 0 100 100" fill="currentColor">
                 <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                   <circle cx="2" cy="2" r="2" />
                 </pattern>
                 <rect width="100" height="100" fill="url(#dots)" />
               </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};