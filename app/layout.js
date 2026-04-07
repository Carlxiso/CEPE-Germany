import "@/app/_styles/globals.css";
import { Roboto } from "next/font/google";
import Header from "./_components/Layout/Header/Header";

const roboto = Roboto({ subsets: ["latin"], display: "swap" });
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

  icons: {
    icon: "/icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "CEPE Alemanha",
              url: "https://cepealemanha.de",
              description: "Coordenação do Ensino do Português na Alemanha",
              areaServed: "Alemanha",
              inLanguage: "pt",
            }),
          }}
        />
      </head>
      <body
        className={`${roboto.className} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
