import styles from "./DividerSection.module.css";

export default function DividerSection({
  title,
  subtitle,
  variant,
  labelColor,
  headingColor,
  h2Color,
  subtitleColor,
}) {
  return (
    <div className={`${styles.divider} ${variant ? styles[variant] : ""}`}>
      <p
        className={styles.label}
        style={
          (labelColor ?? h2Color) ? { color: labelColor ?? h2Color } : undefined
        }
      >
        {title}
      </p>
      <h2
        className={styles.heading}
        style={
          (subtitleColor ?? headingColor)
            ? { color: subtitleColor ?? headingColor }
            : undefined
        }
      >
        {subtitle}
      </h2>
    </div>
  );
}
