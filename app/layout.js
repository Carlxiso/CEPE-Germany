import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

/** Importing Fonts */
import { Roboto } from "next/font/google";
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
      <body className={`${roboto.className} min-h-screen`}>
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
