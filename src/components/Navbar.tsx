import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar, MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { THERAPIST_INFO } from '../data/therapyData';

interface NavbarProps {
  onOpenBookingModal: (service?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Pilares & Método', href: '#metodo' },
    { label: 'Autoavaliação', href: '#autoavaliacao' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dúvidas', href: '#faq' },
  ];

  return (
    <>
      {/* Top micro banner for trust */}
      <aside aria-label="Aviso de atendimento" className="bg-[#4E342E] text-[#F3ECE6] text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="inline-block w-2 h-2 rounded-full bg-[#82B29A] animate-pulse"></span>
          <span>Agenda aberta para atendimentos <strong>Online (Brasil e Exterior)</strong> e <strong>Presencial</strong></span>
          <span className="hidden md:inline opacity-60">|</span>
          <a
            href={`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=Ol%C3%A1%20Maze,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-1 text-[#E0B89C] hover:underline hover:text-white transition-colors"
          >
            <MessageCircle className="w-3 h-3" /> Fale no WhatsApp
          </a>
        </div>
      </aside>

      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#EAE2D8] py-3'
            : 'bg-[#FAF8F5] py-4 md:py-5 border-b border-[#EAE2D8]/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a href="#inicio" className="flex items-center gap-3 group focus:outline-hidden">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#4E342E] text-[#FAF8F5] flex items-center justify-center font-serif text-lg font-bold border border-[#A67C52] group-hover:bg-[#845948] transition-colors shadow-xs">
              MG
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#3A241D] group-hover:text-[#845948] transition-colors">
                Maze Gusmão
              </span>
              <span className="text-[11px] font-medium tracking-wider uppercase text-[#735A4F]">
                Terapeuta Sistêmica • Método Euponikus®
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#54433E]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#A65B32] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-[2px] after:bg-[#A65B32] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=Ol%C3%A1%20Maze,%20gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20as%20sess%C3%B5es.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-semibold text-[#54433E] hover:text-[#3A241D] flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#5A7D6C]" />
              <span>Dúvidas?</span>
            </a>

            <button
              id="nav-agendar-btn"
              onClick={() => onOpenBookingModal()}
              className="px-4.5 py-2.5 bg-[#4E342E] hover:bg-[#3A241D] text-[#FAF8F5] text-xs sm:text-sm font-semibold rounded-lg shadow-xs hover:shadow-md transition-all flex items-center gap-2 cursor-pointer active:scale-98"
            >
              <Calendar className="w-4 h-4 text-[#E2B79A]" />
              <span>Agendar Consulta</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            id="mobile-menu-toggle-btn"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-[#4E342E] hover:bg-[#EFE7DE] transition-colors"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#EAE2D8] bg-[#FAF8F5] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-base font-medium text-[#4E342E] hover:bg-[#EFE7DE] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 border-t border-[#EAE2D8] flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBookingModal();
                  }}
                  className="w-full py-3 bg-[#4E342E] text-white font-semibold rounded-lg flex items-center justify-center gap-2 text-sm shadow-xs"
                >
                  <Calendar className="w-4 h-4 text-[#E2B79A]" />
                  Agendar Sessão Agora
                </button>
                <a
                  href={`https://wa.me/${THERAPIST_INFO.whatsappNumber}?text=Ol%C3%A1%20Maze,%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 border border-[#82B29A] text-[#2C483B] bg-[#E8F3EE] font-medium rounded-lg flex items-center justify-center gap-2 text-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#2C483B]" />
                  Conversar Diretamente no WhatsApp
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
