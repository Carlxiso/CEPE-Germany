import Contact from "../_components/Layout/Contact/Contact";
import ContactForm from "../_components/Layout/ContactForm.js/ContactForm";
import Footer from "../_components/Layout/Footer/Footer";
import Section from "../_components/Layout/Section/Section";
import Slider from "../_components/Slider/Slider";

export const metadata = {
  metadataBase: new URL("https://cepealemanha.de/contactos"),

  title: {
    default: "Contactos",
    template: "%s | Português na Alemanha - CEPE",
  },

  description:
    "Entre em contacto com o CEPE Alemanha para obter informações sobre cursos de português, inscrições e apoio ao ensino na Alemanha.",

  keywords: [
    "contactos CEPE Alemanha",
    "contacto português na Alemanha",
    "apoio cursos português Alemanha",
    "email CEPE Alemanha",
    "telefone cursos português Alemanha",
  ],

  authors: [
    { name: "Coordenação do Ensino do Português no Estrangeiro - Alemanha" },
  ],
  creator: "Carl-iso",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cepealemanha.de/contactos",
    siteName: "CEPE Alemanha",
    title: "Contactos CEPE Alemanha",
    description:
      "Fale connosco para obter informações sobre cursos de português na Alemanha.",
    images: [
      {
        url: "/cepelogo.png",
        width: 1200,
        height: 630,
        alt: "Contactos CEPE Alemanha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contactar CEPE Alemanha",
    description:
      "Precisa de ajuda com cursos de português na Alemanha? Fale connosco.",
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
    canonical: "https://cepealemanha.de/contactos",
  },

  icons: {
    icon: "/icon.png",
  },
};
export default function Page() {
  return (
    <>
      <Section fullscreen>
        <Contact />
      </Section>
      <Section bgColor="#415364">
        <ContactForm />
      </Section>
      <Section>
        <Slider />
      </Section>
      <Footer />
    </>
  );
}
