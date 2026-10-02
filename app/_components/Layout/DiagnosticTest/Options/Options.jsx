import styles from "./Options.module.css";

export default function Options({ question, dispatch, answers }) {
  const hasAnswered = answers !== null;

  return (
    <div className={styles.options}>
      {question.options.map((option, index) => (
        <button
          key={index}
          disabled={hasAnswered}
          className={`${styles.btn} ${styles.btnOption} ${
            index === answers ? styles.answer : ""
          }`}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
