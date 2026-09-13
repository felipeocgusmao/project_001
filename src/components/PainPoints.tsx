import React from 'react';
import { AlertCircle, ArrowRight, ShieldCheck, HeartCrack, TrendingDown, Repeat, BatteryWarning, Users2, HelpCircle } from 'lucide-react';

interface PainPointsProps {
  onOpenBookingModal: () => void;
}

export const PainPoints: React.FC<PainPointsProps> = ({ onOpenBookingModal }) => {
  const painList = [
    {
      icon: Repeat,
      title: "Repetição de Padrões Familiares",
      desc: "Você percebe que está vivendo os mesmos conflitos, frustrações afetivas ou dificuldades que seus pais viveram, mesmo jurando que faria diferente."
    },
    {
      icon: TrendingDown,
      title: "Bloqueio no Fluxo Financeiro",
      desc: "Trabalha incansavelmente, mas o dinheiro parece escorrer pelos dedos ou você sente culpa inconsciente ao prosperar mais que sua família de origem."
    },
    {
      icon: HeartCrack,
      title: "Desgaste nos Relacionamentos",
      desc: "Dificuldade de manter vínculos estáveis, cobranças constantes, sensação de dar muito e receber pouco ou repetição de dinâmicas tóxicas."
    },
    {
      icon: BatteryWarning,
      title: "Sobrecarga & 'Dar Conta de Tudo'",
      desc: "Sensação constante de carregar o peso do mundo nas costas, exaustão mental, ansiedade e dificuldade em colocar limites ou pedir ajuda."
    },
    {
      icon: Users2,
      title: "Mágoas ou Distância dos Pais",
      desc: "Ressentimentos não resolvidos com pai ou mãe que drenam sua vitalidade, geram insegurança ou dificultam sua autoridade na vida adulta."
    },
    {
      icon: HelpCircle,
      title: "Desconexão com Seu Propósito",
      desc: "Sensação de vazio interior, paralisia diante de escolhas importantes e dúvida constante sobre o seu lugar e valor no mundo."
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-[#FAF8F5] border-t border-[#ECE3DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F2E5DC] text-[#784430] text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Identificação & Consciência</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1D18]">
            Você sente que está carregando pesos que <span className="italic text-[#845948]">não pertencem a você?</span>
          </h2>
          <p className="mt-3.5 text-[#624F47] text-sm sm:text-base leading-relaxed">
            Na visão da terapia sistêmica, muitas de nossas dores e angústias atuais não nasceram em nós, mas em emaranhamentos de histórias que vieram antes.
          </p>
        </div>

        {/* Pain Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painList.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#EAE1D7] shadow-2xs hover:shadow-md hover:border-[#D0B7A4] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#FAF4EE] text-[#845948] flex items-center justify-center mb-4 group-hover:bg-[#4E342E] group-hover:text-white transition-colors">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#34241E] group-hover:text-[#845948] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#66544D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-5 pt-4 border-t border-[#F2ECE4] flex items-center text-xs font-medium text-[#845948] group-hover:text-[#4E342E]">
                  <span>Pode ser acolhido na sessão</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance & Transition Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#4E342E] to-[#67443A] rounded-2xl p-6 sm:p-8 text-white shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#FDF8F5]">
              Você não precisa continuar preso(a) a essas repetições.
            </h4>
            <p className="mt-1.5 text-xs sm:text-sm text-[#E2D4CA] max-w-2xl font-light">
              Quando olhamos para as raízes com acolhimento e amor, o que era dor se transforma em força de vida. Permita-se ser guiado(a) nesse processo.
            </p>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="shrink-0 px-5 py-3 bg-[#E0B89C] hover:bg-[#D4A787] text-[#341F17] font-semibold text-xs sm:text-sm rounded-xl transition-all shadow-xs active:scale-98 cursor-pointer flex items-center gap-2"
          >
            <span>Quero Iniciar Minha Cura</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
