import styles from "./FinishedScreen.module.css";

export default function FinishedScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;

  let emoji;
  if (percentage === 100) emoji = "C2 🤑";
  if (percentage >= 80 && percentage < 100) emoji = "C1 😉";
  if (percentage >= 50 && percentage < 80) emoji = "B2 😉";
  if (percentage >= 0 && percentage < 50) emoji = "B1 😉";
  if (percentage === 0) emoji = "A1 🙄";

  if (!emoji) emoji = "--";

  return (
    <div className={styles.result}>
      Finished Screen<span>{emoji}</span> <strong>{points}</strong> de
      <strong>{maxPossiblePoints}</strong> pontos ({Math.ceil(percentage)}%) —{" "}
      {emoji}
    </div>
  );
}
