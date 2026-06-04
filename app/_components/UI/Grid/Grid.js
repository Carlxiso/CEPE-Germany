import styles from "./Grid.module.css";

export default function Grid({ children, className = "", ariaHidden }) {
  return (
    <div
      className={`${styles.grid} ${className}`}
      aria-hidden={ariaHidden || undefined}
    >
      {children}
    </div>
  );
}
