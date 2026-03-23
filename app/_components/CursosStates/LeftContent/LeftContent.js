import styles from "../States/States.module.css";

export default function LeftContent({
  name,
  textName,
  population,
  textPop,
  comunity,
  textComunity,
}) {
  return (
    <div className={styles.left}>
      <h2 className={styles.title}>{name}</h2>
      <p className={styles.description}>{textName}</p>

      <h3 className={styles.subtitle}>{population}</h3>
      <p>{textPop}</p>

      <h3 className={styles.subtitle}>{comunity}</h3>
      <p>{textComunity}</p>
    </div>
  );
}
