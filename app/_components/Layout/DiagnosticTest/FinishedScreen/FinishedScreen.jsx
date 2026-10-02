import styles from "./FinishedScreen.module.css";

function estimateLevel(percentage) {
  if (percentage >= 85) return "C1";
  if (percentage >= 70) return "B2";
  if (percentage >= 55) return "B1";
  if (percentage >= 35) return "A2";
  return "A1";
}

export default function FinishedScreen({
  result,
  maxPossiblePoints,
  dispatch,
}) {
  if (result === null) {
    return <div className={styles.result}>A calcular o teu resultado…</div>;
  }

  if (result.error) {
    return (
      <>
        <div className={styles.result}>
          Não foi possível calcular o resultado. Tenta novamente.
        </div>
        <button
          className={styles.btn}
          onClick={() => dispatch({ type: "restart" })}
        >
          Refazer Teste
        </button>
      </>
    );
  }

  const { points } = result;
  const percentage = maxPossiblePoints
    ? Math.round((points / maxPossiblePoints) * 100)
    : 0;
  const level = estimateLevel(percentage);

  return (
    <>
      <div className={styles.result}>
        O teu nível estimado: <strong>{level}</strong> — {points} de{" "}
        {maxPossiblePoints} pontos ({percentage}%)
      </div>
      <button
        className={styles.btn}
        onClick={() => dispatch({ type: "restart" })}
      >
        Refazer Teste
      </button>
    </>
  );
}
