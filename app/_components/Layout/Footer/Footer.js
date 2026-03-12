import styles from "./Footer.module.css";
import { FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Logo from "../Logo/Logo";

export default function Footer() {
  const links = ["Sobre Nós", "Cursos", "Blog", "Suporte", "Carreiras"];

  const legal = ["Privacy Statement", "Terms of Use", "Security"];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP AREA */}
        <div className={styles.top}>
          <div className={styles.logo}>
            <Logo />
          </div>

          <nav className={styles.nav}>
            <ul>
              {links.map((link, i) => (
                <li key={i}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* BOTTOM AREA */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © 2026 Coordenação de Ensino do Portugês no Estrangeiro
          </p>

          <ul className={styles.legal}>
            {legal.map((item, i) => (
              <li key={i}>
                <a href="#">{item}</a>
              </li>
            ))}
          </ul>

          <div className={styles.social}>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
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
