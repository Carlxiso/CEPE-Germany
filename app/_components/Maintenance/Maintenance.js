import styles from "./Maintenance.module.css";

export default function Maintenance({ section }) {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>{section} em manutenção</h1>
        <p className={styles.subTitle}>
          Estamos a preparar algo incrivel. Volta em Breve
        </p>
      </div>
    </div>
  );
}
