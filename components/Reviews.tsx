import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Reviews: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-brand-light/20 blur-3xl rounded-full -z-10"></div>

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-3 block">Đánh giá thực tế</span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-brand-dark mb-4">Khách Hàng Nói Gì?</h2>
          <div className="w-20 h-1 bg-brand-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((review) => (
            <div key={review.id} className="bg-warm-bg p-8 rounded-[2rem] border border-gray-100 relative hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <Quote className="absolute top-6 right-8 text-brand-green/10 w-16 h-16 rotate-180 transition-transform group-hover:scale-110" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic leading-relaxed text-lg relative z-10">
                "{review.comment}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-green to-brand-dark flex items-center justify-center text-white font-bold text-xl shadow-md">
                  {review.name.charAt(0)}
                </div>
                <div>
                    <span className="font-bold text-brand-dark block">{review.name}</span>
                    <span className="text-xs text-gray-400 uppercase tracking-wide">Khách hàng thân thiết</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};