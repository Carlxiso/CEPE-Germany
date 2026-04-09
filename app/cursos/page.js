import imgCourse from "@/public/cursos-gps-abc.png";
import Section from "../_components/Layout/Section/Section";
import Footer from "../_components/Layout/Footer/Footer";
import States from "../_components/CursosStates/States/States";
import State from "../_components/CursosStates/State/State";
import WrapperCenter from "../_components/wrapperCenter/WrapperCenter";

export const metadata = {
  metadataBase: new URL("https://cepealemanha.de/contactos"),

  title: {
    default: "Cursos de Português na Alemanha | CEPE Alemanha",
    template: "%s | Português na Alemanha - CEPE",
  },

  description:
    "Descubra cursos de português na Alemanha para crianças, jovens e adultos. Consulte níveis de ensino, escolas disponíveis, inscrições e certificações.",

  keywords: [
    "cursos de português na Alemanha",
    "aprender português Alemanha",
    "aulas de português Alemanha",
    "cursos Camões Alemanha",
    "ensino português no estrangeiro Alemanha",
    "cursos português crianças Alemanha",
    "cursos português adultos Alemanha",
    "inscrição cursos português Alemanha",
  ],

  authors: [
    { name: "Coordenação do Ensino do Português no Estrangeiro - Alemanha" },
  ],
  creator: "Carl-iso",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cepealemanha.de/cursos",
    siteName: "CEPE Alemanha",
    title: "Cursos de Português na Alemanha | CEPE Alemanha",
    description:
      "Explore cursos de português na Alemanha para todas as idades, com certificação e ensino oficial.",
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
    title: "Cursos de Português na Alemanha",
    description:
      "Aprenda português na Alemanha com cursos oficiais para todas as idades.",
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
    canonical: "https://cepealemanha.de/cursos",
  },

  icons: {
    icon: "/icon.png",
  },
};

export default function Page() {
  return (
    <>
      <Section fullscreen background={imgCourse.src}></Section>

      <States>
        <State></State>
      </States>
      <Section bgColor="#415364">
        <WrapperCenter />
      </Section>
      <Footer />
    </>
  );
}
