import styles from "./Progress.module.css";

export default function Progress({ index, numQuestions, answers }) {
  return (
    <header className={styles.progress}>
      <progress
        className={styles.bar}
        value={index + (answers !== null)}
        max={numQuestions}
      />
      <p className={styles.questionbar}>
        Pergunta <strong>{index}</strong> / {numQuestions}
      </p>
    </header>
  );
}
