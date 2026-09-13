import React from 'react';
import { Star, Quote, Heart, CheckCircle2 } from 'lucide-react';
import { TESTIMONIALS } from '../data/therapyData';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-[#F5EEE6]/50 border-t border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#845948] bg-[#EFE4DA] px-3 py-1 rounded-full">
            Transformações Reais
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1D18] mt-3">
            O que dizem aqueles que permitiram <span className="italic text-[#845948]">a cura fluir</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#614F47]">
            Relatos verdadeiros de quem encontrou alívio, amor e reconciliação através das sessões com Maze Gusmão.
          </p>
        </div>

        {/* Grid of testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E7DCD0] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Star rating */}
                  <div className="flex items-center gap-1 text-[#DDA752]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#E0CFBF]" />
                </div>

                <p className="text-xs sm:text-sm text-[#503E38] leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F2EAE0] flex items-center justify-between">
                <div>
                  <div className="font-serif text-sm sm:text-base font-bold text-[#30201A]">
                    {item.name}
                  </div>
                  <div className="text-[11px] text-[#78635A]">
                    {item.location}
                  </div>
                </div>

                <span className="text-[11px] font-semibold text-[#845948] bg-[#FAF4EE] px-2.5 py-1 rounded-md">
                  {item.service}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust seal */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs text-[#6F5950]">
          <CheckCircle2 className="w-4 h-4 text-[#5E836F]" />
          <span>Depoimentos espontâneos coletados com autorização prévia e respeito ao sigilo ético.</span>
        </div>

      </div>
    </section>
  );
};
