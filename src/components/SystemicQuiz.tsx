import React, { useState } from 'react';
import { HelpCircle, ArrowRight, RotateCcw, CheckCircle2, MessageCircle, Sparkles, HeartHandshake } from 'lucide-react';
import { THERAPIST_INFO } from '../data/therapyData';

interface SystemicQuizProps {
  onOpenBookingModal: (service?: string) => void;
}

export const SystemicQuiz: React.FC<SystemicQuizProps> = ({ onOpenBookingModal }) => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    area: '',
    duration: '',
    modality: '',
  });

  const areas = [
    {
      id: 'relacionamentos',
      title: 'Relacionamento & Vida Amorosa',
      subtitle: 'Conflitos com parceiro(a), términos dolorosos ou repetição de padrões afetivos.',
      recommendation: 'Harmonização de Casais ou Constelação Familiar Sistêmica',
      serviceKey: 'Harmonização de Casal & Relações'
    },
    {
      id: 'familia',
      title: 'Origens & Pais (Raízes)',
      subtitle: 'Dificuldade de perdoar, mágoas com pai ou mãe, sensação de não pertencimento.',
      recommendation: 'Cura das Raízes: Força do Pai & Nutrição da Mãe',
      serviceKey: 'Cura das Raízes: Força do Pai & Nutrição da Mãe'
    },
    {
      id: 'prosperidade',
      title: 'Vida Financeira & Carreira',
      subtitle: 'Dinheiro que entra e some, sensação de trava profissional ou estagnação.',
      recommendation: 'Desbloqueio do Fluxo da Prosperidade e Sucesso',
      serviceKey: 'Desbloqueio do Fluxo da Prosperidade'
    },
    {
      id: 'emocional',
      title: 'Ansiedade, Culpa & Sobrecarga',
      subtitle: 'Sensação de carregar o mundo nas costas, exaustão e falta de clareza.',
      recommendation: 'Terapia Sistêmica Individual Contínua',
      serviceKey: 'Terapia Sistêmica Individual'
    }
  ];

  const durations = [
    { id: 'recente', label: 'Há alguns meses (algo recente)' },
    { id: 'anos', label: 'Há 1 a 3 anos (vem se intensificando)' },
    { id: 'sempre', label: 'Desde a infância / Parece algo recorrente na família' }
  ];

  const modalities = [
    { id: 'online', label: 'Atendimento Online (Vídeo no conforto de casa)' },
    { id: 'presencial', label: 'Atendimento Presencial no Consultório' },
    { id: 'indiferente', label: 'O formato que tiver agenda mais rápida' }
  ];

  const handleSelectArea = (areaId: string) => {
    setAnswers(prev => ({ ...prev, area: areaId }));
    setStep(2);
  };

  const handleSelectDuration = (durationId: string) => {
    setAnswers(prev => ({ ...prev, duration: durationId }));
    setStep(3);
  };

  const handleSelectModality = (modalityId: string) => {
    setAnswers(prev => ({ ...prev, modality: modalityId }));
    setStep(4);
  };

  const selectedAreaObj = areas.find(a => a.id === answers.area);

  const resetQuiz = () => {
    setAnswers({ area: '', duration: '', modality: '' });
    setStep(1);
  };

  const getWhatsAppQuizLink = () => {
    const areaTitle = selectedAreaObj ? selectedAreaObj.title : 'questão sistêmica';
    const recTitle = selectedAreaObj ? selectedAreaObj.recommendation : 'Constelação Familiar';
    const text = encodeURIComponent(
      `Olá Maze! Fiz o Guia de Autoavaliação no site.\n\n` +
      `📌 Área de maior impacto: ${areaTitle}\n` +
      `📌 Recomendação indicada: ${recTitle}\n\n` +
      `Gostaria de saber as datas disponíveis para agendar minha sessão!`
    );
    return `https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=${text}`;
  };

  return (
    <section id="autoavaliacao" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3ECE4] to-[#FAF8F5] border-t border-[#EAE2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8DDD1] text-[#593425] text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Guia Rápido e Interativo</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1D18]">
            Qual área da sua história precisa de um <span className="italic text-[#845948]">olhar de cura hoje?</span>
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#614F47]">
            Em apenas 3 cliques rápidos, descubra qual modalidade terapêutica do Instituto NovaHera é mais indicada para o seu momento.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E5DACF] shadow-md relative overflow-hidden">
          
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center text-xs font-semibold text-[#705C54] mb-2">
              <span>Etapa {step > 3 ? 3 : step} de 3</span>
              <span>{step === 4 ? 'Resultado Concluído' : `${Math.round(((step - 1) / 3) * 100)}%`}</span>
            </div>
            <div className="w-full bg-[#EFE8DF] h-2 rounded-full overflow-hidden">
              <div
                className="bg-[#845948] h-full transition-all duration-300 rounded-full"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          </div>

          {/* STEP 1 */}
          {step === 1 && (
            <div className="animate-in fade-in duration-200">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#32211B] mb-2">
                1. Onde você sente o maior peso ou repetição na sua vida atualmente?
              </h3>
              <p className="text-xs sm:text-sm text-[#6A574E] mb-6">
                Escolha a alternativa que mais ressoa com seu coração neste momento:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {areas.map(area => (
                  <button
                    key={area.id}
                    onClick={() => handleSelectArea(area.id)}
                    className="p-5 rounded-xl text-left border border-[#E9DDD0] bg-[#FAF8F5] hover:bg-[#F5EDE3] hover:border-[#845948] transition-all group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-serif text-base font-bold text-[#32211B] group-hover:text-[#845948] transition-colors">
                        {area.title}
                      </h4>
                      <p className="text-xs text-[#6A574F] mt-2 leading-relaxed">
                        {area.subtitle}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center text-xs font-semibold text-[#845948]">
                      <span>Selecionar</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="animate-in fade-in duration-200">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#32211B] mb-2">
                2. Há quanto tempo você percebe essa dificuldade ou padrão?
              </h3>
              <p className="text-xs sm:text-sm text-[#6A574E] mb-6">
                Isso ajuda a entender a profundidade do emaranhamento sistêmico:
              </p>

              <div className="space-y-3">
                {durations.map(dur => (
                  <button
                    key={dur.id}
                    onClick={() => handleSelectDuration(dur.id)}
                    className="w-full p-4.5 rounded-xl text-left border border-[#E9DDD0] bg-[#FAF8F5] hover:bg-[#F5EDE3] hover:border-[#845948] transition-all group cursor-pointer flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#382620]">{dur.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#845948] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(1)}
                className="mt-6 text-xs font-medium text-[#7C665D] hover:underline flex items-center gap-1"
              >
                ← Voltar à pergunta anterior
              </button>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="animate-in fade-in duration-200">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#32211B] mb-2">
                3. Qual formato de atendimento você gostaria de realizar?
              </h3>
              <p className="text-xs sm:text-sm text-[#6A574E] mb-6">
                Ambos os formatos contam com a metodologia e bonecos sistêmicos:
              </p>

              <div className="space-y-3">
                {modalities.map(mod => (
                  <button
                    key={mod.id}
                    onClick={() => handleSelectModality(mod.id)}
                    className="w-full p-4.5 rounded-xl text-left border border-[#E9DDD0] bg-[#FAF8F5] hover:bg-[#F5EDE3] hover:border-[#845948] transition-all group cursor-pointer flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-[#382620]">{mod.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#845948] group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                className="mt-6 text-xs font-medium text-[#7C665D] hover:underline flex items-center gap-1"
              >
                ← Voltar à pergunta anterior
              </button>
            </div>
          )}

          {/* STEP 4: RESULT */}
          {step === 4 && selectedAreaObj && (
            <div className="animate-in fade-in zoom-in-95 duration-300">
              <div className="text-center pb-6 border-b border-[#EFE7DE]">
                <div className="w-12 h-12 rounded-full bg-[#EBF4EF] text-[#34674C] flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#688E79]">Avaliação Preliminar</span>
                <h3 className="font-serif text-2xl font-bold text-[#2C1D18] mt-1">
                  Caminho Sugerido por Maze Gusmão
                </h3>
              </div>

              <div className="my-6 p-5 rounded-xl bg-[#FAF6F1] border border-[#E9DFD3]">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#845948] mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Abordagem Ideal Para Você:
                </div>
                <h4 className="font-serif text-xl font-bold text-[#30201A]">
                  {selectedAreaObj.recommendation}
                </h4>
                <p className="text-xs sm:text-sm text-[#614E46] mt-2 leading-relaxed">
                  Para o tema selecionado (<strong>{selectedAreaObj.title}</strong>), olhar para as lealdades invisíveis da sua árvore genealógica é o primeiro passo para trazer alívio e destravar seu caminho.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href={getWhatsAppQuizLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 bg-[#2C6E49] hover:bg-[#23583A] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Resultado no WhatsApp & Agendar</span>
                </a>

                <button
                  onClick={() => onOpenBookingModal(selectedAreaObj.serviceKey)}
                  className="py-3.5 px-5 bg-[#4E342E] hover:bg-[#38231E] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors cursor-pointer"
                >
                  Agendar Pelo Site
                </button>
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={resetQuiz}
                  className="text-xs text-[#7E6960] hover:text-[#38231E] inline-flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Refazer autoavaliação com outro tema</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
