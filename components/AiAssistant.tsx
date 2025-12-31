import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

export const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Chào bạn! Mình là AI Xôi Nóng đây. Bạn muốn ăn xôi gì hôm nay để mình gợi ý cho nè? 🌯' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: inputText };
    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsLoading(true);

    const aiResponseText = await sendMessageToGemini(inputText);
    
    setMessages(prev => [...prev, { role: 'model', text: aiResponseText }]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <>
      {/* Floating Button - MOVED TO LEFT */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 left-6 z-40 bg-brand-green hover:bg-brand-dark text-white p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center gap-2 group ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Bot size={28} className="" />
        <span className="hidden group-hover:block font-bold pr-2">Chat với Bếp Trưởng AI</span>
      </button>

      {/* Chat Window - ORIGIN BOTTOM LEFT */}
      <div 
        className={`fixed bottom-4 left-4 z-50 w-full max-w-sm bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform origin-bottom-left border border-gray-100 ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: '80vh' }}
      >
        {/* Chat Header */}
        <div className="bg-brand-green text-white p-4 rounded-t-2xl flex justify-between items-center shadow-md">
          <div className="flex items-center gap-2">
            <div className="bg-white/10 p-2 rounded-full backdrop-blur-sm">
               <Bot size={20} />
            </div>
            <div>
              <h3 className="font-bold">Bếp Trưởng AI</h3>
              <p className="text-[10px] text-green-100 uppercase tracking-wider font-semibold">Sẵn sàng phục vụ</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-light/30 scrollbar-thin scrollbar-thumb-gray-200">
          {messages.map((msg, index) => (
            <div 
              key={index} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  msg.role === 'user' 
                    ? 'bg-brand-green text-white rounded-br-none font-medium' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-bl-none'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-brand-green" />
                <span className="text-xs text-gray-500 font-medium">Đang suy nghĩ món ngon...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full border border-transparent focus-within:border-brand-green/50 transition-colors">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Bạn muốn ăn gì..."
              className="flex-1 bg-transparent border-none outline-none text-sm text-gray-800 placeholder-gray-400"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputText.trim()}
              className="bg-brand-green hover:bg-brand-dark text-white p-2 rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};