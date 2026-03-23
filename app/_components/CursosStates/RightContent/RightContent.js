import styles from "../States/States.module.css";

export default function RightContent({ text }) {
  return (
    <div className={styles.right}>
      <p>{text}</p>
    </div>
  );
}
