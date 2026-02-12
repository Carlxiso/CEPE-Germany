import Logo from "@/app/_components/Logo";
import "@/app/_styles/globals.css";

export const metadata = {
  title: "CEPE - Alemanha",
  description: "Coordenação no Estrangeiro Portugueses na Alemanha",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
