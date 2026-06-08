import Image from "next/image";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contacte-nos</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      <div className={styles.imageSection}>
        <Image
          src="/DSC_2795.jpg"
          alt="Embaixada Portuguesa em Berlim"
          width={3008}
          height={1456}
          sizes="(max-width: 1100px) 100vw, 1100px"
          className={styles.image}
          priority
        />

        <div className={styles.card}>
          <span className={styles.cardTop}>O nosso contacto</span>

          <h2 className={styles.cardTitle}>CEPE - Alemanha</h2>

          <div className={styles.cardInfo}>
            <p>+62 (0) 9 321 03 00</p>
            <p className={styles.email}>
              <a href="mailto:info@cepealemanha.de">INFO@CEPEALEMANHA.DE</a>
            </p>
            <p>
              STRASSE QUALQUER 62
              <br />
              99830 BERLIN
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
