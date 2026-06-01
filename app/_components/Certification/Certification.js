import DividerSection from "@/app/_components/DividerSection/DividerSection";
import Button from "@/app/_components/UI/Button/Button";
import styles from "./Certification.module.css";

export default function Certification({ h2Color = "#f2dab2" }) {
  return (
    <div className={styles.content}>
      <div className={styles.innerContent}>
        <DividerSection
          title="CERTIFICAÇÃO"
          subtitle="A língua que abraça a sua história, agora certificada."
          h2Color={h2Color}
          subtitleColor="#f2dab2"
        />
        <p className={styles.contentText}>
          Obter uma certificação oficial é mais do que um reconhecimento: é a
          prova concreta de competências que abarcam a língua portuguesa e
          reforçam a ligação à identidade, à cultura e ao conhecimento.
          Certificar-se abre portas académicas e profissionais, valorizando o
          português como língua de herança e de futuro.
        </p>
        <Button type="button" variant="primary">
          Saber +
        </Button>
      </div>
    </div>
  );
}
