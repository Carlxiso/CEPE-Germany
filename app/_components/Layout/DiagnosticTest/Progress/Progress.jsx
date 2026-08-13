import styles from "./Progress.module.css";
export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answers,
}) {
  return (
    <header className={styles.progress}>
      <progress
        value={index + (answers !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Pergunta <strong>{index}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints} pontos
      </p>
    </header>
  );
}
