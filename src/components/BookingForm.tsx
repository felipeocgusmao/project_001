import React, { useState } from 'react';
import { Calendar, MessageCircle, CheckCircle2, Shield, Clock, Send, Sparkles } from 'lucide-react';
import { SERVICES, THERAPIST_INFO } from '../data/therapyData';
import { BookingFormData } from '../types';

interface BookingFormProps {
  preselectedService?: string;
}

export const BookingForm: React.FC<BookingFormProps> = ({ preselectedService }) => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    whatsapp: '',
    email: '',
    service: preselectedService || SERVICES[0].title,
    modality: 'online',
    bestTime: 'tarde',
    situation: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate instant safe processing
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá Maze! Gostaria de agendar uma sessão.\n\n` +
      `👤 Nome: ${formData.name || 'Interessado(a)'}\n` +
      `📌 Serviço: ${formData.service}\n` +
      `💻 Formato: ${formData.modality === 'online' ? 'Online por Videochamada' : 'Presencial no Consultório'}\n` +
      `⏰ Turno de preferência: ${formData.bestTime.toUpperCase()}\n` +
      (formData.situation ? `📝 Minha situação: ${formData.situation}\n` : '') +
      `\nPoderia me informar as próximas datas disponíveis?`
    );
    window.open(`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section id="agendar" className="py-16 md:py-24 bg-gradient-to-b from-[#FAF8F5] via-[#F3ECE4] to-[#FAF8F5] border-t border-[#EAE2D8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#845948] bg-[#EAE0D5] px-3 py-1 rounded-full">
            Agendamento Humanizado
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2C1D18] mt-3">
            Dê o primeiro passo para a sua transformação
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#614F47]">
            Preencha os campos abaixo para reservar seu horário com Maze Gusmão.
          </p>
        </div>

        {/* Card Container */}
        <div className="bg-white rounded-2xl p-6 sm:p-10 border border-[#E3D7CB] shadow-lg relative overflow-hidden">
          
          {submitted ? (
            <div className="text-center py-8 sm:py-12 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#EAF4EE] text-[#2C6E49] flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2A1D18]">
                Solicitação Recebida com Sucesso!
              </h3>
              <p className="text-sm text-[#5B4841] max-w-md mx-auto mt-2 leading-relaxed">
                Muito obrigada, <strong>{formData.name}</strong>. Recebemos seu interesse para <strong>{formData.service}</strong> ({formData.modality === 'online' ? 'Online' : 'Presencial'}).
              </p>
              <p className="text-xs text-[#7B675E] max-w-md mx-auto mt-1">
                Entraremos em contato pelo WhatsApp <strong>{formData.whatsapp}</strong> para confirmar as datas disponíveis.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 bg-[#2C6E49] hover:bg-[#225739] text-white font-semibold text-xs sm:text-sm rounded-xl flex items-center justify-center gap-2 shadow-xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agilizar no WhatsApp Agora</span>
                </button>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-5 py-3 border border-[#D5C4B5] text-[#553E35] hover:bg-[#F9F5F0] text-xs font-semibold rounded-xl transition-colors"
                >
                  Enviar Outra Mensagem
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Nome */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#523F38] mb-1.5">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Como prefere ser chamado(a)?"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBC0] text-xs sm:text-sm text-[#382620] bg-[#FAF8F5] focus:bg-white focus:outline-hidden focus:border-[#845948] transition-colors"
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#523F38] mb-1.5">
                    WhatsApp (com DDD) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(11) 99999-9999"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBC0] text-xs sm:text-sm text-[#382620] bg-[#FAF8F5] focus:bg-white focus:outline-hidden focus:border-[#845948] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Serviço */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#523F38] mb-1.5">
                    Serviço / Atendimento Desejado
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBC0] text-xs sm:text-sm text-[#382620] bg-[#FAF8F5] focus:bg-white focus:outline-hidden focus:border-[#845948] transition-colors"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Formato */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#523F38] mb-1.5">
                    Modalidade de Atendimento
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, modality: 'online' })}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        formData.modality === 'online'
                          ? 'bg-[#4E342E] text-white border-[#4E342E]'
                          : 'bg-[#FAF8F5] text-[#554038] border-[#D9CBC0] hover:bg-[#F2EAE1]'
                      }`}
                    >
                      💻 Online (Vídeo)
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg border transition-all ${
                        formData.modality === 'presencial'
                          ? 'bg-[#4E342E] text-white border-[#4E342E]'
                          : 'bg-[#FAF8F5] text-[#554038] border-[#D9CBC0] hover:bg-[#F2EAE1]'
                      }`}
                    >
                      🏢 Presencial
                    </button>
                  </div>
                </div>
              </div>

              {/* Turno */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#523F38] mb-1.5">
                  Qual o melhor turno para você ser atendido(a)?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'manha', label: 'Manhã' },
                    { id: 'tarde', label: 'Tarde' },
                    { id: 'noite', label: 'Noite' },
                    { id: 'qualquer', label: 'Qualquer horário' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, bestTime: item.id as any })}
                      className={`py-2 px-2 text-center text-xs font-medium rounded-lg border transition-all ${
                        formData.bestTime === item.id
                          ? 'bg-[#845948] text-white border-[#845948]'
                          : 'bg-[#FAF8F5] text-[#5C4841] border-[#D9CBC0] hover:bg-[#F2EAE1]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Breve relato */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#523F38] mb-1.5">
                  Gostaria de adiantar brevemente sua queixa ou objetivo? (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Gostaria de constelar um padrão de relacionamentos difíceis ou desbloquear minha vida profissional..."
                  value={formData.situation}
                  onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D9CBC0] text-xs sm:text-sm text-[#382620] bg-[#FAF8F5] focus:bg-white focus:outline-hidden focus:border-[#845948] transition-colors"
                />
              </div>

              {/* Dual submission options */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-3.5 px-5 bg-[#4E342E] hover:bg-[#38231E] text-white font-semibold text-xs sm:text-sm rounded-xl shadow-xs transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4 text-[#E0B89C]" />
                  <span>{loading ? 'Enviando solicitação...' : 'Confirmar Pré-Agendamento no Site'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="py-3.5 px-5 bg-[#2C6E49] hover:bg-[#225739] text-white font-semibold text-xs sm:text-sm rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Direto no WhatsApp</span>
                </button>
              </div>

              {/* Trust disclaimer */}
              <div className="pt-3 flex items-center justify-center gap-2 text-[11px] text-[#78645C]">
                <Shield className="w-3.5 h-3.5 text-[#5A7E6B]" />
                <span>Seus dados são confidenciais e protegidos pela ética profissional terapêutica.</span>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
