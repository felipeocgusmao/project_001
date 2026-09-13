import React from 'react';
import { Sparkles, Award, Heart, CheckCircle2, Compass, TreePine, Sun, Droplets, ArrowRight } from 'lucide-react';
import { THERAPIST_INFO, PILLARS } from '../data/therapyData';

interface AboutProps {
  onOpenBookingModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBookingModal }) => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-[#F5EEE6]/60 border-t border-[#EAE0D5] relative overflow-hidden">
      
      {/* Background accents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Column */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              
              {/* Main Photo: Maze with constellation setup */}
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#DDCBC0] bg-white aspect-4/5 relative">
                <img
                  src="/assets/images/constelacao-familiar.jpg"
                  alt="Mesa de Constelação Familiar Sistêmica com bonecos"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F1F19]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#E2C7B3] block">Constelação Online & Presencial</span>
                  <h4 className="font-serif text-lg font-bold">Mesa Sistêmica Fenomenológica</h4>
                  <p className="text-xs text-[#EAE2D8] mt-0.5">Atendimento individual com bonecos para clareza imediata</p>
                </div>
              </div>

              {/* Overlapping secondary photo: Consultation sanctuary */}
              <div className="hidden sm:block absolute -bottom-8 -right-6 w-48 h-48 rounded-xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5]">
                <img
                  src="/assets/images/consultorio.jpg"
                  alt="Consultório acolhedor de terapia"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-[#FAF8F5] border border-[#D5C2B4] rounded-xl p-3.5 shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#4E342E] text-[#E0B89C] flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#3B251F]">Instituto NovaHera</div>
                  <div className="text-[11px] text-[#715D55]">Método Euponikus®</div>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content Column */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAD7CA] text-[#5C3626] text-xs font-semibold uppercase tracking-wider mb-3.5">
              <Sparkles className="w-3.5 h-3.5 text-[#A65B32]" />
              <span>Quem Sou & Meu Propósito</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1C17] leading-tight">
              "Restaurar famílias é <span className="italic text-[#845948]">restaurar destinos."</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base text-[#503E37] leading-relaxed">
              Olá, eu sou <strong>Maze Gusmão</strong>. Há mais de uma década tenho a honra de guiar homens, mulheres e famílias em processos profundos de autoconhecimento, cura emocional e libertação de emaranhamentos sistêmicos.
            </p>

            <p className="mt-3 text-sm sm:text-base text-[#503E37] leading-relaxed">
              À frente do <strong>Instituto NovaHera</strong> e criadora do <strong>Método Euponikus®</strong>, meu trabalho não é te dizer o que fazer, mas iluminar o campo para que você compreenda onde o amor estagnou — para que ele volte a fluir com ordem, pertencimento e equilíbrio.
            </p>

            {/* Purpose card highlight */}
            <div className="mt-6 p-4.5 rounded-xl bg-white/80 border-l-4 border-[#845948] border-y border-r border-[#E8DDD1] shadow-2xs">
              <p className="font-serif italic text-sm sm:text-base text-[#3C2720] leading-snug">
                "Meu propósito é acolher histórias, cicatrizar feridas que atravessaram gerações e ajudar você a reescrever o futuro com amor, dignidade e prosperidade."
              </p>
              <span className="block mt-1 text-xs font-semibold text-[#845948]">— Maze Gusmão</span>
            </div>

            {/* 4 Pillars Grid */}
            <div id="metodo" className="mt-8 pt-6 border-t border-[#E5DACF]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#6B554C] mb-4">
                Os 4 Pilares da Transformação Sistêmica:
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PILLARS.map((pillar, idx) => (
                  <div key={idx} className="p-3.5 bg-white/70 rounded-lg border border-[#E8DED3] flex items-start gap-3">
                    <div className="w-8 h-8 rounded-md bg-[#FAF4EE] text-[#845948] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#35231D]">{pillar.title}</h4>
                      <p className="text-[11px] sm:text-xs text-[#6B564E] leading-tight mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA action */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-5 py-3 bg-[#4E342E] hover:bg-[#38231E] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Minha Sessão com Maze</span>
                <ArrowRight className="w-4 h-4 text-[#E0B89C]" />
              </button>
              
              <a
                href="#especialidades"
                className="text-xs sm:text-sm font-semibold text-[#845948] hover:text-[#4E342E] transition-colors py-2 text-center"
              >
                Ver Todas as Modalidades de Atendimento ↓
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
