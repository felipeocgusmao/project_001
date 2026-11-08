/**
 * Maze Gusmão — Terapeuta Sistêmica & Consteladora Multidimensional
 * Instituto Nova Era — JavaScript puro (sem dependências)
 *
 * IMPORTANTE: WHATSAPP_NUMBER está com um número placeholder.
 * Troque pelo número real antes de publicar o site em produção.
 */

document.addEventListener('DOMContentLoaded', () => {

  const WHATSAPP_NUMBER = '5511999999999'; // <-- PLACEHOLDER: trocar antes de publicar

  const buildWhatsAppUrl = (message) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  /* ======================================================================
     0. DADOS (áreas de atuação, quiz)
     ====================================================================== */

  const SERVICES = [
    {
      title: 'Família e relacionamentos',
      icon: 'icon-users',
      description: 'Padrões que se repetem na família e nas relações, a dinâmica com pai e mãe e os vínculos afetivos. Também atuo com crianças e adolescentes.',
      items: ['Relação com pai e mãe', 'Relacionamentos afetivos', 'Padrões familiares repetitivos', 'Crianças e adolescentes']
    },
    {
      title: 'Dinheiro, prosperidade e trabalho',
      icon: 'icon-trend-up',
      description: 'Quando o desejo de prosperar encontra um bloqueio que não se explica, olhamos para a origem sistêmica dele.',
      items: ['Dinheiro', 'Prosperidade e trabalho', 'Autossabotagem']
    },
    {
      title: 'Emoções, culpa e medo',
      icon: 'icon-heart',
      description: 'Sentimentos que pesam sem uma explicação clara e que muitas vezes pertencem a uma história maior do que a sua.',
      items: ['Culpa e medo', 'Saúde emocional e sintomas com origem sistêmica']
    },
    {
      title: 'Útero, gestação e memórias femininas',
      icon: 'icon-droplet',
      description: 'Um olhar sistêmico para o feminino: útero, gestação e as perdas que ficam registradas nas memórias femininas.',
      items: ['Útero', 'Gestação', 'Perdas em memórias femininas']
    },
    {
      title: 'Vida profissional e empresas',
      icon: 'icon-award',
      description: 'Dinâmicas sistêmicas que também aparecem na carreira, no trabalho e na gestão de uma empresa.',
      items: ['Vida profissional', 'Empresas']
    },
    {
      title: 'Ambientes, casas e imóveis',
      icon: 'icon-map-pin',
      description: 'A constelação também pode ser aplicada aos espaços onde a vida e o trabalho acontecem.',
      items: ['Ambientes', 'Casas', 'Negócios e imóveis']
    }
  ];

  const QUIZ_AREAS = [
    {
      id: 'familia',
      title: 'Pai, mãe e família',
      subtitle: 'Mágoas, distância, conflitos familiares ou padrões que se repetem na família.',
      recommendation: 'Constelação sobre família e relação com pai e mãe',
      serviceTitle: 'Família e relacionamentos'
    },
    {
      id: 'relacionamentos',
      title: 'Relacionamentos afetivos',
      subtitle: 'Conflitos com parceiro(a), términos dolorosos ou repetição de padrões afetivos.',
      recommendation: 'Constelação sobre relacionamentos afetivos',
      serviceTitle: 'Família e relacionamentos'
    },
    {
      id: 'prosperidade',
      title: 'Dinheiro, prosperidade e trabalho',
      subtitle: 'Desejo de prosperar, mas algo sempre trava: no dinheiro, na carreira ou nos negócios.',
      recommendation: 'Constelação sobre dinheiro, prosperidade e trabalho',
      serviceTitle: 'Dinheiro, prosperidade e trabalho'
    },
    {
      id: 'emocional',
      title: 'Culpa, medo e autossabotagem',
      subtitle: 'Medo sem explicação clara, culpa constante ou sensação de se sabotar.',
      recommendation: 'Constelação sobre culpa, medo e autossabotagem',
      serviceTitle: 'Emoções, culpa e medo'
    }
  ];

  const QUIZ_DURATIONS = [
    { id: 'recente', label: 'Há alguns meses (algo recente)' },
    { id: 'anos', label: 'Há 1 a 3 anos (vem se repetindo)' },
    { id: 'sempre', label: 'Desde a infância / parece algo recorrente na família' }
  ];

  const QUIZ_GOALS = [
    { id: 'clareza', label: 'Clareza sobre a origem do padrão' },
    { id: 'peso', label: 'Aliviar um peso emocional que carrego' },
    { id: 'destravar', label: 'Destravar uma área da minha vida' }
  ];

  /* ======================================================================
     1. HELPERS
     ====================================================================== */

  const icon = (name, size = 16) =>
    `<svg width="${size}" height="${size}"><use href="#${name}"/></svg>`;

  const escapeHtml = (str) =>
    String(str).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  /* ======================================================================
     2. MENU MOBILE
     ====================================================================== */

  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = !mobileDrawer.hidden;
      mobileDrawer.hidden = isOpen;
      mobileToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileToggle.innerHTML = isOpen ? icon('icon-menu', 24) : icon('icon-close', 24);
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileDrawer.hidden = true;
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileToggle.innerHTML = icon('icon-menu', 24);
      });
    });
  }

  /* ======================================================================
     3. HEADER — sombra ao rolar
     ====================================================================== */

  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ======================================================================
     4. RENDERIZAR CARDS DE SERVIÇOS
     ====================================================================== */

  const servicesGrid = document.getElementById('servicesGrid');

  const renderServiceOptions = (selectEl, preselected) => {
    selectEl.innerHTML = SERVICES.map(
      (s) => `<option value="${escapeHtml(s.title)}" ${s.title === preselected ? 'selected' : ''}>${escapeHtml(s.title)}</option>`
    ).join('');
  };

  if (servicesGrid) {
    servicesGrid.innerHTML = SERVICES.map((s) => `
      <article class="service-card">
        <div>
          <div class="service-card-head">
            <div class="service-icon">${icon(s.icon, 20)}</div>
          </div>
          <h3>${escapeHtml(s.title)}</h3>
          <p class="service-desc">${escapeHtml(s.description)}</p>
          <div class="service-benefits">
            <p class="service-benefits-title">Temas atendidos:</p>
            <ul>
              ${s.items.map((item) => `<li>${icon('icon-check', 14)}<span>${escapeHtml(item)}</span></li>`).join('')}
            </ul>
          </div>
        </div>
        <div class="service-footer">
          <button type="button" class="btn btn-secondary service-btn" data-open-modal data-service="${escapeHtml(s.title)}">
            Agendar sobre este tema ${icon('icon-arrow-right', 14)}
          </button>
        </div>
      </article>
    `).join('');
  }

  /* ======================================================================
     5. FAQ ACCORDION
     ====================================================================== */

  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((el) => {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ======================================================================
     6. TOGGLE GROUPS (modalidade / turno) — usados no form e no modal
     ====================================================================== */

  const toggleGroupValues = {}; // { groupName: 'value' }

  document.querySelectorAll('[data-toggle-group]').forEach((group) => {
    const name = group.dataset.toggleGroup;
    const activeBtn = group.querySelector('.toggle-btn.is-active');
    toggleGroupValues[name] = activeBtn ? activeBtn.dataset.value : group.querySelector('.toggle-btn').dataset.value;

    group.querySelectorAll('.toggle-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.toggle-btn').forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        toggleGroupValues[name] = btn.dataset.value;
      });
    });
  });

  /* ======================================================================
     7. QUIZ SISTÊMICO INTERATIVO (Autoavaliação)
     ====================================================================== */

  const quizContent = document.getElementById('quizContent');
  const quizStepLabel = document.getElementById('quizStepLabel');
  const quizPercentLabel = document.getElementById('quizPercentLabel');
  const quizProgressFill = document.getElementById('quizProgressFill');

  const quizState = { step: 1, area: null, duration: null, goal: null };

  const updateQuizProgress = () => {
    const shownStep = Math.min(quizState.step, 3);
    quizStepLabel.textContent = quizState.step === 4 ? 'Resultado Concluído' : `Etapa ${shownStep} de 3`;
    const pct = quizState.step === 4 ? 100 : Math.round(((quizState.step - 1) / 3) * 100);
    quizPercentLabel.textContent = quizState.step === 4 ? 'Resultado Concluído' : `${pct}%`;
    quizProgressFill.style.width = `${(quizState.step / 4) * 100}%`;
  };

  const renderQuizStep1 = () => {
    quizContent.innerHTML = `
      <h3 class="quiz-step-title">1. Onde você sente o maior peso ou repetição na sua vida atualmente?</h3>
      <p class="quiz-step-sub">Escolha a alternativa que mais ressoa com seu coração neste momento:</p>
      <div class="quiz-options quiz-options--2col">
        ${QUIZ_AREAS.map((a) => `
          <button type="button" class="quiz-option" data-area="${a.id}">
            <div><h4>${escapeHtml(a.title)}</h4><p>${escapeHtml(a.subtitle)}</p></div>
            <span class="quiz-option-cta">Selecionar ${icon('icon-arrow-right', 14)}</span>
          </button>
        `).join('')}
      </div>
    `;
    quizContent.querySelectorAll('[data-area]').forEach((btn) => {
      btn.addEventListener('click', () => {
        quizState.area = btn.dataset.area;
        quizState.step = 2;
        renderQuiz();
      });
    });
  };

  const renderQuizStep2 = () => {
    quizContent.innerHTML = `
      <h3 class="quiz-step-title">2. Há quanto tempo você percebe essa dificuldade ou padrão?</h3>
      <p class="quiz-step-sub">Isso ajuda a entender a profundidade do emaranhamento sistêmico:</p>
      <div class="quiz-options">
        ${QUIZ_DURATIONS.map((d) => `
          <button type="button" class="quiz-option-line" data-duration="${d.id}">
            <span>${escapeHtml(d.label)}</span>${icon('icon-arrow-right', 16)}
          </button>
        `).join('')}
      </div>
      <button type="button" class="quiz-back" id="quizBack2">← Voltar à pergunta anterior</button>
    `;
    quizContent.querySelectorAll('[data-duration]').forEach((btn) => {
      btn.addEventListener('click', () => {
        quizState.duration = btn.dataset.duration;
        quizState.step = 3;
        renderQuiz();
      });
    });
    document.getElementById('quizBack2').addEventListener('click', () => { quizState.step = 1; renderQuiz(); });
  };

  const renderQuizStep3 = () => {
    quizContent.innerHTML = `
      <h3 class="quiz-step-title">3. O que você mais gostaria de levar da sessão?</h3>
      <p class="quiz-step-sub">Escolha o que mais se aproxima do que você busca:</p>
      <div class="quiz-options">
        ${QUIZ_GOALS.map((g) => `
          <button type="button" class="quiz-option-line" data-goal="${g.id}">
            <span>${escapeHtml(g.label)}</span>${icon('icon-arrow-right', 16)}
          </button>
        `).join('')}
      </div>
      <button type="button" class="quiz-back" id="quizBack3">← Voltar à pergunta anterior</button>
    `;
    quizContent.querySelectorAll('[data-goal]').forEach((btn) => {
      btn.addEventListener('click', () => {
        quizState.goal = btn.dataset.goal;
        quizState.step = 4;
        renderQuiz();
      });
    });
    document.getElementById('quizBack3').addEventListener('click', () => { quizState.step = 2; renderQuiz(); });
  };

  const renderQuizResult = () => {
    const area = QUIZ_AREAS.find((a) => a.id === quizState.area);
    if (!area) { quizState.step = 1; renderQuiz(); return; }

    const waMessage =
      `Olá Maze! Fiz o guia de autoavaliação no site.\n\n` +
      `📌 Área que mais pesa: ${area.title}\n` +
      `📌 Sugestão de tema: ${area.recommendation}\n\n` +
      `Gostaria de saber os horários disponíveis para agendar minha sessão.`;

    quizContent.innerHTML = `
      <div class="quiz-result-head">
        <div class="quiz-result-icon">${icon('icon-check-circle', 24)}</div>
        <span class="quiz-result-eyebrow">Orientação preliminar</span>
        <h3>Um bom ponto de partida</h3>
      </div>
      <div class="quiz-result-box">
        <div class="quiz-result-label">${icon('icon-sparkles', 14)} Tema sugerido para a sua sessão:</div>
        <h4>${escapeHtml(area.recommendation)}</h4>
        <p>Você indicou <strong>${escapeHtml(area.title)}</strong> como a área que mais pesa agora. Na sessão, o primeiro passo é entender o seu motivo e ler o campo para chegar à origem do padrão.</p>
        <p>Esta é apenas uma orientação inicial e não substitui a conversa e a leitura feitas no atendimento.</p>
      </div>
      <div class="quiz-result-actions">
        <a href="${buildWhatsAppUrl(waMessage)}" target="_blank" rel="noopener noreferrer" class="btn btn-sage-dark">${icon('icon-chat')} Enviar no WhatsApp &amp; Agendar</a>
        <button type="button" class="btn btn-primary" id="quizGoToModal">Agendar Pelo Site</button>
      </div>
      <div class="quiz-reset">
        <button type="button" id="quizResetBtn">${icon('icon-refresh', 13)} Refazer com outro tema</button>
      </div>
    `;

    document.getElementById('quizGoToModal').addEventListener('click', () => openBookingModal(area.serviceTitle));
    document.getElementById('quizResetBtn').addEventListener('click', () => {
      quizState.step = 1; quizState.area = null; quizState.duration = null; quizState.goal = null;
      renderQuiz();
    });
  };

  function renderQuiz() {
    updateQuizProgress();
    if (quizState.step === 1) renderQuizStep1();
    else if (quizState.step === 2) renderQuizStep2();
    else if (quizState.step === 3) renderQuizStep3();
    else renderQuizResult();
  }

  if (quizContent) renderQuiz();

  /* ======================================================================
     8. FORMULÁRIO DE AGENDAMENTO (seção #agendar)
     ====================================================================== */

  const bookingForm = document.getElementById('bookingForm');
  const bookingSuccess = document.getElementById('bookingSuccess');
  const formServiceSelect = document.getElementById('formService');

  if (formServiceSelect) renderServiceOptions(formServiceSelect);

  const getBookingWhatsAppMessage = () => {
    const name = document.getElementById('formName').value || 'Interessado(a)';
    const phone = document.getElementById('formPhone').value;
    const service = formServiceSelect.value;
    const bestTime = (toggleGroupValues.bestTime || 'tarde').toUpperCase();
    const situation = document.getElementById('formMessage').value;

    return (
      `Olá Maze! Gostaria de agendar uma sessão.\n\n` +
      `👤 Nome: ${name}\n` +
      `📌 Tema: ${service}\n` +
      `💻 Formato: Atendimento online\n` +
      `⏰ Turno de preferência: ${bestTime}\n` +
      (situation ? `📝 Minha situação: ${situation}\n` : '') +
      `\nPoderia me informar as próximas datas disponíveis?`
    );
  };

  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!bookingForm.checkValidity()) { bookingForm.reportValidity(); return; }

      document.getElementById('successName').textContent = document.getElementById('formName').value;
      document.getElementById('successService').textContent = formServiceSelect.value;
      document.getElementById('successPhone').textContent = document.getElementById('formPhone').value;

      bookingForm.hidden = true;
      bookingSuccess.hidden = false;
      bookingSuccess.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    document.getElementById('bookingWhatsAppBtn').addEventListener('click', () => {
      window.open(buildWhatsAppUrl(getBookingWhatsAppMessage()), '_blank');
    });

    document.getElementById('successWhatsAppBtn').addEventListener('click', () => {
      window.open(buildWhatsAppUrl(getBookingWhatsAppMessage()), '_blank');
    });

    document.getElementById('successResetBtn').addEventListener('click', () => {
      bookingForm.reset();
      bookingForm.hidden = false;
      bookingSuccess.hidden = true;
      renderServiceOptions(formServiceSelect);
    });
  }

  /* ======================================================================
     9. MODAL DE AGENDAMENTO RÁPIDO
     ====================================================================== */

  const modal = document.getElementById('bookingModal');
  const modalFormWrap = document.getElementById('modalFormWrap');
  const modalSuccessWrap = document.getElementById('modalSuccessWrap');
  const modalForm = document.getElementById('modalForm');
  const modalServiceSelect = document.getElementById('modalService');

  function openBookingModal(preselectedService) {
    if (!modal) return;
    if (modalServiceSelect) renderServiceOptions(modalServiceSelect, preselectedService);
    modalForm.reset();
    if (modalServiceSelect && preselectedService) modalServiceSelect.value = preselectedService;
    modalFormWrap.hidden = false;
    modalSuccessWrap.hidden = true;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
    document.getElementById('modalName').focus({ preventScroll: true });
  }

  function closeBookingModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-modal]').forEach((btn) => {
    btn.addEventListener('click', () => openBookingModal(btn.dataset.service));
  });

  if (modal) {
    document.getElementById('modalCloseBtn').addEventListener('click', closeBookingModal);
    modal.addEventListener('click', (e) => { if (e.target === modal) closeBookingModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.hidden) closeBookingModal(); });

    const getModalWhatsAppMessage = () => {
      const name = document.getElementById('modalName').value || 'Interessado(a)';
      const service = modalServiceSelect.value;
      return (
        `Olá Maze Gusmão! Gostaria de agendar uma sessão.\n\n` +
        `👤 Nome: ${name}\n` +
        `📌 Tema: ${service}\n` +
        `💻 Formato: Atendimento online\n\n` +
        `Por favor, me informe as próximas vagas disponíveis.`
      );
    };

    modalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!modalForm.checkValidity()) { modalForm.reportValidity(); return; }

      document.getElementById('modalSuccessName').textContent = document.getElementById('modalName').value;
      document.getElementById('modalSuccessPhone').textContent = document.getElementById('modalPhone').value;

      modalFormWrap.hidden = true;
      modalSuccessWrap.hidden = false;
    });

    document.getElementById('modalWhatsAppBtn').addEventListener('click', () => {
      window.open(buildWhatsAppUrl(getModalWhatsAppMessage()), '_blank');
      closeBookingModal();
    });

    document.getElementById('modalSuccessWhatsAppBtn').addEventListener('click', () => {
      window.open(buildWhatsAppUrl(getModalWhatsAppMessage()), '_blank');
    });

    document.getElementById('modalSuccessCloseBtn').addEventListener('click', closeBookingModal);
  }

  /* ======================================================================
     10. VOLTAR AO TOPO + ANO DO RODAPÉ
     ====================================================================== */

  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  const footerYear = document.getElementById('footerYear');
  if (footerYear) footerYear.textContent = new Date().getFullYear();

});
