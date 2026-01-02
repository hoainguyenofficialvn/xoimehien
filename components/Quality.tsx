import React from 'react';
import { ShieldCheck, Leaf, Clock, Heart } from 'lucide-react';

export const Quality: React.FC = () => {
  const commitments = [
    {
      Icon: Leaf,
      title: "100% Lá Chuối Tươi",
      description: "Nói không với hộp xốp. Giữ nhiệt tốt và tạo hương thơm."
    },
    {
      Icon: ShieldCheck,
      title: "An Toàn Vệ Sinh",
      description: "Nguyên liệu tuyển chọn. Quy trình chế biến sạch sẽ."
    },
    {
      Icon: Clock,
      title: "Nấu Mới Mỗi Ngày",
      description: "Chế biến mới vào mỗi buổi sáng. Không bán hàng cũ."
    },
    {
      Icon: Heart,
      title: "Đậm Đà Tâm Huyết",
      description: "Gửi gắm hương vị truyền thống vào từng gói xôi."
    }
  ];

  return (
    <section className="py-10 bg-white border-b border-gray-100 relative z-20 shadow-sm">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Changed grid-cols-1 to grid-cols-2 for mobile to save space */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-8">
          {commitments.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="bg-brand-light/30 p-3 rounded-2xl shadow-sm mb-3 group-hover:bg-brand-green group-hover:shadow-md transition-all duration-300">
                <item.Icon 
                  size={24} // Reduced icon size from 32
                  className="text-brand-green group-hover:text-white transition-colors duration-300" 
                />
              </div>
              <h3 className="font-display font-bold text-lg text-brand-dark mb-1 leading-tight">{item.title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed px-1">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};