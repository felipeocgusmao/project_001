import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQS, THERAPIST_INFO } from '../data/therapyData';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#845948] bg-[#F2E7DC] px-3 py-1 rounded-full">
            Dúvidas Frequentes
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1D18] mt-3">
            Tudo o que você precisa saber antes de agendar
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#614F47]">
            Transparência e clareza para que você se sinta 100% seguro(a) em dar esse passo.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-[#E7DCD0] shadow-2xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-5 sm:px-6 py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-hidden"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-sm sm:text-base font-bold text-[#30201A]">
                    {faq.question}
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-[#FAF4EE] flex items-center justify-center text-[#845948] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#4E342E] text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#5B4942] leading-relaxed border-t border-[#F5ECE3] animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question callout */}
        <div className="mt-10 p-5 rounded-xl bg-[#F5EEE6] border border-[#E5DACF] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm font-bold text-[#322019]">Ficou com alguma dúvida específica?</h4>
            <p className="text-xs text-[#6B574F] mt-0.5">Nossa equipe e Maze estão disponíveis no WhatsApp para te orientar.</p>
          </div>
          <a
            href={`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=Ol%C3%A1%20Maze,%20li%20o%20site%20e%20gostaria%20de%20tirar%20uma%20d%C3%BAvida%20antes%20de%20agendar.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-[#2D6A4F] hover:bg-[#22533D] text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-1.5 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
