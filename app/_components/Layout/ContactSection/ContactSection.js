import styles from "./ContactSection.module.css";
import ContactForm from "../Form/ContactForm";

export default function ContactSection() {
  return (
    <div className={styles.wrapper}>
      {/* LEFT */}
      <div className={styles.left}>
        <span className={styles.kicker}>Mais Informações?</span>
        <h2 className={styles.title}>Em que podemos ajudar?</h2>

        <ContactForm />
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.mapWrapper}>
          <iframe
            title="Localização da CEPE Alemanha no Google Maps — Kurfürstenstraße 57, Berlim"
            className={styles.map}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Kurfürstenstraße+57,+10785+Berlin&output=embed"
          />

          <div className={styles.mapCard}>
            <span className={styles.mapCardTop}>Google Maps INFO</span>
            <h3 className={styles.mapCardTitle}>
              Onde nos pode encontrar. Visite-nos!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
