import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

/** Importing Fonts */
import { Roboto } from "next/font/google";
import Header from "./_components/Header";
const roboto = Roboto({ subsets: ["latin"], display: "swap" });
export const metadata = {
  title: {
    template: "%s | CEPE Alemanha",
    default: "Bem Vindo | CEPE Alemanha",
  },
  description:
    "Website de apoio e divulgação da Coordenação no Estrangeiro do Português na Alemanha",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12">
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
