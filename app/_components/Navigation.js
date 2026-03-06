import Link from "next/link";
import styles from "./navigation.module.css";

export default function Navigation() {
  return (
    <nav aria-label="Main Navigation" className={styles.nav}>
      <ul className={styles.menu}>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/cursos">Cursos</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/contactos">Contactos</Link>
        </li>
        <li>
          <Link href="/faq">FAQ,s</Link>
        </li>
        <li>
          <Link href="/login" className="login">
            Login
          </Link>
        </li>
        <li>
          <Link href="/signup" className={styles.ctaLink}>
            Sign Up
          </Link>
        </li>
      </ul>
    </nav>
  );
}
