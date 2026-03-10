import NewsSection from "./NewsSection";

const meta = {
  title: "Layout/NewsSection",
  component: Navigation,
};

export default meta;

const mockNews = [
  {
    titulo: "Nova plataforma CEPE",
    subtitle: "Educação",
    intro: "Nova plataforma para alunos portugueses.",
  },
  {
    titulo: "Cursos online",
    subtitle: "Ensino",
    intro: "Cursos online para a comunidade.",
  },
  {
    titulo: "Evento cultural",
    subtitle: "Cultura",
    intro: "Evento cultural português.",
  },
  {
    titulo: "Novos professores",
    subtitle: "Educação",
    intro: "Novos professores chegaram.",
  },
  {
    titulo: "Programa Erasmus",
    subtitle: "Europa",
    intro: "Parcerias educacionais.",
  },
  {
    titulo: "Tecnologia nas escolas",
    subtitle: "Tech",
    intro: "Ferramentas digitais.",
  },
];

export const Default = () => <NewsSection />;
export const MobileMenuOpen = () => <NewsSection />;
