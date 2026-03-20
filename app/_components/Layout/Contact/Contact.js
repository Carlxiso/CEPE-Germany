import styles from "./Contact.module.css";

export default function ContactHero() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h1 className={styles.title}>Contacte-nos</h1>
        <p className={styles.subtitle}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      </div>

      <button className={styles.floatingBtn}>INFO</button>

      <div className={styles.imageSection}>
        <img
          src="/DSC_2795.png"
          alt="Embaixada Portuguesa em Berlin"
          className={styles.image}
        />

        <div className={styles.card}>
          <span className={styles.cardTop}>O nosso contacto</span>

          <h2 className={styles.cardTitle}>CEPE - Alemanha</h2>

          <div className={styles.cardInfo}>
            <p>+62 (0) 9 321 03 00</p>
            <p className={styles.email}>INFO@CEPEALEMANHA.DE</p>
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
