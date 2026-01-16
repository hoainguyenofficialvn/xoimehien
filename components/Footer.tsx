import React from 'react';
import { Facebook, MapPin, Phone, Clock } from 'lucide-react';
import { APP_IMAGES } from '../constants';

const TikTokIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.743l-.002-.001.002.001a2.895 2.895 0 0 1 3.183-4.51v-3.5a6.329 6.329 0 0 0-5.394 10.692 6.33 6.33 0 0 0 10.857-4.424V8.687a8.182 8.182 0 0 0 4.773 1.526V6.79a4.831 4.831 0 0 1-1.003-.104z" />
  </svg>
);

const LinktreeIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.5 5.879l3.964-4.156 3.75 0-6.671 6.974 6.782 7.086h-3.857l-3.968-4.143v10.74h-3.232v-10.74l-3.968 4.143h-3.857l6.782-7.086-6.671-6.974 3.75 0 3.964 4.156v0z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-dark text-white pt-20 pb-10 scroll-mt-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-6">
            <h3 className="font-display font-bold text-3xl">Xôi Mẹ Hiền</h3>
            <p className="text-gray-400 leading-relaxed">
              Thương hiệu xôi gia truyền với hương vị đậm đà, gói trong lá chuối xanh thân thiện môi trường.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/theritomki?locale=vi_VN" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#1877F2] p-3 rounded-full transition-colors"
                aria-label="Facebook Fanpage"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://linktr.ee/XoiLaChuoiMeHien" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-[#43E660] hover:text-black p-3 rounded-full transition-colors"
                aria-label="Linktree Bio"
              >
                <LinktreeIcon size={20} />
              </a>
              <a 
                href="https://www.tiktok.com/@xoilachuoimehien" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white/10 hover:bg-black p-3 rounded-full transition-colors"
                aria-label="TikTok Channel"
              >
                <TikTokIcon size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-xl">Hệ Thống Chi Nhánh</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="text-brand-green flex-shrink-0 mt-1" size={20} />
                <div className="space-y-2 text-sm">
                   <p><span className="text-white font-bold">CN1:</span> 215/77 Nguyễn Xí, P.13, Q. Bình Thạnh</p>
                   <p><span className="text-white font-bold">CN2:</span> 213 Nguyễn Xí, P.25, Q. Bình Thạnh</p>
            
                   <p><span className="text-white font-bold">CN3:</span> 29/2A Nguyễn Gia Trí, Q. Bình Thạnh</p>
                </div>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Clock className="text-brand-green flex-shrink-0" size={20} />
                <span>05:30 - 11:00 (Mỗi ngày)</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Phone className="text-brand-green flex-shrink-0" size={20} />
                <a href="tel:0353857799" className="hover:text-white transition-colors font-bold text-lg">0353.857.799</a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-xl">Đặt Số Lượng Lớn</h4>
            
            {/* Added Image for Footer */}
            <div className="w-full h-40 rounded-xl overflow-hidden border-2 border-white/10 relative group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                <img 
                    src={APP_IMAGES.BULK_ORDER_SMALL}
                    alt="Xôi gói lá chuối" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Chúng tôi nhận đặt xôi cho các dịp lễ, sự kiện, từ thiện. Vui lòng liên hệ trước 1 ngày để được phục vụ tốt nhất.
            </p>
            <a href="tel:0353857799" className="inline-block w-full bg-brand-green text-white text-center py-3 rounded-xl font-bold hover:bg-white hover:text-brand-green transition-colors">
              Liên hệ ngay
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Xôi Mẹ Hiền. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};