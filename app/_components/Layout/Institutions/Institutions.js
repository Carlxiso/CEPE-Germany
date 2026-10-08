import DividerSection from "../../DividerSection/DividerSection";
import Card from "../../UI/Card/Card";
import styles from "./Institutions.module.css";

export default function Institutions({ cards }) {
  return (
    <>
      <DividerSection
        title="Os nossos parceiros"
        subtitle="Cooperar para aproximar: língua, cultura e comunidades"
        text="A articulação entre a CEPE Alemanha, o Camões, I.P., a Embaixada de Portugal em Berlim e o Ministério dos Negócios Estrangeiros (MNE) assenta num modelo de cooperação institucional que visa a promoção da língua e da cultura portuguesas, bem como o acompanhamento das comunidades portuguesas no exterior."
      />
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
    </>
  );
}
