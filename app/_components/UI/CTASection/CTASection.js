import Button from "../Button/Button";
import CirclePattern from "../CirclePattern/CirclePattern";
import styles from "./CTASection.module.css";

export default function CTASection({ headline, text }) {
  return (
    <>
      <div className={styles.ctaContent}>
        <h1>{headline}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.ctaButtons}>
        <Button>Começar Teste</Button>
      </div>
    </>
  );
}
