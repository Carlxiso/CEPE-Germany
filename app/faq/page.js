import Section from "../_components/Layout/Section/Section";
import Footer from "../_components/Layout/Footer/Footer";
import faqImage from "../../public/artboard.png";
import Filter from "../_components/Filter/Filter";

export const metadata = {
  metadataBase: new URL("https://cepealemanha.de/faq"),

  title: {
    default: "Perguntas Frequentes sobre Cursos de Português na Alemanha",
    template: "%s | Português na Alemanha - CEPE",
  },

  description:
    "Encontre respostas às principais dúvidas sobre cursos de português na Alemanha, inscrições, horários, certificação e funcionamento do CEPE.",

  keywords: [
    "perguntas frequentes português na Alemanha",
    "faq cursos português Alemanha",
    "como inscrever curso português Alemanha",
    "certificação português Alemanha dúvidas",
    "CEPE Alemanha perguntas",
  ],

  authors: [
    { name: "Coordenação do Ensino do Português no Estrangeiro - Alemanha" },
  ],
  creator: "Carl-iso",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cepealemanha.de/faq",
    siteName: "CEPE Alemanha",
    title: "Perguntas Frequentes | CEPE Alemanha",
    description:
      "Respostas às dúvidas sobre cursos de português na Alemanha, inscrições e certificações.",
    images: [
      {
        url: "/cepelogo.png",
        width: 1200,
        height: 630,
        alt: "FAQ Cursos de Português na Alemanha - CEPE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "FAQ - Português na Alemanha",
    description: "Tire todas as dúvidas sobre cursos de português na Alemanha.",
    images: ["/cepelogo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://cepealemanha.de/faq",
  },

  icons: {
    icon: "/icon.png",
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
