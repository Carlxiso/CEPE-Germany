import Image from "next/image";
import Button from "../../UI/Button/Button";
import img from "../../../../public/letters-in-group.png";
import styles from "./SplitSectionGrid.module.css";
import DividerSection from "../../DividerSection/DividerSection";

export default function SplitSectionGrid({ fullscreen = false }) {
  return (
    <section className={`${styles.split} ${fullscreen ? styles.full : ""}`}>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <DividerSection
            title="Sobre Nós"
            subtitle="Descobra um pouco mais de nós"
          />
          <p>
            A Coordenação do Ensino Português no Estrangeiro na Alemanha é uma
            estrutura do Camões – Instituto da Cooperação e da Língua, I.P.,
            responsável pela promoção e desenvolvimento do ensino da língua
            portuguesa no ensino básico e secundário e ensino superior no
            contexto alemão. Atua em 9 dos 16 estados federais junto de escolas,
            docentes, alunos e parceiros institucionais, promovendo o português
            como língua de herança, língua estrangeira e língua de cultura. Em
            articulação com a Embaixada de Portugal e entidades locais,
            desenvolve iniciativas educativas e culturais que reforçam a
            visibilidade, a qualidade e o prestígio da língua portuguesa,
            contribuindo para a sua afirmação no sistema educativo e na
            sociedade alemã e reforçando a ligação às comunidades portuguesas.
          </p>

          <Button href="/about">Saber +</Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src={img}
          fill
          alt="Technology solutions"
          className={styles.imageElement}
        />
      </div>
    </section>
  );
}
