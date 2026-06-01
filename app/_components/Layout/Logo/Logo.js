import Image from "next/image";
import Link from "next/link";
import logo from "@/public/cepe_logo_black.png";
import logoWhite from "@/public/cepe_logo.png";
import styles from "./logo.module.css";

export default function Logo({ footerLogoWhite = false }) {
  return (
    <Link href="/" className={styles.logoWrapper}>
      {!footerLogoWhite ? (
        <>
          <Image
            src={logo}
            priority
            className={styles.logo}
            alt="CEPE Alemanha Logo"
          />
          <div className={styles.title}>
            <span>Coordenação do Ensino Português no Estangeiro</span>
          </div>
        </>
      ) : (
        <>
          <Image
            src={logoWhite}
            priority
            className={styles.logo}
            alt="CEPE Alemanha Logo"
          />
          <div className={styles.titleWhite}>
            <span>Coordenação do Ensino Português no Estangeiro</span>
          </div>
        </>
      )}
    </Link>
  );
}
