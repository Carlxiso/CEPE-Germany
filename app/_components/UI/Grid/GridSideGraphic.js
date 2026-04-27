import styles from "./GridSideGraphic.module.css";
export default function GridSideGraphic({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}
