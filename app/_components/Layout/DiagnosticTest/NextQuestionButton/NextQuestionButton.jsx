import styles from "./NextQuestionButton.module.css";

export default function NextQuestionButton({
  dispatch,
  answers,
  numQuestions,
  index,
}) {
  if (answers === null) return null;
  if (index < numQuestions - 1)
    return (
      <button
        className={styles.btn + " " + styles.btn_ui}
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        Próxima Questão
      </button>
    );
  if (index === numQuestions - 1)
    return (
      <button
        className={styles.btn + " " + styles.btn_ui}
        onClick={() => dispatch({ type: "finish" })}
      >
        Submeter Teste
      </button>
    );
}
