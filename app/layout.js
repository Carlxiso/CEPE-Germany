import Logo from "./_components/Logo";

export const metadata = {
  title: "CEPE - Alemanha",
  description: "Coordenação no Estrangeiro Portugueses na Alemanha",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
