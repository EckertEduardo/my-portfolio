export interface ExperienceItem {
  role: string
  company: string
  period: string
  bullets: string[]
  link?: { label: string; url: string }
}

export interface ProjectItem {
  name: string
  repo?: string
  summary: string
  problem: string
  solution: string
  result: string
  stack: string[]
  featured: boolean
  image?: string
  liveUrl?: string
}

export interface EducationItem {
  title: string
  place: string
  period: string
  detail: string
}

export interface CertItem {
  name: string
  issuer: string
  period: string
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface ContentShape {
  nav: {
    about: string
    experience: string
    projects: string
    skills: string
    education: string
    blog: string
    contact: string
  }
  hero: {
    kicker: string
    name: string
    title: string
    tagline: string
    ctaPrimary: string
    ctaSecondary: string
    location: string
  }
  about: {
    heading: string
    paragraphs: string[]
  }
  experience: {
    heading: string
    items: ExperienceItem[]
  }
  projects: {
    heading: string
    subheading: string
    items: ProjectItem[]
    viewMore: string
  }
  skills: {
    heading: string
    groups: SkillGroup[]
  }
  education: {
    heading: string
    academic: EducationItem[]
    certifications: CertItem[]
  }
  blog: {
    heading: string
    subheading: string
    comingSoon: string
    comingSoonDetail: string
  }
  contact: {
    heading: string
    subheading: string
    emailLabel: string
    emailCopied: string
    whatsappLabel: string
    cvLabel: string
    formName: string
    formEmail: string
    formMessage: string
    formSubmit: string
    formSending: string
    formSuccess: string
    formError: string
  }
  footer: {
    rights: string
  }
  notFound: {
    heading: string
    detail: string
    cta: string
  }
}

const pt: ContentShape = {
  nav: {
    about: 'Sobre',
    experience: 'Experiência',
    projects: 'Projetos',
    skills: 'Skills',
    education: 'Formação',
    blog: 'Blog',
    contact: 'Contato',
  },
  hero: {
    kicker: 'Engenheiro de Software Sênior',
    name: 'Eduardo Eckert Sperfeld',
    title: 'Backend Engineer — .NET, Golang & Sistemas Distribuídos',
    tagline:
      '4+ anos construindo microsserviços de alta escalabilidade, integrações críticas (SAP, BACEN, SPC) e mensageria com Kafka. Hoje no Mercado Livre — maior plataforma de e-commerce da América Latina — arquitetando serviços em Golang para e-commerce e fintech, com prática ativa em Spec-Driven Development e engenharia assistida por IA.',
    ctaPrimary: 'Entrar em contato',
    ctaSecondary: 'Baixar currículo',
    location: 'Blumenau, SC — Brasil',
  },
  about: {
    heading: 'Sobre mim',
    paragraphs: [
      'Sou engenheiro de software sênior com foco em back-end, com experiência sólida em .NET/C# e Golang, arquitetura de microsserviços e integrações complexas com sistemas financeiros e bancários (SAP, BACEN, SPC, SCR).',
      'Ao longo da carreira, atuei em times ágeis e globais, liderando iniciativas técnicas como implementação de autenticação corporativa via Keycloak para mais de 1.000 usuários, elevação de cobertura de testes de 20% para 65%, e integrações que reduziram tempo de resposta em até 60%.',
      'Antes de migrar para desenvolvimento, atuei com eletrônica de manutenção — uma base técnica que carrego até hoje na forma de pensar sistemas como circuitos: peças pequenas, bem definidas, que precisam se comunicar de forma confiável.',
      'Hoje, no Mercado Livre — maior plataforma de e-commerce da América Latina — foco em serviços distribuídos em Golang, observabilidade e boas práticas de engenharia para sistemas críticos de e-commerce e fintech, com prática ativa em Spec-Driven Development e ferramentas de engenharia assistida por IA. Desde 2026, também sou professor do programa Entra21 no Senac — o mesmo programa pelo qual entrei na carreira em 2021 — lecionando C#/.NET para novos desenvolvedores.',
    ],
  },
  experience: {
    heading: 'Experiência',
    items: [
      {
        role: 'Engenheiro de Software',
        company: 'Mercado Livre',
        period: '10/2025 — atualmente',
        bullets: [
          'Desenvolvimento de microsserviços backend em Golang para plataformas de e-commerce e fintech, com foco em alta escalabilidade e confiabilidade.',
          'Participação no design de arquiteturas distribuídas e definição de boas práticas de engenharia para serviços críticos.',
          'Implementação de observabilidade com logs, métricas e tracing para monitoramento e diagnóstico de aplicações em produção.',
        ],
      },
      {
        role: 'Professor — Entra21 (C#)',
        company: 'Senac Santa Catarina',
        period: '03/2026 — atualmente',
        bullets: [
          'Docente do programa Entra21 (parceria Senac/Blusoft), o mesmo programa profissionalizante pelo qual entrei na carreira de desenvolvimento em 2021 — agora do outro lado da sala de aula.',
          'Aulas de C#/.NET, orientação a objetos e boas práticas de desenvolvimento para alunos em transição de carreira para tecnologia.',
          'Elaboração de exercícios práticos e mentoria individual, com foco em construir fundamentos sólidos de programação.',
        ],
        link: { label: 'Site da ementa do curso', url: 'https://eckert-dev-c-sharp-demo.vercel.app/' },
      },
      {
        role: 'Desenvolvedor de Software',
        company: 'Cooperativa Central Ailos',
        period: '10/2024 — 10/2025',
        bullets: [
          'Integração com novo fornecedor para consultas de restritivos e endividamento (BACEN, SPC e SCR) via APIs REST, com redução de 60% no tempo de resposta em comparação à implementação anterior.',
          'Referência técnica do time: code reviews e mentorias que reduziram bugs em produção e elevaram a qualidade das entregas.',
          'Elevação da cobertura de testes de 20% para ~65%, junto com um novo modelo de revisão mais criterioso e eficiente.',
          'Projeto e implementação de APIs REST em .NET/C# para módulos bancários, aplicando CQRS, SOLID, Clean Architecture e DDD.',
          'Queries complexas com Dapper e scripts em Oracle e SQL Server.',
          'Mensageria com Apache Kafka — produtores e consumidores escaláveis, conectores e contratos de esquema Avro.',
          'Monitoramento de aplicações e tópicos em produção (OpenSearch, Rancher, Dynatrace, Kafka).',
          'Disseminação de práticas técnicas no time, incluindo adoção de GitFlow nas squads.',
        ],
      },
      {
        role: 'Desenvolvedor de Software',
        company: 'AmbevTech',
        period: '11/2021 — 10/2024',
        bullets: [
          'Liderança técnica na integração do produto com o time do México: desenvolvimento de camada de segurança seguindo o padrão Microsoft ACL, com acompanhamento de stakeholders internacionais até o GoLive.',
          'Implementação de autenticação/autorização via Keycloak (OAuth2/OpenID) para os ambientes SAZ, NAZ e EUR, unificando o acesso de mais de 1.000 usuários.',
          'Desenvolvimento de melhorias e novas funcionalidades para o MRP (Manufacturing Resource Planning) Global da companhia.',
          'Padrão ACL para autorização e consumo de recursos entre MRP e SAP, fortalecendo a segurança do sistema.',
          'Manutenção e melhorias de front-end com React e TypeScript.',
          'Integração de mensageria corporativa com Azure Service Bus e MassTransit.',
          'Liderança de guilda sobre testes unitários e documentação de padrões de qualidade.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projetos',
    subheading: 'Uma seleção de projetos que mostram como penso arquitetura, segurança e qualidade de código.',
    viewMore: 'Ver mais no GitHub',
    items: [
      {
        name: 'Ementa Entra21 · C# Developer Essentials',
        summary: 'Site com a ementa do curso que leciono no Entra21 (Senac), 320h de C#/.NET.',
        problem:
          'Alunos do Entra21 precisavam de uma forma clara de acompanhar os módulos e aulas do curso, sem depender de PDFs ou planilhas.',
        solution:
          'Site estático que renderiza a grade curricular a partir de um JSON de dados, com interface inspirada em plataformas de curso online — fácil de manter e atualizar a cada turma.',
        result: 'Material de apoio ao vivo para as turmas do curso, usado como referência de progresso pelos alunos.',
        stack: ['JavaScript', 'HTML', 'CSS', 'Educação'],
        image: '/projects/entra21.jpg',
        liveUrl: 'https://eckert-dev-c-sharp-demo.vercel.app/',
        featured: true,
      },
      {
        name: 'SignSafe Backend',
        repo: 'SignSafe-Backend',
        summary: 'API backend para assinatura e validação segura de documentos.',
        problem:
          'Times precisam de um fluxo confiável para assinar e validar documentos digitalmente, com garantias de integridade e rastreabilidade.',
        solution:
          'API REST em C#/.NET estruturada com boas práticas de arquitetura, separando regras de negócio de infraestrutura para facilitar testes e evolução do sistema.',
        result: 'Base sólida e testável para operações de assinatura digital, com foco em segurança dos dados.',
        stack: ['C#', '.NET', 'REST API', 'Clean Architecture'],
        image: '/projects/signsafe.png',
        featured: true,
      },
      {
        name: 'VetOnTrack',
        repo: 'VetOnTrack',
        summary: 'Sistema de gestão para acompanhamento veterinário.',
        problem:
          'Clínicas e tutores precisam de um jeito simples de acompanhar consultas, histórico e cuidados de saúde de animais.',
        solution:
          'Aplicação full-stack com front-end em JavaScript, focada em usabilidade e fluxo de cadastro/consulta simplificado.',
        result: 'MVP funcional demonstrando modelagem de domínio e experiência de uso ponta a ponta.',
        stack: ['JavaScript', 'Full-stack', 'UX/UI'],
        featured: true,
      },
      {
        name: 'Vertical Slice Architecture',
        repo: 'VerticalSliceArchitecture',
        summary: 'Estudo prático de arquitetura vertical slice em .NET, alternativa ao Clean Architecture tradicional em camadas.',
        problem:
          'Arquiteturas em camadas tradicionais podem gerar acoplamento desnecessário entre features não relacionadas.',
        solution:
          'Implementação de referência organizando o código por feature (vertical slices) em vez de por camada técnica, usando .NET/C#.',
        result: 'Material de estudo e referência técnica para decisões de arquitetura em projetos reais.',
        stack: ['C#', '.NET', 'Arquitetura de Software'],
        featured: true,
      },
    ],
  },
  skills: {
    heading: 'Skills técnicas',
    groups: [
      {
        label: 'Linguagens & Frameworks',
        items: ['C#', '.NET Core', 'ASP.NET Core', 'Entity Framework Core', 'Golang', 'React', 'TypeScript', 'JavaScript', 'MediatR', 'FluentValidation'],
      },
      {
        label: 'APIs & Microsserviços',
        items: ['RESTful APIs', 'ACL Pattern', 'Keycloak', 'OpenID Connect', 'OAuth2'],
      },
      {
        label: 'Bancos de Dados',
        items: ['SQL Server', 'Oracle', 'T-SQL', 'PL/SQL', 'Dapper', 'Modelagem Relacional'],
      },
      {
        label: 'Mensageria & Integrações',
        items: ['Apache Kafka', 'Azure Service Bus', 'MassTransit', 'SAP S/4H', 'SPC Serasa', 'BACEN'],
      },
      {
        label: 'DevOps & Cloud',
        items: ['Docker', 'Docker Compose', 'Azure DevOps (CI/CD)', 'Git', 'GitFlow'],
      },
      {
        label: 'Qualidade & Testes',
        items: ['xUnit', 'NUnit', 'MSTest', 'TDD', 'Testes de Integração'],
      },
    ],
  },
  education: {
    heading: 'Formação & Certificações',
    academic: [
      {
        title: 'Especialização em Engenharia de Software',
        place: 'Faculdade Descomplica',
        period: 'Concluído 01/2024',
        detail: 'Gerenciamento avançado de projetos, UX/UI, metodologias ágeis, AWS, arquitetura e modelagem de dados.',
      },
      {
        title: 'Bacharel em Análise e Desenvolvimento de Sistemas',
        place: 'Centro Universitário Unisociesc',
        period: 'Concluído 06/2023',
        detail: 'Sistemas distribuídos, desenvolvimento web, mobile, usabilidade e qualidade de software.',
      },
    ],
    certifications: [
      { name: 'Formação Go', issuer: 'Alura, 51h', period: '05/2025' },
      { name: 'AI-900 Azure AI Fundamentals', issuer: 'Microsoft, 35h', period: '06/2024' },
      { name: 'C# .NET', issuer: 'Entra 21/Blusoft, 480h', period: '10/2021' },
    ],
  },
  blog: {
    heading: 'Blog',
    subheading: 'Notas técnicas sobre arquitetura, Golang, Kafka e sistemas distribuídos.',
    comingSoon: 'Em breve',
    comingSoonDetail: 'Estou preparando os primeiros artigos técnicos. Volte em breve ou acompanhe as atualizações pelo GitHub/LinkedIn.',
  },
  contact: {
    heading: 'Vamos conversar',
    subheading: 'Aberto a oportunidades, freelas e trocas técnicas. Manda uma mensagem.',
    emailLabel: 'Email',
    emailCopied: 'Copiado para a área de transferência!',
    whatsappLabel: 'WhatsApp',
    cvLabel: 'Baixar CV (PDF)',
    formName: 'Nome',
    formEmail: 'Email',
    formMessage: 'Mensagem',
    formSubmit: 'Enviar mensagem',
    formSending: 'Enviando...',
    formSuccess: 'Mensagem enviada! Te respondo em breve.',
    formError: 'Não deu pra enviar agora. Tenta de novo ou me chama no email/WhatsApp.',
  },
  footer: {
    rights: 'Todos os direitos reservados.',
  },
  notFound: {
    heading: 'Página não encontrada',
    detail: 'O link pode estar errado ou a página foi movida.',
    cta: 'Voltar para o início',
  },
}

const en: ContentShape = {
  nav: {
    about: 'About',
    experience: 'Experience',
    projects: 'Projects',
    skills: 'Skills',
    education: 'Education',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    kicker: 'Senior Software Engineer',
    name: 'Eduardo Eckert Sperfeld',
    title: 'Backend Engineer — .NET, Golang & Distributed Systems',
    tagline:
      '4+ years building highly scalable microservices, mission-critical integrations (SAP, Brazil\'s Central Bank, credit bureaus) and Kafka-based messaging. Now at Mercado Livre — Latin America\'s largest e-commerce platform — architecting Golang services for e-commerce and fintech, with active practice in Spec-Driven Development and AI-assisted engineering.',
    ctaPrimary: 'Get in touch',
    ctaSecondary: 'Download résumé',
    location: 'Blumenau, SC — Brazil',
  },
  about: {
    heading: 'About me',
    paragraphs: [
      "I'm a senior backend-focused software engineer with solid experience in .NET/C# and Golang, microservices architecture, and complex integrations with financial and banking systems (SAP, Brazil's Central Bank, credit bureaus).",
      'Throughout my career I\'ve worked in agile, globally distributed teams, leading technical initiatives such as enterprise authentication via Keycloak for 1,000+ users, raising test coverage from 20% to 65%, and integrations that cut response times by up to 60%.',
      'Before moving into software, I worked in industrial electronics maintenance — a technical foundation that still shapes how I think about systems today: small, well-defined parts that need to communicate reliably.',
      "Today, at Mercado Livre — Latin America's largest e-commerce platform — I focus on distributed services in Golang, observability, and engineering best practices for critical e-commerce and fintech systems, with active practice in Spec-Driven Development and AI-assisted engineering tools. Since 2026, I've also been teaching the Entra21 program at Senac — the same program that got me into the industry back in 2021 — lecturing on C#/.NET for aspiring developers.",
    ],
  },
  experience: {
    heading: 'Experience',
    items: [
      {
        role: 'Software Engineer',
        company: 'Mercado Livre',
        period: '10/2025 — present',
        bullets: [
          'Building backend microservices in Golang for e-commerce and fintech platforms, focused on high scalability and reliability.',
          'Contributing to distributed architecture design and engineering best practices for critical services.',
          'Implementing observability (logs, metrics, tracing) for monitoring and diagnosing production applications.',
        ],
      },
      {
        role: 'Instructor — Entra21 (C#)',
        company: 'Senac Santa Catarina',
        period: '03/2026 — present',
        bullets: [
          'Teaching C#/.NET on the Entra21 program (Senac/Blusoft partnership) — the same career-entry program that got me into software development back in 2021, now on the other side of the classroom.',
          'Lectures on C#/.NET, object-oriented design and development best practices for students transitioning into tech.',
          'Building hands-on exercises and 1:1 mentoring focused on solid programming fundamentals.',
        ],
        link: { label: 'Course syllabus site', url: 'https://eckert-dev-c-sharp-demo.vercel.app/' },
      },
      {
        role: 'Software Developer',
        company: 'Cooperativa Central Ailos',
        period: '10/2024 — 10/2025',
        bullets: [
          "Integrated a new provider for credit-risk and debt lookups (Brazil's Central Bank, SPC, SCR) via REST APIs, cutting response time by 60% vs. the previous implementation.",
          'Acted as team technical reference: code reviews and mentoring that reduced production bugs and raised delivery quality.',
          'Raised test coverage from 20% to ~65%, alongside a new, more rigorous and efficient review process.',
          'Designed and built REST APIs in .NET/C# for banking modules, applying CQRS, SOLID, Clean Architecture and DDD.',
          'Wrote complex queries with Dapper and scripts across Oracle and SQL Server.',
          'Built Kafka-based messaging — scalable producers/consumers, connectors and Avro schema contracts.',
          'Monitored production applications and topics (OpenSearch, Rancher, Dynatrace, Kafka).',
          'Spread technical practices across the team, including GitFlow adoption.',
        ],
      },
      {
        role: 'Software Developer',
        company: 'AmbevTech',
        period: '11/2021 — 10/2024',
        bullets: [
          'Led the technical integration of the product with the Mexico team: built a security layer following the Microsoft ACL pattern, working directly with international stakeholders through GoLive.',
          'Implemented Keycloak authentication/authorization (OAuth2/OpenID) across SAZ, NAZ and EUR environments, unifying access for 1,000+ users.',
          "Delivered improvements and new features for the company's Global MRP (Manufacturing Resource Planning) product.",
          'Applied the ACL pattern for authorization and resource consumption between MRP and SAP, strengthening system security.',
          'Maintained and improved the front-end with React and TypeScript.',
          'Integrated enterprise messaging using Azure Service Bus and MassTransit.',
          'Led a guild on unit testing and quality-standards documentation.',
        ],
      },
    ],
  },
  projects: {
    heading: 'Projects',
    subheading: 'A selection of projects showing how I approach architecture, security and code quality.',
    viewMore: 'View more on GitHub',
    items: [
      {
        name: 'Entra21 · C# Developer Essentials Syllabus',
        summary: 'Course syllabus site for the C#/.NET class I teach at Entra21 (Senac), 320h.',
        problem:
          'Entra21 students needed a clear way to follow the course modules and lessons, instead of relying on PDFs or spreadsheets.',
        solution:
          'A static site that renders the curriculum from a JSON data file, with an interface inspired by online course platforms — easy to maintain and update for each new cohort.',
        result: 'A live companion resource for the classes, used by students to track their progress.',
        stack: ['JavaScript', 'HTML', 'CSS', 'Education'],
        image: '/projects/entra21.jpg',
        liveUrl: 'https://eckert-dev-c-sharp-demo.vercel.app/',
        featured: true,
      },
      {
        name: 'SignSafe Backend',
        repo: 'SignSafe-Backend',
        summary: 'Backend API for secure document signing and validation.',
        problem:
          'Teams need a reliable flow to digitally sign and validate documents, with integrity and traceability guarantees.',
        solution:
          'A C#/.NET REST API structured around solid architectural practices, separating business rules from infrastructure to keep the system testable and easy to evolve.',
        result: 'A solid, testable foundation for digital signature operations, with a strong focus on data security.',
        stack: ['C#', '.NET', 'REST API', 'Clean Architecture'],
        image: '/projects/signsafe.png',
        featured: true,
      },
      {
        name: 'VetOnTrack',
        repo: 'VetOnTrack',
        summary: 'Management system for veterinary follow-ups.',
        problem: 'Clinics and pet owners need a simple way to track appointments, history and animal health care.',
        solution:
          'A full-stack application with a JavaScript front-end, focused on usability and a streamlined registration/lookup flow.',
        result: 'A working MVP demonstrating domain modeling and end-to-end user experience.',
        stack: ['JavaScript', 'Full-stack', 'UX/UI'],
        featured: true,
      },
      {
        name: 'Vertical Slice Architecture',
        repo: 'VerticalSliceArchitecture',
        summary: 'A practical study of vertical slice architecture in .NET, an alternative to traditional layered Clean Architecture.',
        problem: 'Traditional layered architectures can create unnecessary coupling between unrelated features.',
        solution:
          'A reference implementation organizing code by feature (vertical slices) instead of by technical layer, using .NET/C#.',
        result: 'A study reference used to inform architecture decisions on real projects.',
        stack: ['C#', '.NET', 'Software Architecture'],
        featured: true,
      },
    ],
  },
  skills: {
    heading: 'Technical skills',
    groups: [
      {
        label: 'Languages & Frameworks',
        items: ['C#', '.NET Core', 'ASP.NET Core', 'Entity Framework Core', 'Golang', 'React', 'TypeScript', 'JavaScript', 'MediatR', 'FluentValidation'],
      },
      {
        label: 'APIs & Microservices',
        items: ['RESTful APIs', 'ACL Pattern', 'Keycloak', 'OpenID Connect', 'OAuth2'],
      },
      {
        label: 'Databases',
        items: ['SQL Server', 'Oracle', 'T-SQL', 'PL/SQL', 'Dapper', 'Relational Modeling'],
      },
      {
        label: 'Messaging & Integrations',
        items: ['Apache Kafka', 'Azure Service Bus', 'MassTransit', 'SAP S/4H', 'Credit Bureaus', "Brazil's Central Bank"],
      },
      {
        label: 'DevOps & Cloud',
        items: ['Docker', 'Docker Compose', 'Azure DevOps (CI/CD)', 'Git', 'GitFlow'],
      },
      {
        label: 'Quality & Testing',
        items: ['xUnit', 'NUnit', 'MSTest', 'TDD', 'Integration Testing'],
      },
    ],
  },
  education: {
    heading: 'Education & Certifications',
    academic: [
      {
        title: 'Postgraduate Specialization in Software Engineering',
        place: 'Faculdade Descomplica',
        period: 'Completed 01/2024',
        detail: 'Advanced project management, UX/UI, agile methodologies, AWS, data architecture and modeling.',
      },
      {
        title: "Bachelor's in Systems Analysis and Development",
        place: 'Centro Universitário Unisociesc',
        period: 'Completed 06/2023',
        detail: 'Distributed systems, web and mobile development, usability and software quality.',
      },
    ],
    certifications: [
      { name: 'Go Path', issuer: 'Alura, 51h', period: '05/2025' },
      { name: 'AI-900 Azure AI Fundamentals', issuer: 'Microsoft, 35h', period: '06/2024' },
      { name: 'C# .NET', issuer: 'Entra 21/Blusoft, 480h', period: '10/2021' },
    ],
  },
  blog: {
    heading: 'Blog',
    subheading: 'Technical notes on architecture, Golang, Kafka and distributed systems.',
    comingSoon: 'Coming soon',
    comingSoonDetail: "I'm working on the first technical posts. Check back soon, or follow updates on GitHub/LinkedIn.",
  },
  contact: {
    heading: "Let's talk",
    subheading: 'Open to opportunities, freelance work and technical conversations. Send a message.',
    emailLabel: 'Email',
    emailCopied: 'Copied to clipboard!',
    whatsappLabel: 'WhatsApp',
    cvLabel: 'Download résumé (PDF)',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formSubmit: 'Send message',
    formSending: 'Sending...',
    formSuccess: "Message sent! I'll get back to you soon.",
    formError: "Couldn't send right now. Try again or reach out via email/WhatsApp.",
  },
  footer: {
    rights: 'All rights reserved.',
  },
  notFound: {
    heading: 'Page not found',
    detail: 'The link may be wrong, or the page has been moved.',
    cta: 'Back to home',
  },
}

export const content = { pt, en }

export const links = {
  github: 'https://github.com/EckertEduardo',
  linkedin: 'https://www.linkedin.com/in/eduardo-eckert-sperfeld/',
  email: 'eduardo_sperfeld@hotmail.com',
  whatsapp: 'https://wa.me/5547996526459',
  cv: '/cv/Eduardo_Eckert_Sperfeld.pdf',
}
