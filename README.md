# eckert.dev

Portfólio pessoal de **Eduardo Eckert Sperfeld** — Software Engineer (.NET, Golang & Sistemas Distribuídos).

🔗 [eckert-dev-my-portfolio.vercel.app](https://eckert-dev-my-portfolio.vercel.app/)

## Sobre

Site em React + TypeScript com foco em performance e apresentação profissional: hero, sobre, experiência, projetos, skills, formação, blog e contato. Suporta **PT/EN** e tema **claro/escuro**.

## Stack

- [React 19](https://react.dev/) + [React Router](https://reactrouter.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite 6](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) para animações
- [Oxlint](https://oxc.rs/) para lint

## Estrutura

```
src/
├── components/       # Header, Footer, Backdrop, BackToTop, ícones etc.
│   └── sections/      # Hero, About, Experience, Projects, Skills, Education, Contact
├── context/           # LanguageContext (PT/EN), ThemeContext (claro/escuro)
├── data/               # Conteúdo do site (content.ts) e logos (logos.ts)
├── pages/              # Home, Blog
└── main.tsx / App.tsx
```

## Rodando localmente

```bash
npm install
npm run dev       # servidor de desenvolvimento (http://localhost:5173)
npm run build     # build de produção (tsc -b && vite build)
npm run preview   # preview do build
npm run lint      # lint com Oxlint
```

## Deploy

Projeto estático (Vite SPA) hospedado na [Vercel](https://vercel.com/).

## Licença

Uso pessoal — código disponível para referência.
