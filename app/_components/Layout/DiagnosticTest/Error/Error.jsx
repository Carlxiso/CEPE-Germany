import styles from "./Error.module.css";

export default function Error() {
  return (
    <p className={styles.error}>
      <span>ICON - </span> There was an error fetching questions.
    </p>
  );
}
