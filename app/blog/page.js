import Footer from "../_components/Layout/Footer/Footer";
import Maintenance from "../_components/Maintenance/Maintenance";
import BlogCard from "../features/blog/components/BlogCard/BlogCard";
import Section from "./../_components/Layout/Section/Section";

export const metadata = {
  metadataBase: new URL("https://cepealemanha.de/blog"),

  title: {
    default: "Aprender Português na Alemanha | Blog CEPE",
    template: "%s | Português na Alemanha - CEPE",
  },

  description:
    "Artigos sobre aprender português na Alemanha, cursos, certificação, inscrições e ensino da língua portuguesa no estrangeiro.",

  keywords: [
    "aprender português na Alemanha",
    "cursos de português Alemanha",
    "ensino português no estrangeiro",
    "língua portuguesa herança Alemanha",
    "certificação português Alemanha",
    "como aprender português Alemanha",
    "português para crianças Alemanha",
    "português para adultos Alemanha",
  ],

  authors: [
    { name: "Coordenação do Ensino do Português no Estrangeiro - Alemanha" },
  ],
  creator: "Carl-iso",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cepealemanha.de/blog",
    siteName: "CEPE Alemanha",
    title: "Blog | Português na Alemanha - CEPE",
    description:
      "Descubra conteúdos e artigos sobre aprender português na Alemanha.",
    images: [
      {
        url: "/cepelogo.png",
        width: 1200,
        height: 630,
        alt: "Blog Português na Alemanha - CEPE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog - Português na Alemanha",
    description:
      "Dicas, guias e informações sobre aprender português na Alemanha.",
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
    canonical: "https://cepealemanha.de/blog",
  },

  icons: {
    icon: "/icon.png",
  },
};
export default function Page() {
  return (
    <>
      {/* <Maintenance section="Blog" /> */}
      <Section withContainer={false} className="blogSection">
        <BlogCard />
      </Section>
      <Footer />
    </>
  );
}
