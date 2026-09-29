export type Lang = "pt" | "en";

function detect(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  return "pt";
}

export const lang: Lang = detect();

export function setLang(l: Lang) {
  try {
    localStorage.setItem("lang", l);
  } catch {}
  window.location.reload();
}

const pt = {
  logo: "PW",
  email: "pedrowallas156@gmail.com",
  phoneLabel: "WhatsApp",
  phone: "+55 11 99880-5585",
  phoneHref: "https://wa.me/5511998805585",
  linkedin: "https://linkedin.com/in/pedro-wallas",
  nav: { about: "SOBRE", work: "PROJETOS", contact: "CONTATO" },
  whatsBtn: "WHATSAPP",
  loading: {
    marquee: ["Analista de Dados", "Analista de Pricing"],
    loading: "Carregando",
    welcome: "Bem-vindo",
  },
  landing: {
    hello: "Olá! Eu sou",
    first: "PEDRO",
    last: "WALLAS",
    lead: "Analista de",
    a: "Dados",
    b: "Pricing",
  },
  about: {
    title: "Sobre mim",
    text: "Transformo dados brutos em decisões de negócio: preços mais inteligentes, processos mais enxutos e relatórios que ajudam de verdade a decidir. Foram quase 3 anos no time central de Revenue Growth Management da Scanntech Brasil, de Aprendiz de Pricing a Estagiário de Análise de Dados. Estudo Análise e Desenvolvimento de Sistemas no Senac SP.",
  },
  what: {
    head: ["O", " QUE", "EU", " FAÇO"],
    description: "Descrição",
    skills: "Habilidades e ferramentas",
    cards: [
      {
        title: "DADOS & PRICING",
        text: "Análise de preços, KPIs de Revenue Growth Management, dashboards e relatórios que sustentam decisões comerciais.",
        tags: ["Excel avançado", "Power BI", "SQL", "Python (pandas)", "Tableau", "Google Sheets", "Análise de preços", "KPIs de RGM"],
      },
      {
        title: "AUTOMAÇÃO & IA",
        text: "Automação de processos repetitivos com IA e scripts, tratamento de bases grandes e integração com CRM.",
        tags: ["Claude", "Web scraping", "Playwright", "Odoo", "RD Station", "Fuzzy matching", "Pipelines de dados"],
      },
    ],
  },
  career: {
    title: ["Carreira", "&", "experiência"],
    items: [
      {
        role: "Aprendiz de Pricing",
        company: "Scanntech Brasil, RGM Central",
        period: "2023",
        text: "Análises estatísticas para decisões de preço e receita, gestão de CRM (Odoo, RD Station), criação de relatórios e campanhas.",
      },
      {
        role: "Estagiário de Análise de Dados",
        company: "Scanntech Brasil, RGM Central",
        period: "2025",
        text: "Coleta, análise e tratamento de dados entre áreas, gestão de leads e automação de processos com Claude, treinamentos internos.",
      },
      {
        role: "Estudante de ADS, Senac SP",
        company: "Em busca de vaga de Analista Jr. de Dados / Pricing",
        period: "AGORA",
        text: "Conclusão prevista em junho de 2027. Foco em dados, inteligência de mercado e automação.",
      },
    ],
  },
  work: {
    title: ["Meus", "Projetos"],
    tools: "Ferramentas",
    projects: [
      { name: "Automação de Feiras com IA", category: "Automação", tools: "Claude, Python, Playwright, Excel", image: "/images/work-automacao.webp", link: "" },
      { name: "Ferramenta DE-PARA", category: "Dados", tools: "Python, fuzzy matching, Power BI", image: "/images/work-depara.webp", link: "" },
      { name: "Dashboard de Pricing", category: "Business Intelligence", tools: "Power BI, Excel", image: "/images/work-pricing.webp", link: "" },
      { name: "Gean Silva Fotografia", category: "Web design", tools: "Design, Vercel", image: "/images/work-gean.webp", link: "https://geansilvafotografia.com.br" },
      { name: "Puro Impacto Fight Gym", category: "Web design", tools: "Design, Vercel", image: "/images/work-puro.webp", link: "https://puro-impacto-fight-gym.vercel.app" },
      { name: "Farangs Fight Gym", category: "Web design", tools: "Design, Vercel", image: "/images/work-farangs.webp", link: "https://farangs-fight-gym.vercel.app" },
    ],
  },
  tech: "Minhas ferramentas",
  contact: {
    title: "Contato",
    email: "E-mail",
    social: "Redes",
    made: ["Design e desenvolvimento", "de", "Pedro Wallas"],
    inspired: "Inspirado no portfólio de Moncy Yohannan",
  },
  meta: {
    title: "Pedro Wallas | Analista de Dados & Pricing",
    description:
      "Portfólio de Pedro Wallas, analista de dados e pricing com experiência em Revenue Growth Management, dashboards e automação com IA.",
  },
};

const en: typeof pt = {
  logo: "PW",
  email: "pedrowallas156@gmail.com",
  phoneLabel: "WhatsApp",
  phone: "+55 11 99880-5585",
  phoneHref: "https://wa.me/5511998805585",
  linkedin: "https://linkedin.com/in/pedro-wallas",
  nav: { about: "ABOUT", work: "WORK", contact: "CONTACT" },
  whatsBtn: "WHATSAPP",
  loading: {
    marquee: ["A Data Analyst", "A Pricing Analyst"],
    loading: "Loading",
    welcome: "Welcome",
  },
  landing: {
    hello: "Hello! I'm",
    first: "PEDRO",
    last: "WALLAS",
    lead: "I work with",
    a: "Data",
    b: "Pricing",
  },
  about: {
    title: "About Me",
    text: "I turn raw data into business decisions: smarter prices, leaner processes and reports that actually help people decide. I spent almost 3 years in the central Revenue Growth Management team at Scanntech Brasil, from Pricing Apprentice to Data Analysis Intern. I'm studying Systems Analysis and Development at Senac SP.",
  },
  what: {
    head: ["W", "HAT", "I", " DO"],
    description: "Description",
    skills: "Skillset & tools",
    cards: [
      {
        title: "DATA & PRICING",
        text: "Price analysis, Revenue Growth Management KPIs, dashboards and reports that support commercial decisions.",
        tags: ["Advanced Excel", "Power BI", "SQL", "Python (pandas)", "Tableau", "Google Sheets", "Price analysis", "RGM KPIs"],
      },
      {
        title: "AUTOMATION & AI",
        text: "Automating repetitive processes with AI and scripts, handling large datasets and CRM integration.",
        tags: ["Claude", "Web scraping", "Playwright", "Odoo", "RD Station", "Fuzzy matching", "Data pipelines"],
      },
    ],
  },
  career: {
    title: ["My career", "&", "experience"],
    items: [
      {
        role: "Pricing Apprentice",
        company: "Scanntech Brasil, RGM Central",
        period: "2023",
        text: "Statistical analysis for pricing and revenue decisions, CRM management (Odoo, RD Station), reports and campaigns.",
      },
      {
        role: "Data Analysis Intern",
        company: "Scanntech Brasil, RGM Central",
        period: "2025",
        text: "Data collection, analysis and processing across teams, lead management and process automation with Claude, internal training.",
      },
      {
        role: "Systems Analysis student, Senac SP",
        company: "Looking for a Junior Data / Pricing Analyst role",
        period: "NOW",
        text: "Graduating in June 2027. Focused on data, market intelligence and automation.",
      },
    ],
  },
  work: {
    title: ["My", "Work"],
    tools: "Tools",
    projects: [
      { name: "AI Trade Show Automation", category: "Automation", tools: "Claude, Python, Playwright, Excel", image: "/images/work-automacao.webp", link: "" },
      { name: "DE-PARA Matching Tool", category: "Data", tools: "Python, fuzzy matching, Power BI", image: "/images/work-depara.webp", link: "" },
      { name: "Pricing Dashboard", category: "Business Intelligence", tools: "Power BI, Excel", image: "/images/work-pricing.webp", link: "" },
      { name: "Gean Silva Fotografia", category: "Web design", tools: "Design, Vercel", image: "/images/work-gean.webp", link: "https://geansilvafotografia.com.br" },
      { name: "Puro Impacto Fight Gym", category: "Web design", tools: "Design, Vercel", image: "/images/work-puro.webp", link: "https://puro-impacto-fight-gym.vercel.app" },
      { name: "Farangs Fight Gym", category: "Web design", tools: "Design, Vercel", image: "/images/work-farangs.webp", link: "https://farangs-fight-gym.vercel.app" },
    ],
  },
  tech: "My Toolkit",
  contact: {
    title: "Contact",
    email: "Email",
    social: "Social",
    made: ["Designed and developed", "by", "Pedro Wallas"],
    inspired: "Inspired by the portfolio of Moncy Yohannan",
  },
  meta: {
    title: "Pedro Wallas | Data & Pricing Analyst",
    description:
      "Portfolio of Pedro Wallas, data and pricing analyst with experience in Revenue Growth Management, dashboards and AI automation.",
  },
};

export const t = lang === "en" ? en : pt;
export const repoUrl = "https://github.com/MoncyDev/Portfolio-Website";
