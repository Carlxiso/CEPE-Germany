import styles from "./DividerSection.module.css";
export default function DividerSection({ title, subtitle }) {
  return (
    <div className={styles.divider}>
      <h2>{title}</h2>

      <h4>{subtitle} </h4>
    </div>
  );
}
