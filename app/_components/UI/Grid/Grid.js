import styles from "./Grid.module.css";

export default function Grid({ children, className = "" }) {
  return <div className={`${styles.grid} ${className}`}>{children}</div>;
}
