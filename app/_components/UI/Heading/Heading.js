import styles from "./Heading.module.css";

export default function Heading({ h1, heading }) {
  return (
    <div className={styles.heading}>
      <h1>{h1}</h1>
      <p>{heading}</p>
    </div>
  );
}
