import React from 'react';
import { Instagram, Mail, Phone, Heart, Globe, ArrowUp, Sparkles, MapPin } from 'lucide-react';
import { THERAPIST_INFO } from '../data/therapyData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B1B16] text-[#E7DDD5] pt-16 pb-12 border-t border-[#462F27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#432C24]">
          
          {/* Brand & Purpose */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#2B1B16] flex items-center justify-center font-serif text-lg font-bold">
                MG
              </div>
              <div>
                <span className="font-serif text-xl font-bold text-white block">Maze Gusmão</span>
                <span className="text-xs text-[#C6B3A5] uppercase tracking-wider block">Terapeuta Sistêmica • Instituto NovaHera</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#BCABA0] leading-relaxed max-w-sm">
              "Restaurar famílias é restaurar destinos. Quando curamos as raízes, liberamos o amor, restauramos a ordem e abrimos caminho para um novo legado."
            </p>

            <div className="mt-5 inline-flex items-center gap-2 text-xs text-[#E0B89C] bg-[#3B251F] px-3 py-1.5 rounded-lg border border-[#52362C]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Método Euponikus® • Conecte-se à sua essência</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5 text-xs text-[#BCABA0]">
              <li><a href="#inicio" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Maze Gusmão</a></li>
              <li><a href="#especialidades" className="hover:text-white transition-colors">Serviços & Constelação</a></li>
              <li><a href="#metodo" className="hover:text-white transition-colors">Pilares Sistêmicos</a></li>
              <li><a href="#autoavaliacao" className="hover:text-white transition-colors">Guia de Autoavaliação</a></li>
              <li><a href="#depoimentos" className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Dúvidas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="lg:col-span-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider mb-4">
              Contato & Agendamento
            </h4>
            
            <div className="space-y-3 text-xs text-[#BCABA0]">
              <a
                href={`https://wa.me/${THERAPIST_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#82B29A]" />
                <span>WhatsApp: {THERAPIST_INFO.whatsappFormatted}</span>
              </a>

              <a
                href={`mailto:${THERAPIST_INFO.email}`}
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#E0B89C]" />
                <span>{THERAPIST_INFO.email}</span>
              </a>

              <a
                href={THERAPIST_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#D88A8A]" />
                <span>{THERAPIST_INFO.instagram}</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-[#B59C8F] shrink-0 mt-0.5" />
                <span>Atendimentos Online (Brasil e Exterior) e Presencial com agendamento prévio.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Ethical Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#958378]">
          <div className="text-center md:text-left max-w-2xl leading-relaxed">
            <p>
              © {new Date().getFullYear()} Maze Gusmão & Instituto NovaHera. Todos os direitos reservados.
            </p>
            <p className="text-[11px] text-[#7F6F65] mt-1">
              Nota Ética: As práticas integrativas e a constelação sistêmica são abordagens complementares de autoconhecimento e desenvolvimento humano, e não substituem diagnósticos ou tratamentos médicos/psiquiátricos quando recomendados.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-[#3B251F] hover:bg-[#4E322A] text-white flex items-center gap-1.5 transition-colors cursor-pointer text-xs shrink-0"
            aria-label="Voltar ao topo da página"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
