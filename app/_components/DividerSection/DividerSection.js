import styles from "./DividerSection.module.css";
export default function DividerSection({ title, subtitle, variant, h2Color, subtitleColor }) {
  return (
    <div className={`${styles.divider} ${variant ? styles[variant] : ""}`}>
      <h2 style={h2Color ? { color: h2Color } : undefined}>{title}</h2>
      <p className={styles.subtitle} style={subtitleColor ? { color: subtitleColor } : undefined}>
        {subtitle}
      </p>
    </div>
  );
}
