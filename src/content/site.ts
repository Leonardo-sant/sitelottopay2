// ============================================================
// LOTTOPAY — Conteúdo centralizado do site
// Edite este arquivo para alterar textos, links e dados.
// ============================================================

export const siteContent = {
  // ---- Contato ----
  contact: {
    email: "contato@lottopay.com.br", // PLACEHOLDER — substituir pelo e-mail real
  },

  // ---- Links legais ----
  links: {
    privacy: "#", // PLACEHOLDER — link da Política de Privacidade
    terms: "#", // PLACEHOLDER — link dos Termos de Uso
  },

  // ---- Quem Somos — cards estatísticos ----
  quemSomos: {
    stats: [
      { value: "04", label: "Marcas integradas em uma única operação" },
      { value: "RN", label: "Operação dedicada ao Rio Grande do Norte" },
      { value: "100%", label: "Transações monitoradas e rastreáveis" },
      { value: "24/7", label: "Monitoramento contínuo das plataformas" },
    ],
  },

  // ---- Marcas — cores das barras superiores dos cards ----
  brands: {
    lottopay: {
      name: "LOTTOPAY",
      tagline: "Tecnologia & operação",
      color: "#2BBCC9",
      description:
        "A base tecnológica e operacional do ecossistema: plataformas, meios de pagamento, monitoramento e governança.",
    },
    lotoPotiguar: {
      name: "LOTO POTIGUAR",
      tagline: "Loteria estadual",
      color: "#63B447",
      description:
        "Operação lotérica desenvolvida para o Rio Grande do Norte, com produtos, plataformas e canais voltados ao público potiguar.",
    },
    loteriaDaGente: {
      name: "LOTERIA DA GENTE",
      tagline: "Proximidade",
      color: "#1A6B4A",
      description:
        "A marca do dia a dia: linguagem próxima, acesso simples e presença nos canais em que o potiguar já está.",
    },
    raizBet: {
      name: "RAIZ BET",
      tagline: "Entretenimento",
      color: "#82D926",
      description:
        "Experiência digital de entretenimento, construída sobre a mesma estrutura de segurança, controle e rastreabilidade.",
    },
  },

  // ---- Atuação ----
  atuacao: [
    {
      icon: "technology",
      title: "Tecnologia e plataformas",
      description:
        "Desenvolvimento e gestão das plataformas que sustentam produtos lotéricos e de entretenimento, com arquitetura preparada para escala.",
    },
    {
      icon: "payment",
      title: "Meios de pagamento",
      description:
        "Estrutura de pagamentos integrada, com liquidação segura, conciliação permanente e rastreabilidade de cada transação.",
    },
    {
      icon: "channels",
      title: "Canais físicos e digitais",
      description:
        "Presença integrada entre pontos de atendimento presenciais e canais digitais, com experiência consistente em todos os contatos.",
    },
    {
      icon: "monitoring",
      title: "Monitoramento das operações",
      description:
        "Acompanhamento contínuo de desempenho, disponibilidade e integridade das operações, com indicadores e alertas em tempo real.",
    },
    {
      icon: "security",
      title: "Segurança da informação",
      description:
        "Proteção dos dados dos usuários e da integridade das plataformas, com controles de acesso, criptografia e políticas de segurança.",
    },
    {
      icon: "tools",
      title: "Ferramentas de controle",
      description:
        "Gestão, auditoria e governança das operações por meio de ferramentas que garantem previsibilidade e conformidade.",
    },
  ],

  // ---- Modalidades ----
  modalidades: [
    {
      title: "Loteria Passiva",
      description: "Sorteios com bilhetes pré-impressos e prêmios programados.",
    },
    {
      title: "Loteria Instantânea",
      description: "Prêmios rápidos e diretos, com resultados imediatos.",
    },
    {
      title: "Prognósticos Numéricos",
      description: "Sorteios periódicos baseados na escolha de números.",
    },
    {
      title: "Prognóstico Específico",
      description: "Resultados vinculados a eventos ou datas especiais.",
    },
    {
      title: "Apostas de Quota Fixa",
      description: "O valor do prêmio é conhecido no momento da aposta.",
    },
    {
      title: "Prognóstico Esportivo",
      description: "Resultados baseados em competições oficiais.",
    },
  ],

  // ---- Impacto ----
  impacto: [
    { icon: "bookOpen", title: "Educação", description: "Apoio à rede de ensino." },
    { icon: "runner", title: "Esporte", description: "Incentivo a projetos e espaços." },
    { icon: "people", title: "Cultura", description: "Valorização das nossas raízes." },
    { icon: "camera", title: "Turismo", description: "Fomento e divulgação local." },
    { icon: "heart", title: "Saúde", description: "Mais acesso e estrutura." },
    {
      icon: "handshake",
      title: "Assistência Social",
      description: "Proteção a quem mais precisa.",
    },
  ],

  // ---- Governança ----
  governanca: [
    {
      number: "01",
      title: "Integridade das plataformas",
      description:
        "Sistemas auditáveis, com controle de versão, testes automatizados e monitoramento contínuo.",
    },
    {
      number: "02",
      title: "Rastreabilidade das operações",
      description:
        "Cada transação é registrada com identificador único, permitindo auditoria completa.",
    },
    {
      number: "03",
      title: "Segurança das transações",
      description:
        "Criptografia ponta a ponta, autenticação multifator e proteção contra fraudes.",
    },
    {
      number: "04",
      title: "Proteção das informações",
      description:
        "Dados dos usuários protegidos com políticas de acesso restrito e conformidade com a LGPD.",
    },
    {
      number: "05",
      title: "Jogo responsável",
      description:
        "Ferramentas de autoexclusão, limites de apostas e campanhas de conscientização.",
    },
  ],

  // ---- Navegação ----
  nav: [
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Atuação", href: "#atuacao" },
    { label: "Modalidades", href: "#modalidades" },
    { label: "Impacto", href: "#impacto" },
    { label: "Governança", href: "#governanca" },
    { label: "Marcas", href: "#marcas" },
  ],
} as const;
