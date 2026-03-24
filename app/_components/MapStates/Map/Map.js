import styles from "./Map.module.css";

export default function Map({ data, reverse = false }) {
  return (
    <div className={styles.mapSection}>
      <div className={`${styles.container} ${reverse ? styles.reverse : ""}`}>
        {/* LEFT (INFO) */}
        <div className={styles.info}>
          <h2 className={styles.title}>{data.name}</h2>
          <p>{data.textName}</p>
        </div>

        {/* RIGHT (MAP) */}
        <div className={styles.map}>{data.map}</div>
      </div>
    </div>
  );
}
