import styles from "./DividerSection.module.css";
export default function DividerSection({ title, subtitle, variant }) {
  return (
    <div className={`${styles.divider}  ${variant ? styles[variant] : ""}`}>
      <h2>{title}</h2>

      <h4>{subtitle} </h4>
    </div>
  );
}
