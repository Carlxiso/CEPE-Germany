import styles from "../States/States.module.css";
import LeftContent from "../LeftContent/LeftContent";
import RightContent from "../RightContent/RightContent";

export default function State({ data, reverse }) {
  return (
    <div className={styles.section}>
      <div
        className={`${styles.container} ${
          reverse ? styles.reverseContainer : ""
        }`}
      >
        <LeftContent {...data} />
        <RightContent text={data.text} />
      </div>
    </div>
  );
}
