import styles from "./StartTest.module.css";

export default function StartTest({ numQuestions, dispatch }) {
  return (
    <div className={styles.start}>
      <h2>Bem vindo ao test de Diagnótico de Lingua Portuguêsa</h2>
      <h3>Este teste de diagnótico é composto por {numQuestions} questões</h3>
      <button
        className={`${styles.btn} ${styles.btnUi}`}
        onClick={() => dispatch({ type: "start" })}
      >
        Vamos Começar
      </button>
    </div>
  );
}
