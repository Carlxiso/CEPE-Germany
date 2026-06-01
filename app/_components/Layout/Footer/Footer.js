import Link from "next/link";
import styles from "./Footer.module.css";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import Logo from "@/app/_components/Layout/Logo/Logo";

export default function Footer({ footerLogoWhite = false }) {
  const links = [
    { href: "/about", label: "Sobre Nós" },
    { href: "/cursos", label: "Cursos" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "Suporte" },
    { href: "#", label: "Carreiras" },
  ];

  const legal = [
    { href: "#", label: "Política de Privacidade" },
    { href: "#", label: "Termos de Utilização" },
    { href: "#", label: "Segurança" },
    { href: "#", label: "Mapa do Site" },
    { href: "#", label: "Imprensa" },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP AREA */}
        <div className={styles.top}>
          <div className={styles.logo}>
            <Logo footerLogoWhite={footerLogoWhite} />
          </div>

          <nav className={styles.nav} aria-label="Navegação do rodapé">
            <ul>
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* BOTTOM AREA */}
        <div className={styles.bottom}>
          <p className={styles.copy} suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Coordenação de Ensino do Português
            no Estrangeiro
          </p>

          <ul className={styles.legal}>
            {legal.map((item) => (
              <li key={item.label}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className={styles.social}>
            <a href="#" aria-label="X (Twitter)">
              <FaXTwitter />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
