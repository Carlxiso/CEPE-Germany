import styles from "./GridWrapper.module.css";

export default function GridWrapper({ reverse = false, children }) {
  return (
    <div
      className={`${styles.layout} ${reverse ? styles.reverse : styles.normal}`}
    >
      {children}
    </div>
  );
}
