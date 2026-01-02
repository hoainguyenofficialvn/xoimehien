import React from 'react';
import { ShieldCheck, Leaf, Clock, Heart } from 'lucide-react';

export const Quality: React.FC = () => {
  const commitments = [
    {
      Icon: Leaf,
      title: "100% Lá Chuối Tươi",
      description: "Nói không với hộp xốp. Gói xôi bằng lá chuối giúp giữ nhiệt tốt và tạo hương thơm đặc trưng."
    },
    {
      Icon: ShieldCheck,
      title: "An Toàn Vệ Sinh",
      description: "Nguyên liệu tuyển chọn kỹ lưỡng. Quy trình chế biến sạch sẽ, đảm bảo sức khỏe thực khách."
    },
    {
      Icon: Clock,
      title: "Nấu Mới Mỗi Ngày",
      description: "Xôi và topping được chế biến mới vào mỗi buổi sáng sớm. Không bán hàng cũ qua ngày."
    },
    {
      Icon: Heart,
      title: "Đậm Đà Tâm Huyết",
      description: "Gói xôi không chỉ là món ăn, mà là tâm huyết của người làm nghề muốn gửi gắm hương vị truyền thống."
    }
  ];

  return (
    <section className="py-20 bg-brand-light/30 border-y border-brand-green/5">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {commitments.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center group hover:-translate-y-2 transition-all duration-300">
              <div className="bg-white p-5 rounded-[1.5rem] shadow-soft mb-6 group-hover:bg-brand-green group-hover:shadow-lg group-hover:shadow-brand-green/30 transition-all duration-300">
                <item.Icon 
                  size={32}
                  className="text-brand-green group-hover:text-white transition-colors duration-300" 
                />
              </div>
              <h3 className="font-display font-bold text-xl text-brand-dark mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed px-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};