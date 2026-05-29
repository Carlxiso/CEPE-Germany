import Image from "next/image";
import styles from "./SplitSection.module.css";
import img from "../../../../public/letters.jpg";
import Button from "../../UI/Button/Button";
import DividerSection from "../../DividerSection/DividerSection";

export default function SplitSection({ fullscreen = false }) {
  return (
    <div className={`${styles.split} ${fullscreen ? styles.full : ""}`}>
      <div className={styles.image}>
        <Image
          src={img}
          fill
          alt="Technology solutions"
          className={styles.imageElement}
        />
      </div>

      <div className={styles.content}>
        <div className={styles.innerContent}>
          <DividerSection
            title="CURSOS"
            subtitle="Descubra cursos que abarcam a Língua Portuguesa"
          />
          <p className={styles.contentText}>
            A Coordenação do Ensino Português da Alemanha, em articulação com o
            Camões – Instituto da Cooperação e da Língua, I.P., desenvolve uma
            presença sólida e abrangente no sistema educativo alemão, abarcando
            a língua portuguesa em diferentes níveis de ensino e contextos
            académicos. No ensino básico e secundário, a Coordenação assegura
            cursos de Língua e Cultura Portuguesas, em regime paralelo,
            destinados a alunos com idades compreendidas entre os 6 e os 18
            anos, lusodescendentes, estando presente em 9 dos 16 estados
            federais da Alemanha. Esta oferta do ensino do Português como língua
            de Herança permite o contacto continuado com a língua portuguesa
            desde a infância até ao final da escolaridade obrigatória,
            promovendo não só a competência linguística, mas também o
            conhecimento cultural e identitário.
          </p>

          <Button href="/cursos">Saber +</Button>
        </div>
      </div>
    </div>
  );
}
