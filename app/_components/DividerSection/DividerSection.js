import styles from "./DividerSection.module.css";
export default function DividerSection({ title, subtitle, variant, h2Color }) {
  return (
    <div className={`${styles.divider}  ${variant ? styles[variant] : ""}`}>
      <h2 style={{ color: h2Color ? h2Color : "" }}>{title}</h2>

      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
}
