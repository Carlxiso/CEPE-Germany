import styles from "./Heading.module.css";

export default function Heading() {
  return (
    <div className={styles.heading}>
      <h1>
        Transformamos aprendizagem em comunicação real <br />
      </h1>
      <p>
        Não ensinamos apenas regras — ajudamos-te a usar o português no mundo
        real, com confiança e naturalidade.
      </p>
    </div>
  );
}
