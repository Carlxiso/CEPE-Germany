import "@/app/_styles/globals.css";
import { Roboto } from "next/font/google";
import Header from "./_components/Layout/Header/Header";

const roboto = Roboto({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://cepealemanha.de"),

  title: {
    default: "Bem Vindo | CEPE Alemanha",
    template: "%s | CEPE Alemanha",
  },

  description:
    "Website de apoio e divulgação da Coordenação no Estrangeiro do Português na Alemanha",

  keywords: [
    "Escola",
    "Cursos",
    "Português",
    "IP.Camões",
    "Língua Portuguesa como herança",
    "Português na Alemanha",
    "Alemanha",
    "Coordenação do Português",
    "Luis Vaz de Camões",
    "Cepe",
    "Ensino",
    "Educação",
    "Portugês no Estrangeiro",
  ],

  authors: [
    { name: "Coordenação do Ensino do Portugês no Estrangeiro - Alemanha" },
  ],
  creator: "Carl-iso",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cepealemanha.de",
    siteName: "Coordenação do Ensino do Portugês no Estrangeiro - Alemanha",
    title: "Coordenação do Ensino do Portugês no Estrangeiro",
    description:
      "Website de apoio e divulgação da Coordenação no Estrangeiro do Português na Alemanha",
    images: [
      {
        url: "/cepelogo.png",
        width: 1200,
        height: 630,
        alt: "Minha Plataforma",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Website de apoio e divulgação da Coordenação no Estrangeiro do Português na Alemanha",
    description:
      "Website de apoio e divulgação da Coordenação no Estrangeiro do Português na Alemanha",
    images: ["/cepelogo.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/icon.png",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body
        className={`${roboto.className} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
