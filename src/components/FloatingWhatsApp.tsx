import React from 'react';
import { MessageCircle } from 'lucide-react';
import { THERAPIST_INFO } from '../data/therapyData';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=Ol%C3%A1%20Maze,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20sess%C3%B5es%20de%20Constela%C3%A7%C3%A3o%20e%20Terapia%20Sist%C3%AAmica.`;

  return (
    <aside aria-label="Atendimento rápido pelo WhatsApp" className="fixed bottom-5 right-5 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-block mr-3 px-3 py-1.5 bg-white text-[#2C483B] text-xs font-semibold rounded-lg shadow-md border border-[#DCE8E1] opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        Agende pelo WhatsApp
      </span>

      {/* Floating button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com Maze Gusmão no WhatsApp"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-200 relative focus:outline-hidden"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        
        {/* Pulse ring */}
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full" />
      </a>
    </aside>
  );
};
