export type Locale = "pt" | "en";
export type SectionId = "about" | "projects" | "expertise";

export type SidebarSection = {
  id: SectionId;
  label: string;
};

type FeatureItem = {
  title: string;
  description: string;
};

type AboutCard = {
  title: string;
  description: string;
  bullets: string[];
};

type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  description: string;
};

export type ProjectItem = {
  title: string;
  context: string;
  status: string;
  description: string;
  tags: string[];
};

export type ExpertiseItem = {
  title: string;
  area: string;
  technologies: string;
  description: string;
};

type SummaryItem = {
  label: string;
  value: string;
};

type PortfolioCopy = {
  sidebar: {
    name: string;
    sections: SidebarSection[];
    menuLabel: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    features: FeatureItem[];
  };
  about: {
    label: string;
    title: string;
    intro: string;
    paragraphs: string[];
    cards: AboutCard[];
    educationTimelineTitle: string;
    educationTimelineItems: TimelineItem[];
    experienceTimelineTitle: string;
    experienceTimelineItems: TimelineItem[];
  };
  projects: {
    label: string;
    title: string;
    intro: string;
    items: ProjectItem[];
  };
  expertise: {
    label: string;
    title: string;
    intro: string;
    items: ExpertiseItem[];
  };
  rail: {
    imageAlt: string;
    summaryTitle: string;
    summaryItems: SummaryItem[];
    focusTitle: string;
    focusItems: string[];
    noteTitle: string;
    note: string;
  };
};

export const sectionIds: SectionId[] = ["about", "projects", "expertise"];

export const portfolioContent: Record<Locale, PortfolioCopy> = {
  pt: {
    sidebar: {
      name: "Guilherme Alacoc",
      sections: [
        { id: "about", label: "Sobre" },
        { id: "projects", label: "Projetos" },
        { id: "expertise", label: "Experiência técnica" },
      ],
      menuLabel: "Menu",
      languageLabel: "Selecionar idioma",
    },
    hero: {
      eyebrow: "Backend / Frontend / Produto",
      title: "Software full stack com visão de produto.",
      description:
        "Desenvolvedor full stack com foco em aplicações web, entrega contínua e qualidade de software.",
      features: [
        {
          title: "Backend",
          description:
            "Desenvolvo APIs e regras de negócio com Node.js, PHP/Laravel e Go, priorizando clareza e facilidade de manutenção.",
        },
        {
          title: "Frontend",
          description:
            "Construo interfaces web com React e Vue, buscando fluxos simples, acessíveis e consistentes.",
        },
        {
          title: "Produto",
          description:
            "Participo da entrega de ponta a ponta, transformando necessidades de negócio em soluções úteis e sustentáveis.",
        },
      ],
    },
    about: {
      label: "Sobre",
      title:
        "Experiência em software, visão de produto e uma base sólida em desenvolvimento web.",
      intro:
        "Um resumo da minha trajetória em tecnologia, das ferramentas com que trabalho e da minha formação.",
      paragraphs: [
        "Sou desenvolvedor full stack pleno/sênior, com experiência no desenvolvimento e na evolução de aplicações web, do backend ao frontend.",
        "No dia a dia, desenvolvo novas funcionalidades, otimizo sistemas, soluciono falhas e participo da estimativa e da análise de complexidade das tarefas. Também atuo com APIs, CI/CD e serviços em nuvem, sempre valorizando a comunicação clara e a colaboração com a equipe.",
      ],
      cards: [
        {
          title: "Stack principal",
          description: "Tecnologias presentes com frequência no meu trabalho.",
          bullets: [
            "Node.js, PHP/Laravel e Go.",
            "React, Vue e Angular",
            "APIs e sistemas assincronos",
          ],
        },
        {
          title: "Entrega de software",
          description: "Práticas que utilizo para levar aplicações à produção.",
          bullets: [
            "CI/CD com Azure DevOps e GitHub Actions.",
            "AWS e Docker no fluxo de desenvolvimento e entrega.",
            "Atenção à qualidade, à estabilidade e à manutenção.",
          ],
        },
        {
          title: "Visão de produto",
          description: "Desenvolvimento orientado às necessidades do negócio.",
          bullets: [
            "Transformo requisitos em soluções práticas.",
            "Transito entre os contextos técnico e de negócio.",
            "Busco entregas completas, úteis e sustentáveis.",
          ],
        },
      ],
      educationTimelineTitle: "Formação",
      educationTimelineItems: [
        {
          period: "2026–2030",
          title: "Univesp",
          subtitle: "Bacharelado em Ciência de Dados",
          description: "Formação superior voltada Ciência de Dados.",
        },
        {
          period: "2018–2020",
          title: "Fatec São Roque",
          subtitle: "Tecnologia em Sistemas para Internet",
          description:
            "Formação superior voltada ao desenvolvimento web e à construção de produtos digitais.",
        },
        {
          period: "2016–2017",
          title: "ETEC Fernando Prestes",
          subtitle: "Técnico em Informática",
          description:
            "Formação em lógica de programação, desenvolvimento de software e fundamentos de tecnologia.",
        },
      ],
      experienceTimelineTitle: "Experiência em tecnologia",
      experienceTimelineItems: [
        {
          period: "Out. 2024–Atual",
          title: "Amee",
          subtitle: "Desenvolvedor Full Stack Pleno/Sênior",
          description:
            "Desenvolvimento e evolução de aplicações com Node.js, PHP/Laravel, Go, React e Vue, além de APIs REST, CI/CD e AWS.",
        },
        {
          period: "Jan.–Out. 2024",
          title: "Nowmed",
          subtitle: "Desenvolvedor de Software Pleno",
          description:
            "Atuação no desenvolvimento, na evolução e na manutenção de aplicações web.",
        },
        {
          period: "Out. 2022–Jan. 2024",
          title: "goFlux",
          subtitle: "Desenvolvedor de Software Júnior",
          description:
            "Desenvolvimento de funcionalidades, correção de falhas e melhoria contínua de sistemas.",
        },
        {
          period: "Ago. 2020–Out. 2022",
          title: "Amee",
          subtitle: "Assistente de Desenvolvimento de Software",
          description:
            "Início da trajetória profissional em tecnologia, contribuindo para o desenvolvimento e a manutenção de aplicações.",
        },
      ],
    },
    projects: {
      label: "Projetos",
      title:
        "Projetos pessoais construídos para resolver problemas específicos.",
      intro:
        "Aplicações que combinam automação, organização de dados e ferramentas para atividades do dia a dia.",
      items: [
        {
          title: "Hat Trick Monitor",
          context: "Projeto pessoal",
          status: "Em desenvolvimento",
          description:
            "Monitor de hat-tricks em campeonatos brasileiros, com coleta de dados, estatísticas e integração com um bot no X/Twitter para publicar atualizações em tempo real.",
          tags: ["Node.js", "Express", "MongoDB"],
        },
        {
          title: "Personal Bookshelf",
          context: "Projeto pessoal",
          status: "Em desenvolvimento",
          description:
            "Aplicação para cadastrar e organizar livros, autores e categorias, além de apresentar estatísticas sobre o acervo e os valores de mercado.",
          tags: ["AdonisJS", "PostgreSQL", "React"],
        },
        {
          title: "Lime Lemon",
          context: "Projeto pessoal",
          status: "Em desenvolvimento",
          description:
            "Sistema para registrar e controlar horários de trabalho de profissionais e empresas.",
          tags: ["Laravel", "PostgreSQL", "Controle de horários"],
        },
      ],
    },
    expertise: {
      label: "Experiência técnica",
      title:
        "Desenvolvimento full stack orientado à evolução de produtos e sistemas.",
      intro:
        "Experiência no desenvolvimento, na manutenção e na modernização de aplicações web em diferentes contextos de negócio. Atuação de ponta a ponta, conectando backend, dados e frontend para transformar requisitos em soluções estáveis, funcionais e fáceis de manter.",
      items: [
        {
          title: "Backend, APIs e automações",
          area: "Engenharia de software",
          technologies:
            "Node.js, PHP, Laravel, Symfony, AdonisJS, Express e Go",
          description:
            "Desenvolvimento e manutenção de aplicações e serviços backend, incluindo APIs REST, integrações entre sistemas e evolução de soluções legadas. Experiência também na criação de automações para extração de dados de documentos e web scraping, com atenção à clareza das regras de negócio, à estabilidade e à manutenção do código.",
        },
        {
          title: "Dados e desempenho",
          area: "Bancos de dados",
          technologies: "PostgreSQL e MySQL",
          description:
            "Criação e validação de consultas, tratamento de dados e otimização de queries e views. Atuação na identificação de gargalos e na melhoria do acesso aos dados, contribuindo para aplicações mais confiáveis e com melhor desempenho.",
        },
        {
          title: "Frontend e soluções de produto",
          area: "Interfaces e produto",
          technologies: "React, Vue e Angular",
          description:
            "Desenvolvimento e evolução de interfaces web, sistemas internos e versões web de aplicações. Participação no levantamento de requisitos e na construção de soluções com React, Vue, Angular e Laravel, buscando interfaces consistentes e alinhadas às necessidades dos usuários e do negócio.",
        },
      ],
    },
    rail: {
      imageAlt: "Foto de perfil de Guilherme Alacoc",
      summaryTitle: "Perfil",
      summaryItems: [
        { label: "Atuação", value: "Full Stack Pleno/Sênior" },
        { label: "Foco", value: "Web, APIs, Mobile & Data" },
        {
          label: "Formação",
          value: "Sistemas para Internet | Ciência de Dados",
        },
      ],
      focusTitle: "Competências",
      focusItems: [
        "Node.js, PHP/Laravel e Go no backend.",
        "React e Vue no frontend.",
        "APIs REST, CI/CD, AWS e Docker.",
      ],
      noteTitle: "Além do código",
      note: "O aprendizado contínuo também faz parte da minha rotina. Estudo idiomas, com foco em inglês e mandarim, e pratico jiu-jítsu — atividades que fortalecem disciplina, adaptabilidade e tomada de decisão sob pressão.",
    },
  },
  en: {
    sidebar: {
      name: "Guilherme Alacoc",
      sections: [
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "expertise", label: "Technical experience" },
      ],
      menuLabel: "Menu",
      languageLabel: "Select language",
    },
    hero: {
      eyebrow: "Backend / Frontend / Product",
      title: "Full-stack development with a product mindset.",
      description:
        "Full-stack developer focused on web applications, continuous delivery, and software quality.",
      features: [
        {
          title: "Backend",
          description:
            "I develop APIs and business logic with Node.js, PHP/Laravel, and Go, prioritizing clarity and maintainability.",
        },
        {
          title: "Frontend",
          description:
            "I build web interfaces with React and Vue, aiming for simple, accessible, and consistent user flows.",
        },
        {
          title: "Product",
          description:
            "I contribute throughout the delivery lifecycle, turning business needs into useful, sustainable solutions.",
        },
      ],
    },
    about: {
      label: "About",
      title:
        "Software experience, product thinking, and a solid foundation in web development.",
      intro:
        "An overview of my technology career, the tools I work with, and my education.",
      paragraphs: [
        "I am a full-stack developer working at the mid-to-senior level, with experience building and improving web applications across the backend and frontend.",
        "On a typical day, I build new features, optimize systems, troubleshoot issues, and contribute to task estimation and complexity analysis. I also work with APIs, CI/CD, and cloud services, and I value clear communication and close team collaboration.",
      ],
      cards: [
        {
          title: "Core stack",
          description: "Technologies I use regularly in my work.",
          bullets: [
            "Node.js, PHP/Laravel, and Go.",
            "React, Vue, and Angular.",
            "APIs and asynchronous systems.",
          ],
        },
        {
          title: "Software delivery",
          description: "Practices I use to deliver applications to production.",
          bullets: [
            "CI/CD with Azure DevOps and GitHub Actions.",
            "AWS and Docker in development and delivery workflows.",
            "A focus on quality, stability, and maintainability.",
          ],
        },
        {
          title: "Product mindset",
          description: "Development guided by business needs.",
          bullets: [
            "I turn requirements into practical solutions.",
            "I navigate both technical and business contexts.",
            "I aim to deliver complete, useful, and sustainable solutions.",
          ],
        },
      ],
      educationTimelineTitle: "Education",
      educationTimelineItems: [
        {
          period: "2026–2030",
          title: "Univesp",
          subtitle: "Bachelor's Degree in Data Science",
          description: "Undergraduate education focused on Data Science.",
        },
        {
          period: "2018–2020",
          title: "Fatec São Roque",
          subtitle: "Technology Degree in Internet Systems",
          description:
            "Higher education focused on web development and building digital products.",
        },
        {
          period: "2016–2017",
          title: "ETEC Fernando Prestes",
          subtitle: "Technical Diploma in Information Technology",
          description:
            "Education in programming logic, software development, and core technology concepts.",
        },
      ],
      experienceTimelineTitle: "Technology experience",
      experienceTimelineItems: [
        {
          period: "Oct. 2024–Present",
          title: "Amee",
          subtitle: "Mid-Level / Senior Full-Stack Developer",
          description:
            "Developing and improving applications with Node.js, PHP/Laravel, Go, React, and Vue, as well as REST APIs, CI/CD, and AWS.",
        },
        {
          period: "Jan.–Oct. 2024",
          title: "Nowmed",
          subtitle: "Mid-Level Software Developer",
          description:
            "Worked on the development, evolution, and maintenance of web applications.",
        },
        {
          period: "Oct. 2022–Jan. 2024",
          title: "goFlux",
          subtitle: "Junior Software Developer",
          description:
            "Feature development, bug fixing, and continuous system improvement.",
        },
        {
          period: "Aug. 2020–Oct. 2022",
          title: "Amee",
          subtitle: "Software Development Assistant",
          description:
            "The beginning of my professional career in technology, contributing to application development and maintenance.",
        },
      ],
    },
    projects: {
      label: "Projects",
      title: "Personal projects built to solve specific problems.",
      intro:
        "Applications that combine automation, data organization, and tools for everyday activities.",
      items: [
        {
          title: "Hat Trick Monitor",
          context: "Personal project",
          status: "In development",
          description:
            "A hat-trick tracker for Brazilian football competitions, featuring data collection, statistics, and integration with an X/Twitter bot for real-time updates.",
          tags: ["Node.js", "Express", "MongoDB"],
        },
        {
          title: "Personal Bookshelf",
          context: "Personal project",
          status: "In development",
          description:
            "An application for cataloging and organizing books, authors, and categories, with statistics about the collection and market values.",
          tags: ["AdonisJS", "PostgreSQL", "React"],
        },
        {
          title: "Lime Lemon",
          context: "Personal project",
          status: "In development",
          description:
            "A system for professionals and companies to record and manage working hours.",
          tags: ["Laravel", "PostgreSQL", "Time tracking"],
        },
      ],
    },
    expertise: {
      label: "Technical experience",
      title: "Full-stack development focused on product and system evolution.",
      intro:
        "Experience developing, maintaining, and modernizing web applications across different business contexts. End-to-end work connecting backend, data, and frontend to turn requirements into stable, functional, and maintainable solutions.",
      items: [
        {
          title: "Backend, APIs, and automation",
          area: "Software engineering",
          technologies:
            "Node.js, PHP, Laravel, Symfony, AdonisJS, Express, and Go",
          description:
            "Development and maintenance of backend applications and services, including REST APIs, system integrations, and the evolution of legacy solutions. Experience also includes building automations for document data extraction and web scraping, with attention to clear business logic, stability, and code maintainability.",
        },
        {
          title: "Data and performance",
          area: "Databases",
          technologies: "PostgreSQL and MySQL",
          description:
            "Query creation and validation, data processing, and query and view optimization. Experience identifying bottlenecks and improving data access, contributing to more reliable and higher-performing applications.",
        },
        {
          title: "Frontend and product solutions",
          area: "Interfaces and product",
          technologies: "React, Vue, and Angular",
          description:
            "Development and evolution of web interfaces, internal systems, and web versions of applications. Participation in requirements gathering and solution development with React, Vue, Angular, and Laravel, creating consistent interfaces aligned with user and business needs.",
        },
      ],
    },
    rail: {
      imageAlt: "Profile photo of Guilherme Alacoc",
      summaryTitle: "Profile",
      summaryItems: [
        { label: "Role", value: "Mid-Level / Senior Full-Stack Developer" },
        { label: "Focus", value: "Web, APIs, Mobile & Data" },
        {
          label: "Education",
          value: "Internet Systems | Bachelor in Data Science",
        },
      ],
      focusTitle: "Core skills",
      focusItems: [
        "Node.js, PHP/Laravel, and Go for backend development.",
        "React and Vue for frontend development.",
        "REST APIs, CI/CD, AWS, and Docker.",
      ],
      noteTitle: "Beyond code",
      note: "Continuous learning is also part of my routine. I study languages, with a focus on English and Mandarin, and practice Brazilian jiu-jitsu—activities that strengthen discipline, adaptability, and decision-making under pressure.",
    },
  },
};
