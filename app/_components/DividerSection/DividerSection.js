import styles from "./DividerSection.module.css";

export default function DividerSection({
  title,
  subtitle,
  variant,
  labelColor,
  headingColor,
}) {
  return (
    <div className={`${styles.divider} ${variant ? styles[variant] : ""}`}>
      <p
        className={styles.label}
        style={labelColor ? { color: labelColor } : undefined}
      >
        {title}
      </p>
      <h2
        className={styles.heading}
        style={headingColor ? { color: headingColor } : undefined}
      >
        {subtitle}
      </h2>
    </div>
  );
}
