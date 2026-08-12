import styles from "./NextQuestionButton.module.css";

export default function NextQuestionButton({ dispatch, answers }) {
  if (answers === null) return null;
  return (
    <button
      className={styles.btn + " " + styles.btn_ui}
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Próxima Questão
    </button>
  );
}
