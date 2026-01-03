import { MenuItem, Testimonial } from './types';

// ==========================================
// KHO ẢNH DÙNG CHUNG (THAY ẢNH CỦA BẠN TẠI ĐÂY)
// ==========================================
// HƯỚNG DẪN LẤY LINK ẢNH:
// 1. Nếu dùng Postimages.org: Copy dòng "Direct link" (đuôi .jpg/.png)
// 2. Nếu dùng Google Drive:
//    - Share ảnh chế độ "Anyone with link"
//    - Lấy ID ảnh từ link share (đoạn mã sau /d/ và trước /view)
//    - Dùng link: https://drive.google.com/uc?export=view&id=MÃ_ID_CỦA_BẠN
// ==========================================
export const APP_IMAGES = {
  // Logo quán (hiện ở góc trên bên trái)
  LOGO: "https://i.postimg.cc/CM2Zw5ZH/z7239971048751_c7919b3c8d671ff678d403fad6e91eaf.jpg",
  
  // Ảnh lớn ở trang chủ (Banner chính)
  HERO_MAIN: "https://i.postimg.cc/x8QDDG0j/XO_I_MA_N_ĐA_C_BIE_T.jpg",
  
  // Ảnh phần Câu Chuyện Bếp (3 ảnh ghép)
  STORY_1: "https://i.postimg.cc/4x07x3F3/449077038-446620724969875-1545784783804386017-n.jpg",
  STORY_2: "https://i.postimg.cc/qRFZJJJx/Chat-GPT-Image-Dec-31-2025-08-21-56-AM.png",
  STORY_INGREDIENTS: "https://i.postimg.cc/sD2t4fK8/596778220_853595944272349_7129156571478373252_n.jpg", // Ảnh nguyên liệu/mâm xôi mới
  
  // Ảnh phần Người Truyền Nghề (Founder - 4 ảnh ghép)
  FOUNDER_GALLERY_1: "https://i.postimg.cc/CxckX4SM/Xo_i_la_chuo_i_me_Hie_n_Nha_n_da_y_nghe.jpg",
  FOUNDER_GALLERY_2: "https://i.postimg.cc/3xtmVZYR/Xo_i_la_chuo_i_me_Hie_n.jpg",
  FOUNDER_GALLERY_3: "https://i.postimg.cc/rwfx39Mp/Xo_i_la_chuo_i_me_Hie_n_5.jpg",
  FOUNDER_GALLERY_4: "https://i.postimg.cc/NjzGwFMT/8f0d437d-d8fa-4949-8500-44608d26d8f4.png", // Ảnh dạy nghề mới

  // Ảnh phần Đặt số lượng lớn (trong Menu)
  BULK_ORDER_BIG: "https://i.postimg.cc/9FfvYX1s/485118321_637843579180921_9066990913622514086_n.jpg",
  
  // Ảnh phần Đặt số lượng lớn (dưới Footer)
  BULK_ORDER_SMALL: "https://i.postimg.cc/GhpZx3q0/484333360_635577079407571_971154648244480136_n.jpg"
};

// ==========================================
// DANH SÁCH MÓN ĂN (MENU)
// ==========================================
export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Xôi Mặn Đặc Biệt',
    description: 'Full topping: Lạp xưởng, gà xé, xá xíu, chả lụa, trứng cút, chà bông, mỡ hành. Gói lá chuối thơm lừng.',
    price: 30000,
    // Thay ảnh món ăn tại dòng dưới:
    image: 'https://i.postimg.cc/x8QDDG0j/XO_I_MA_N_ĐA_C_BIE_T.jpg', 
    badge: 'BEST SELLER'
  },
  {
    id: '2',
    name: 'Xôi Mặn Truyền Thống',
    description: 'Hương vị tuổi thơ với lạp xưởng, chả lụa, chà bông, trứng cút và mỡ hành.',
    price: 20000,
    image: 'https://i.postimg.cc/T1xMMjRd/XO_I_TRUYE_N_THO_NG.jpg',
    badge: 'Bán chạy'
  },
  {
    id: '3',
    name: 'Xôi Mặn Xá Xíu',
    description: 'Thịt xá xíu đậm đà, mềm ngọt ăn kèm xôi nếp dẻo.',
    price: 25000,
    image: 'https://i.postimg.cc/KjbSS7ZZ/XO_I_XA_XI_U.jpg',
  },
  {
    id: '4',
    name: 'Xôi Mặn Gà Xé',
    description: 'Gà xé sợi dai ngon, rưới nước sốt đậm đà.',
    price: 25000,
    image: 'https://i.postimg.cc/HnmDD0px/XO_IGAXE.jpg',
  },
  {
    id: '5',
    name: 'Xôi Heo Mặn Heo Giòn',
    description: 'Thịt heo cháy tỏi thơm lừng, giòn giòn lạ miệng.',
    price: 25000,
    image: 'https://i.postimg.cc/NFtc1myG/z7391319603655-57dc6e777050cc24bcd50bb147136491.jpg',
  },
  {
    id: '6',
    name: 'Xôi Xá Xíu Gà Xé',
    description: 'Sự kết hợp hoàn hảo giữa xá xíu mềm và gà xé dai.',
    price: 25000,
    image: 'https://i.postimg.cc/HnmDD0px/XO_IGAXE.jpg',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Chị Lan - Văn phòng",
    comment: "Sáng nào đi làm cũng ghé Mẹ Hiền mua một gói. Xôi dẻo, 20k mà ăn no căng bụng.",
    rating: 5
  },
  {
    id: 2,
    name: "Bạn Nam - Sinh viên",
    comment: "Thích món xôi heo cháy tỏi ở đây nhất, vị rất lạ và thơm. Cô chủ bán hàng siêu dễ thương.",
    rating: 5
  },
  {
    id: 3,
    name: "Cô Ba - Hàng xóm",
    comment: "Xôi Mẹ Hiền nấu chuẩn vị, lá chuối gói nhìn sạch sẽ. Nước sốt chan vào rất vừa miệng.",
    rating: 4
  }
];