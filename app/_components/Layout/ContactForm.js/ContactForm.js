import styles from "./ContactForm.module.css";
import Button from "../../UI/Button/Button";
export default function ContactForm() {
  return (
    <div className={styles.wrapper}>
      {/* LEFT */}
      <div className={styles.left}>
        <span className={styles.kicker}>Mais Informações?</span>
        <h2 className={styles.title}>Em que podemos ajudar?</h2>

        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            placeholder="Nome"
            required
          />
          <input
            className={styles.input}
            type="email"
            placeholder="E-mail"
            required
          />
          <input
            className={styles.input}
            type="tel"
            placeholder="Telefone"
            required
          />
          <textarea
            className={styles.textarea}
            placeholder="Escreva uma mnesagem curta"
            rows={5}
          />

          <Button className={styles.button} type="submit">
            Enviar
          </Button>
        </form>
      </div>

      {/* RIGHT */}
      <div className={styles.right}>
        <div className={styles.mapWrapper}>
          <iframe
            title="Google Maps location of Kurfürstenstraße 57, Berlin"
            className={styles.map}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Kurfürstenstraße+57,+10785+Berlin&output=embed"
          />

          <div className={styles.mapCard}>
            <span className={styles.mapCardTop}>Google Maps INFO</span>
            <h3 className={styles.mapCardTitle}>
              Onde nos pode esncontrar. Visite-nos!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
