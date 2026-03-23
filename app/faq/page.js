import Section from "../_components/Layout/Section/Section";
import Footer from "../_components/Layout/Footer/Footer";
import faqImage from "../../public/artboard.png";
import Filter from "../_components/Filter/Filter";

export const metadata = {
  title: {
    template: "%s | CEPE Alemanha",
    default: "FAQ - Perguntas Frequentes | CEPE Alemanha",
  },

  description:
    "Encontra respostas às perguntas mais frequentes sobre a nossa rede, cursos e suporte.",

  keywords: [
    "faq",
    "perguntas frequentes",
    "suporte",
    "ajuda",
    "cursos",
    "inscrições",
    "certificação",
    "professor",
  ],

  openGraph: {
    title: "FAQ - Perguntas Frequentes",
    description: "Descobre respostas rápidas às dúvidas mais comuns.",
    url: "https://cepealemanha.de/faq",
  },

  alternates: {
    canonical: "https://cepealemanha.de/faq",
  },
};
export default function Page() {
  return (
    <>
      <Section fullscreen background={faqImage.src}></Section>
      <Section>
        <Filter />
      </Section>
      <Footer />
    </>
  );
}
