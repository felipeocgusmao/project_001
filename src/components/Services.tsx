import React from 'react';
import { Sparkles, Heart, Users, TrendingUp, Compass, ShieldCheck, Check, Clock, Globe, ArrowRight } from 'lucide-react';
import { SERVICES, THERAPIST_INFO } from '../data/therapyData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'Heart':
        return <Heart className="w-5 h-5" />;
      case 'Users':
        return <Users className="w-5 h-5" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <section id="especialidades" className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFE4DA] text-[#693E2D] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Serviços & Especialidades</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2A1C17]">
            Caminhos Terapêuticos Para a <span className="italic text-[#845948]">Sua Transformação</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#614F47] leading-relaxed">
            Cada pessoa carrega uma história única. Escolha a abordagem que melhor acolhe o momento que você está vivendo.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {SERVICES.map((service: ServiceItem) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                service.featured
                  ? 'bg-gradient-to-b from-[#FFFDF9] to-[#F5EEE6] border-2 border-[#845948] shadow-md'
                  : 'bg-white border border-[#E8DDD1] shadow-2xs hover:shadow-md hover:border-[#CFB6A3]'
              }`}
            >
              {service.featured && (
                <div className="absolute -top-3 right-6 bg-[#845948] text-[#FAF8F5] text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full shadow-xs">
                  Mais Procurada
                </div>
              )}

              <div>
                {/* Header of card */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                    service.featured
                      ? 'bg-[#4E342E] text-[#E0B89C]'
                      : 'bg-[#FAF4EE] text-[#845948]'
                  }`}>
                    {getIcon(service.iconName)}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-[#6F5B53] font-medium bg-[#F5EEE6] px-2.5 py-1 rounded-md">
                    <Globe className="w-3 h-3 text-[#648774]" />
                    <span>{service.format}</span>
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2E1E19]">
                  {service.title}
                </h3>

                <p className="text-xs font-semibold text-[#845948] mt-1 italic">
                  "{service.tagline}"
                </p>

                <p className="mt-3 text-xs sm:text-sm text-[#5B4942] leading-relaxed">
                  {service.description}
                </p>

                {/* Benefits checklist */}
                <div className="mt-5 space-y-2 pt-4 border-t border-[#EFE7DE]">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#79645C]">
                    O que é trabalhado:
                  </p>
                  {service.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#52413A]">
                      <Check className="w-3.5 h-3.5 text-[#5A7E6B] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-6 pt-4 border-t border-[#EFE7DE] flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-[#705C54]">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#845948]" />
                    <span>Duração: <strong>{service.duration}</strong></span>
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(service.title)}
                  className={`w-full py-2.5 px-4 rounded-xl font-semibold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    service.featured
                      ? 'bg-[#4E342E] hover:bg-[#38231E] text-white shadow-xs'
                      : 'bg-[#F2E8DF] hover:bg-[#E6D8CB] text-[#3D2821]'
                  }`}
                >
                  <span>Agendar {service.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Online Modality Box info */}
        <div className="mt-12 bg-white rounded-2xl p-6 sm:p-8 border border-[#E7DCD0] shadow-2xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <div className="inline-block text-xs font-bold uppercase tracking-wider text-[#648774] bg-[#E9F3EE] px-2.5 py-1 rounded-md mb-2">
                Atendimento Internacional & Nacional
              </div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#2D1E18]">
                Mora fora da sua cidade ou no exterior? O atendimento online é feito para você.
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#614F47] leading-relaxed">
                Utilizamos a mesa sistêmica e tecnologia de vídeo imersiva. Pacientes em mais de 18 países atestam a mesma sensibilidade, conexão de campo e resultados transformadores do consultório físico.
              </p>
            </div>
            <div className="text-center md:text-right">
              <a
                href={`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=Ol%C3%A1%20Maze,%20gostaria%20de%20saber%20como%20funciona%20o%20atendimento%20online.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5A7E6B] hover:bg-[#466655] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors"
              >
                <span>Tirar Dúvidas Sobre o Online</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
