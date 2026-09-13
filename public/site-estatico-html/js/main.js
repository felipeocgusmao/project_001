/**
 * Maze Gusmão - Terapeuta Sistêmica
 * Vanilla JavaScript (Pronto para Produção & Vercel)
 */

document.addEventListener('DOMContentLoaded', () => {
  const WHATSAPP_NUMBER = '5511999999999'; // Substitua pelo seu número comercial com DDI e DDD

  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (mobileBtn && mobileNav) {
    mobileBtn.addEventListener('click', () => {
      const isExpanded = mobileNav.classList.toggle('active');
      mobileBtn.setAttribute('aria-expanded', isExpanded);
    });

    // Close on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
      });
    });
  }

  // 2. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      
      // Close all others
      faqItems.forEach(el => el.classList.remove('open'));

      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 3. Form Handling (Direct WhatsApp Dispatch)
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('formName').value;
      const phone = document.getElementById('formPhone').value;
      const service = document.getElementById('formService').value;
      const modality = document.getElementById('formModality').value;
      const message = document.getElementById('formMessage').value;

      const text = encodeURIComponent(
        `Olá Maze Gusmão!\n\n` +
        `Gostaria de agendar uma consulta:\n` +
        `👤 Nome: ${name}\n` +
        `📱 WhatsApp: ${phone}\n` +
        `📌 Serviço: ${service}\n` +
        `💻 Formato: ${modality}\n` +
        (message ? `📝 Mensagem: ${message}\n` : '') +
        `\nPoderia me informar as datas e horários disponíveis?`
      );

      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');

      // Show confirmation alert in UI
      const feedback = document.getElementById('formFeedback');
      if (feedback) {
        feedback.style.display = 'block';
        feedback.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});
