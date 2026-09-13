import React, { useState } from 'react';
import { X, Calendar, MessageCircle, CheckCircle2, Shield, Send } from 'lucide-react';
import { SERVICES, THERAPIST_INFO } from '../data/therapyData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  defaultService
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [service, setService] = useState(defaultService || SERVICES[0].title);
  const [modality, setModality] = useState<'online' | 'presencial'>('online');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Olá Maze Gusmão! Gostaria de agendar uma sessão.\n\n` +
      `👤 Nome: ${name || 'Interessado(a)'}\n` +
      `📌 Serviço: ${service}\n` +
      `💻 Formato: ${modality === 'online' ? 'Online' : 'Presencial'}\n\n` +
      `Por favor, me informe as próximas vagas disponíveis.`
    );
    window.open(`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-[#E3D7CB] relative max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-[#7B675E] hover:bg-[#F5EEE6] transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-14 h-14 rounded-full bg-[#EBF4EF] text-[#2C6E49] flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#2A1D18]">
              Solicitação Enviada!
            </h3>
            <p className="text-xs sm:text-sm text-[#5B4841] mt-2">
              Obrigada pelo contato, <strong>{name}</strong>. Entraremos em contato pelo WhatsApp <strong>{whatsapp}</strong> para confirmar seu horário.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="w-full py-3 bg-[#2C6E49] hover:bg-[#225739] text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar no WhatsApp Agora</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 text-xs text-[#705C54] hover:underline"
              >
                Fechar Janela
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="text-left mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-[#845948]">
                Agendamento Rápido
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#2E1E19] mt-1">
                Reserve Sua Sessão com Maze Gusmão
              </h3>
              <p className="text-xs text-[#6C5850] mt-1">
                Atendimento acolhedor e humanizado online ou presencial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#4B3730] mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DACDC2] text-xs sm:text-sm bg-[#FAF8F5] focus:bg-white focus:outline-hidden focus:border-[#845948]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B3730] mb-1">
                  Seu WhatsApp (com DDD) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DACDC2] text-xs sm:text-sm bg-[#FAF8F5] focus:bg-white focus:outline-hidden focus:border-[#845948]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B3730] mb-1">
                  Serviço Desejado
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#DACDC2] text-xs sm:text-sm bg-[#FAF8F5] focus:bg-white focus:outline-hidden focus:border-[#845948]"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#4B3730] mb-1">
                  Formato de Atendimento
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setModality('online')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border ${
                      modality === 'online'
                        ? 'bg-[#4E342E] text-white border-[#4E342E]'
                        : 'bg-[#FAF8F5] text-[#554038] border-[#D9CBC0]'
                    }`}
                  >
                    💻 Online (Vídeo)
                  </button>
                  <button
                    type="button"
                    onClick={() => setModality('presencial')}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border ${
                      modality === 'presencial'
                        ? 'bg-[#4E342E] text-white border-[#4E342E]'
                        : 'bg-[#FAF8F5] text-[#554038] border-[#D9CBC0]'
                    }`}
                  >
                    🏢 Presencial
                  </button>
                </div>
              </div>

              <div className="pt-3 flex flex-col gap-2.5">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#4E342E] hover:bg-[#38231E] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4 text-[#E0B89C]" />
                  <span>Enviar Solicitação de Horário</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full py-2.5 bg-[#2C6E49] hover:bg-[#225739] text-white text-xs font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chamar no WhatsApp Imediatamente</span>
                </button>
              </div>

              <div className="pt-2 flex items-center justify-center gap-1.5 text-[11px] text-[#7A665E]">
                <Shield className="w-3.5 h-3.5 text-[#5A7E6B]" />
                <span>Atendimento 100% sigiloso e acolhedor.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
