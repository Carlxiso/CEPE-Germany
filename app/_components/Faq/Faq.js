// import CollapseItem from "./CollapseItem";
import Collapse from "../Collapse/Collapse";
import styles from "./Faq.module.css";

export default function Faq({ topic, items }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.topic}>{topic}</h2>
      {items.map((item, index) => (
        <Collapse key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
