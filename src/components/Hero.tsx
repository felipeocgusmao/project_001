import React from 'react';
import { Calendar, MessageCircle, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { THERAPIST_INFO } from '../data/therapyData';

interface HeroProps {
  onOpenBookingModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="inicio" className="relative pt-6 pb-16 md:pt-12 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FAF8F5] via-[#F5EEE6] to-[#FAF8F5]">
      {/* Delicate background decorative elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-[#EAD9CE]/40 via-[#DFE9E3]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Text & Conversion Column */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#ECE2D8] text-[#5A382C] px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide w-fit mb-4 border border-[#DCBFA8]/50 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#A65B32]" />
              <span>MÉTODO EUPONIKUS® • INSTITUTO NOVAHERA</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.18] font-bold text-[#2E201B] tracking-tight">
              Dê o primeiro passo para <span className="text-[#845948] italic font-normal">transformar sua história</span> e restaurar suas relações.
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg text-[#55433C] leading-relaxed max-w-2xl font-normal">
              A terapia sistêmica te ajuda a acolher suas raízes, destravar o fluxo da prosperidade e romper ciclos de dor que se repetem há gerações. Um espaço 100% seguro, humano e sem julgamentos.
            </p>

            {/* Key Value Points */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl text-xs sm:text-sm text-[#4E3930]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A725D] shrink-0" />
                <span>Atendimento <strong>Online</strong> (todo o mundo) e <strong>Presencial</strong></span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A725D] shrink-0" />
                <span>Constelação Familiar com bonecos sistêmicos</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A725D] shrink-0" />
                <span>Total sigilo profissional e ética terapêutica</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#4A725D] shrink-0" />
                <span>Resultados profundos desde a primeira sessão</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4">
              <button
                id="hero-agendar-cta"
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 bg-[#4E342E] hover:bg-[#38231E] text-white font-semibold rounded-xl text-base shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer active:scale-98"
              >
                <Calendar className="w-5 h-5 text-[#E0B89C]" />
                <span>Agendar Minha Consulta</span>
              </button>

              <a
                id="hero-whatsapp-cta"
                href={`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=Ol%C3%A1%20Maze,%20conheci%20seu%20trabalho%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20as%20sess%C3%B5es.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 bg-[#E8F3EE] hover:bg-[#D7EBE1] text-[#244636] border border-[#7FA692] font-semibold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#2C6E49]" />
                <span>Falar Diretamente no WhatsApp</span>
              </a>
            </div>

            {/* Reassurance banner */}
            <div className="mt-7 pt-5 border-t border-[#E5DACF] flex items-center gap-6 text-xs text-[#6F5B53]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#7FA692]" />
                <span>Ambiente Seguro & Sigiloso</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-[#A65B32]" />
                <span>Acolher • Curar • Transformar</span>
              </div>
            </div>

          </div>

          {/* Photo & Credibility Card Column */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Decorative Frame Behind Photo */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-full h-full rounded-2xl border-2 border-[#C9A991]/70 -z-10" />
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-28 h-28 bg-[#82B29A]/15 rounded-full blur-xl -z-10" />

              {/* Main Photo Card */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#E3D4C7] bg-[#EFE8DF] aspect-3/4 relative group">
                <img
                  src="/assets/images/consultorio.jpg"
                  alt="Consultório acolhedor preparado para atendimento terapêutico"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-500"
                  loading="eager"
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#271A15]/80 via-[#271A15]/30 to-transparent" />

                {/* Overlaid Bio Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#82B29A]" />
                    <p className="text-xs uppercase tracking-wider font-semibold text-[#E5CEBF]">Instituto NovaHera</p>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">Espaço de acolhimento</h3>
                  <p className="text-xs text-[#EAE2D8] font-light">Atendimento online e presencial com sigilo e cuidado</p>
                </div>
              </div>

              {/* Floating Quote Chip */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-[#E8DDD1] max-w-[270px] sm:max-w-[290px] animate-float">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#F5EEE6] text-[#A65B32] flex items-center justify-center shrink-0">
                    <Heart className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#3C2720] leading-snug">
                      "Você não precisa dar conta de tudo sozinha(o)."
                    </p>
                    <p className="text-[11px] text-[#78645C] mt-1">
                      Permita-se viver esse acolhimento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Experience Badge */}
              <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 bg-[#4E342E] text-white py-2 px-3.5 rounded-lg shadow-md border border-[#855B49] text-center">
                <span className="block text-base sm:text-lg font-bold font-serif text-[#F1DFD1]">+10 anos</span>
                <span className="text-[10px] text-[#D8C2B3] uppercase tracking-wider block">Transformando Vidas</span>
              </div>

            </div>

          </div>

        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-14 pt-8 border-t border-[#EAE2D8]/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {THERAPIST_INFO.stats.map((item, idx) => (
            <div key={idx} className="p-3 bg-white/60 rounded-xl border border-[#EAE2D8]/70 shadow-2xs">
              <div className="font-serif text-2xl sm:text-3xl font-bold text-[#4E342E]">{item.number}</div>
              <div className="text-xs sm:text-sm text-[#6C564E] font-medium mt-1">{item.label}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
