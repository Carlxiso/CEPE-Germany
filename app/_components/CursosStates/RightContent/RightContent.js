import styles from "./RightContent.module.css";

export default function RightContent({ text }) {
  return (
    <div className={styles.right}>
      <p className={styles.contentText}>{text}</p>
    </div>
  );
}
