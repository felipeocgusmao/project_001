import { ServiceItem, TestimonialItem, FAQItem } from '../types';

export const THERAPIST_INFO = {
  name: "Maze Gusmão",
  title: "Terapeuta Sistêmica & Consteladora Familiar",
  institute: "Instituto NovaHera",
  method: "Método Euponikus®",
  tagline: "Acolher • Curar • Transformar",
  mantra: "Restaurar famílias é restaurar destinos.",
  whatsappNumber: "5511999999999", // Editable in production
  whatsappFormatted: "(11) 99999-9999",
  email: "contato@institutonovahera.com.br",
  instagram: "@institutonovahera",
  instagramUrl: "https://instagram.com/institutonovahera",
  website: "institutonovahera.com.br",
  location: "Atendimentos Presenciais & Online para o Brasil e Exterior",
  stats: [
    { number: "+10", label: "Anos de Dedicação Terapêutica" },
    { number: "+2.500", label: "Vidas e Famílias Atendidas" },
    { number: "100%", label: "Sigilo & Acolhimento Humanizado" },
    { number: "18+", label: "Países Alcançados no Online" },
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "constelacao-familiar",
    title: "Constelação Familiar Sistêmica",
    tagline: "Compreender padrões ocultos e libertar o amor",
    description: "Um mergulho profundo no seu campo morfogenético para identificar emaranhamentos inconscientes, repetições de destino e lealdades invisíveis que travam sua vida. Na sessão, olhamos com reverência para o que veio antes para abrir espaço para o novo.",
    benefits: [
      "Identificação e liberação de nós sistêmicos ancestrais",
      "Restauração da ordem do amor (Pertencimento, Ordem e Equilíbrio)",
      "Atendimento individual com bonecos sistêmicos e âncoras de solo",
      "Eficácia comprovada tanto presencialmente quanto por videochamada"
    ],
    format: "Online & Presencial",
    duration: "1h30 a 2h por sessão",
    featured: true,
    iconName: "Sparkles"
  },
  {
    id: "terapia-sistemica",
    title: "Terapia Sistêmica Individual",
    tagline: "Acompanhamento contínuo para o seu despertar",
    description: "Processo terapêutico acolhedor e regular para fortalecimento da autoestima, superação de traumas, manejo de ansiedade e tomada de decisões conscientes. Um espaço seguro para você ser verdadeiramente quem você é.",
    benefits: [
      "Autoconhecimento profundo e regulação emocional",
      "Clareza para transições de carreira e vida pessoal",
      "Desenvolvimento de limites saudáveis e autocompaixão",
      "Acompanhamento personalizado quinzenal ou mensal"
    ],
    format: "Online & Presencial",
    duration: "60 minutos",
    featured: false,
    iconName: "Heart"
  },
  {
    id: "reconexao-relacionamentos",
    title: "Harmonização de Casal & Relações",
    tagline: "Equilíbrio entre as energias masculina e feminina",
    description: "Quando homens e mulheres compreendem os papéis sistêmicos e equilibram o dar e receber, as relações florescem. Atendimento focado em restaurar a intimidade, curar feridas de traições ou desencontros e transformar conflitos em respeito mútuo.",
    benefits: [
      "Reconexão autêntica das energias masculina e feminina",
      "Comunicação não violenta e compassiva",
      "Equilíbrio saudável entre o dar e receber na relação",
      "Resolução pacífica de crises ou separações conscientes"
    ],
    format: "Online & Presencial",
    duration: "1h30",
    featured: false,
    iconName: "Users"
  },
  {
    id: "desbloqueio-financeiro",
    title: "Desbloqueio do Fluxo da Prosperidade",
    tagline: "A relação com o dinheiro espelha a relação com a vida",
    description: "Na visão sistêmica, o dinheiro e o sucesso profissional estão intimamente ligados à nossa aceitação da mãe e do pai e à permissão interna para ser bem-sucedido. Liberte culpas inconscientes de prosperar mais que os antepassados.",
    benefits: [
      "Cura de crenças de escassez e autossabotagem profissional",
      "Reconciliação profunda com a energia do dinheiro e abundância",
      "Desbloqueio de projetos profissionais e negócios",
      "Permissão interior para receber e prosperar em paz"
    ],
    format: "Online & Presencial",
    duration: "1h30",
    featured: false,
    iconName: "TrendingUp"
  },
  {
    id: "cura-raizes-ancestrais",
    title: "Cura das Raízes: Força do Pai & Nutrição da Mãe",
    tagline: "Tomar os pais no coração para conquistar seu destino",
    description: "A força do pai nos dá direção, coragem para o mundo e proteção. A nutrição da mãe nos traz acolhimento, afeto, saúde e nutrição para a vida. Esta jornada visa curar a relação interna com seus pais, independentemente de estarem vivos ou presentes.",
    benefits: [
      "Cura de mágoas, ressentimentos e julgamentos para com os genitores",
      "Resgate da autoridade interior e firmeza na vida adulta",
      "Nutrição emocional e sensação de amparo e paz interior",
      "Criação de um novo legado positivo para seus filhos"
    ],
    format: "Online & Presencial",
    duration: "1h30 a 2h",
    featured: true,
    iconName: "Compass"
  },
  {
    id: "metodo-euponikus",
    title: "Método Euponikus® (Instituto NovaHera)",
    tagline: "Conecte-se à sua essência primordial",
    description: "Metodologia autoral desenvolvida por Maze Gusmão, unindo os preceitos da Fenomenologia Sistêmica, Bioenergética e Práticas Integrativas para um processo de reprogramação emocional e reconexão espiritual sem dogmas.",
    benefits: [
      "Abordagem holística e integrativa exclusiva",
      "Vivências práticas e exercícios sistêmicos personalizados",
      "Reintegração de partes esquecidas da sua essência",
      "Material de suporte e ancoragem pós-sessão"
    ],
    format: "Online & Presencial",
    duration: "Ciclo de Imersão",
    featured: false,
    iconName: "ShieldCheck"
  }
];

export const PILLARS = [
  {
    title: "Cura das Raízes",
    subtitle: "Ancestralidade e Origem",
    desc: "Resgatamos a história com respeito, transformando dores em honra e aprendizado.",
    icon: "TreePine"
  },
  {
    title: "Reconexão Familiar",
    subtitle: "Harmonização de Vínculos",
    desc: "Harmonizamos relações e restauramos vínculos a partir da verdade e do amor livre de cobranças.",
    icon: "HeartHandshake"
  },
  {
    title: "Força do Pai",
    subtitle: "Direção e Propósito",
    desc: "Reconectamos o fluxo profundo que traz foco, coragem para o mundo, proteção e realização.",
    icon: "Sun"
  },
  {
    title: "Nutrição da Mãe",
    subtitle: "Abundância e Afeto",
    desc: "Restauramos o fluxo para a vida que gera acolhimento, nutrição emocional, saúde e prosperidade.",
    icon: "Sparkle"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    name: "Carolina Menezes",
    location: "São Paulo, SP (Atendimento Online)",
    service: "Constelação Familiar",
    text: "A Constelação com a Maze foi um divisor de águas na minha vida. Eu carregava uma culpa inexplicável e vivia repetindo casamentos difíceis como minha mãe. Após a sessão com os bonecos, uma paz imensa me invadiu. Em 3 meses, minha relação comigo mesma mudou completamente.",
    rating: 5
  },
  {
    id: "2",
    name: "Rodrigo Vasconcelos",
    location: "Belo Horizonte, MG (Atendimento Online)",
    service: "Desbloqueio Financeiro",
    text: "Eu sentia que trabalhava incansavelmente, mas o dinheiro escorria pelas mãos. Na sessão sistêmica com a Maze, descobri uma lealdade profunda com a falência do meu avô. A clareza e a condução amorosa da Maze são de um nível profissional indescritível.",
    rating: 5
  },
  {
    id: "3",
    name: "Juliana & André",
    location: "Curitiba, PR (Presencial)",
    service: "Terapia de Casal Sistêmica",
    text: "Estávamos à beira do divórcio. O acolhimento no Instituto NovaHera nos fez enxergar que não estávamos brigando um com o outro, mas sim repetindo as dores de nossas famílias de origem. Maze nos ensinou a olhar com amor e maturidade.",
    rating: 5
  },
  {
    id: "4",
    name: "Renata Castro",
    location: "Lisboa, Portugal (Atendimento Online)",
    service: "Cura das Raízes & Força do Pai",
    text: "Moro fora do Brasil e achei que a distância dificultaria, mas a sessão online foi tão intensa e profunda quanto presencial. Consegui finalmente tomar meu pai no coração após 15 anos de mágoa. Recomendo de olhos fechados!",
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "1",
    category: "Constelação",
    question: "Como funciona a Constelação Familiar Sistêmica Online?",
    answer: "A Constelação Online tem exatamente a mesma precisão e força da presencial. Utilizamos a mesa sistêmica com bonecos e âncoras fenomenológicas em alta definição por videochamada (Google Meet ou Zoom). O campo de informações familiares opera além do espaço físico, permitindo identificar e desemaranhar nós com total nitidez e sigilo."
  },
  {
    id: "2",
    category: "Geral",
    question: "A Constelação tem vínculo religioso ou espiritual?",
    answer: "Não. A Constelação Sistêmica é uma abordagem fenomenológica e terapêutica desenvolvida pelo psicoterapeuta alemão Bert Hellinger e apoiada pelas leis sistêmicas (Pertencimento, Ordem e Equilíbrio). Ela respeita integralmente todas as crenças, credos ou visões de mundo."
  },
  {
    id: "3",
    category: "Constelação",
    question: "Quantas sessões de Constelação são necessárias para resolver uma questão?",
    answer: "A Constelação é uma intervenção pontual e resolutiva: uma única sessão já traz clareza profunda e movimenta forças internas que continuam agindo por semanas e meses. Você pode constelar novos temas específicos no futuro conforme sinta necessidade."
  },
  {
    id: "4",
    category: "Online",
    question: "O que preciso preparar para uma sessão online?",
    answer: "Apenas um local silencioso e privativo onde você possa falar e se emocionar livremente sem interrupções, uma conexão estável de internet e preferencialmente fones de ouvido. Deixe também um copo d'água ou chá por perto."
  },
  {
    id: "5",
    category: "Valores",
    question: "Como agendar e quais as formas de pagamento?",
    answer: "Você pode solicitar seu agendamento diretamente pelo formulário desta página ou clicando no botão do WhatsApp. As formas de pagamento aceitas incluem PIX, transferência bancária e cartão de crédito (com opção de parcelamento). O atendimento é confirmado após o alinhamento de data e horário."
  },
  {
    id: "6",
    category: "Geral",
    question: "Qual a diferença entre Terapia Sistêmica e Constelação Familiar?",
    answer: "A Constelação é um movimento focal que expõe e reorganiza a raiz inconsciente de um problema específico através do campo familiar. A Terapia Sistêmica é um processo contínuo de autoconhecimento, onde integramos essas percepções no dia a dia, fortalecendo sua maturidade emocional e autonomia."
  }
];
