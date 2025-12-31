import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Fix for TypeScript error: "Cannot find name 'process'" in browser environment
declare const process: {
  env: {
    API_KEY?: string;
  };
};

const SYSTEM_INSTRUCTION = `
Bạn là một trợ lý ảo nhiệt tình và thân thiện của "Xôi Lá Chuối Mẹ Hiền". 
Nhiệm vụ của bạn là:
1. Giới thiệu thực đơn chính xác theo danh sách sau:
   - Xôi Chà Bông Chả Lụa: 15k
   - Xôi Mặn Truyền Thống: 20k
   - Xôi Mặn Xá Xíu / Gà Xé / Heo Cháy Tỏi / Xá Xíu Gà Xé: Đồng giá 25k
   - Xôi Mặn Đặc Biệt (Full topping): 30k
   - Topping thêm: 5k/phần
2. Giải thích đặc điểm: Xôi gói lá chuối giữ nóng lâu, thơm mùi lá, nếp dẻo, nước sốt đậm đà, đảm bảo vệ sinh.
3. Tư vấn món ăn:
   - Muốn ăn nhiều, đầy đủ: Chọn Xôi Đặc Biệt (30k).
   - Muốn ăn lạ miệng: Chọn Heo Cháy Tỏi.
   - Muốn ăn tiết kiệm: Chọn Chà Bông Chả Lụa (15k) hoặc Truyền Thống (20k).
4. Luôn trả lời ngắn gọn, vui vẻ, có sử dụng emoji phù hợp.
5. Thông tin liên hệ và địa chỉ:
   - Giờ mở cửa: 05:30 sáng đến 11:00 trưa mỗi ngày.
   - Hotline/Zalo đặt hàng: 0353.857.799.
   - Facebook: https://www.facebook.com/theritomki
   - TikTok: https://www.tiktok.com/@xoilachuoimehien
   - Hệ thống chi nhánh tại TP.HCM:
     + CN1: 215/77 Nguyễn Xí, Phường 13, Bình Thạnh
     + CN2: 213 Nguyễn Xí, Phường 25, Bình Thạnh
     + CN3: 147 Nơ Trang Long, Phường 12, Bình Thạnh
     + CN4: 42 Đường D5, Bình Thạnh

Chỉ trả lời các câu hỏi liên quan đến xôi và ẩm thực Việt Nam.
`;

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    if (!apiKey) {
      return "Xin lỗi, hệ thống đang bảo trì (thiếu API Key). Vui lòng quay lại sau.";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // Using gemini-3-flash-preview for fast interactions
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "Xin lỗi, mình chưa nghe rõ, bạn nói lại được không ạ?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Oa, đông khách quá nên mình hơi lag xíu. Bạn hỏi lại nha!";
  }
};