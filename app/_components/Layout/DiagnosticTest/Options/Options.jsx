import styles from "./Options.module.css";

export default function Options({ question }) {
  return (
    <div className={styles.options}>
      {question.options.map((option) => (
        <button key={option.id} className={`${styles.btn} ${styles.btnOption}`}>
          {option}
        </button>
      ))}
    </div>
  );
}
