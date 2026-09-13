import React from 'react';
import { CalendarCheck, Video, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';

interface ProcessTimelineProps {
  onOpenBookingModal: () => void;
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ onOpenBookingModal }) => {
  const steps = [
    {
      step: '01',
      title: 'Contato & Alinhamento',
      desc: 'Você escolhe o serviço ou faz a solicitação pelo formulário / WhatsApp. Alinhamos a melhor data e horário para sua sessão.',
      icon: CalendarCheck
    },
    {
      step: '02',
      title: 'Acolhimento da Questão',
      desc: 'No início do atendimento, abrimos um espaço seguro e sigiloso para você relatar o que está te afligindo e o que deseja transformar.',
      icon: HeartHandshake
    },
    {
      step: '03',
      title: 'Abertura do Campo Sistêmico',
      desc: 'Utilizamos os bonecos e âncoras sistêmicas para visualizar dinâmicas ocultas, lealdades familiares e desbloquear os nós inconscientes.',
      icon: Video
    },
    {
      step: '04',
      title: 'Integração & Transformação',
      desc: 'Concluímos com frases de cura, liberação e reverência ao seu sistema. Você recebe orientações para ancorar esse novo movimento em sua vida.',
      icon: Sparkles
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF8F5] border-t border-[#EAE2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-[#845948] bg-[#F2E7DC] px-3 py-1 rounded-full">
            Passo a Passo Transparente
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1D18] mt-3">
            Como funciona a sua jornada terapêutica
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#614F47]">
            Um processo estruturado com respeito ao seu tempo e acolhimento incondicional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#E7DCD0] shadow-2xs hover:shadow-md transition-all flex flex-col justify-between relative group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EEE6] text-[#845948] flex items-center justify-center group-hover:bg-[#4E342E] group-hover:text-white transition-colors">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-2xl font-bold text-[#D3C1B2]">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#301F1A]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-[#614E46] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#F5ECE3] text-[11px] font-semibold text-[#845948]">
                  Etapa {idx + 1} de 4
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={onOpenBookingModal}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#4E342E] hover:bg-[#38231E] text-white text-xs sm:text-sm font-semibold rounded-xl shadow-xs transition-colors cursor-pointer"
          >
            <span>Iniciar Meu Processo Agora</span>
            <ArrowRight className="w-4 h-4 text-[#E0B89C]" />
          </button>
        </div>

      </div>
    </section>
  );
};
