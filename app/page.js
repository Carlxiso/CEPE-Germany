import Hero from "./_components/Layout/Hero/Hero";
import Section from "./_components/Layout/Section/Section";
import institutionsData from "./_lib/data-institutions";
import certificImg from "../public/abc-letters.png";
import Button from "./_components/UI/Button/Button";
import NewsSection from "./_components/Layout/NewsSection/NewsSection";
import SplitSection from "./_components/Layout/SplitSection/SplitSection";
import SplitSectionGrid from "./_components/Layout/SplitSectionGrid/SplitSectionGrid";
import Institutions from "./_components/Layout/Institutions/Institutions";
import DiagnosticTest from "./_components/Layout/DiagnosticTest/DiagnosticTest";
import Footer from "./_components/Layout/Footer/Footer";
import Form from "./_components/Layout/Form/Form";
import Testimonials from "./_components/Testimonials/Testimonials";
import StatsSection from "./_components/Layout/StatsSection/StatsSection";
import Certification from "./_components/Certification/Certification";
export const metadata = {
  metadataBase: new URL("https://cepealemanha.de"),

  title: {
    default: "Português na Alemanha | Cursos e Ensino Oficial - CEPE Alemanha",
    template: "%s | Português na Alemanha - CEPE",
  },

  description:
    "Aprenda português na Alemanha com cursos oficiais do Camões I.P. para crianças, jovens e adultos. Consulte escolas, inscrições e certificações disponíveis.",

  keywords: [
    "português na Alemanha",
    "cursos de português Alemanha",
    "aprender português Alemanha",
    "ensino português no estrangeiro",
    "CEPE Alemanha",
    "Camões I.P. cursos português",
    "língua portuguesa herança Alemanha",
    "aulas de português Alemanha crianças",
    "certificação português Alemanha",
    "inscrição cursos português Alemanha",
  ],

  authors: [
    { name: "Coordenação do Ensino do Português no Estrangeiro - Alemanha" },
  ],
  creator: "Carl-iso",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cepealemanha.de",
    siteName: "CEPE Alemanha",
    title: "Português na Alemanha | CEPE Alemanha",
    description:
      "Cursos oficiais de português na Alemanha para todas as idades. Inscrições abertas.",
    images: [
      {
        url: "/cepelogo.png",
        width: 1200,
        height: 630,
        alt: "Cursos de Português na Alemanha - CEPE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Aprender Português na Alemanha",
    description:
      "Cursos oficiais do Camões I.P. para todas as idades. Inscreva-se já.",
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
    canonical: "https://cepealemanha.de",
  },

  icons: {
    icon: "/icon.png",
  },
};
export default function Page() {
  return (
    <>
      <Hero />
      <Section fullscreen>
        <NewsSection />
      </Section>
      <SplitSectionGrid fullscreen></SplitSectionGrid>
      <Section fullscreen>
        <StatsSection />
      </Section>
      <SplitSection fullscreen></SplitSection>
      <Section fullscreen>
        <Institutions cards={institutionsData}></Institutions>
      </Section>
      <Section fullscreen bgColor="#005d8d">
        <DiagnosticTest />
      </Section>
      <Section fullscreen>
        <Testimonials />
      </Section>
      <Section fullscreen withContainer={false} background={certificImg.src}>
        <Certification />
      </Section>
      <Section fullscreen>
        <Form />
      </Section>
      <Footer />
    </>
  );
}
