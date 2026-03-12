import Card from "../../UI/Card/Card";
import styles from "./Institutions.module.css";

export default function Institutions({ cards }) {
  return (
    <div className={styles.institutions}>
      <div className={styles.grid}>
        {cards.map((card, idx) => (
          <Card
            key={idx}
            image={card.image}
            title={card.title}
            text={card.text}
            link={card.link}
            name={card.name}
            className={styles.test}
          />
        ))}
      </div>
    </div>
  );
}
