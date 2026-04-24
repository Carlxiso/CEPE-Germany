import Image from "next/image";
import styles from "./SplitSection.module.css";
import img from "../../../../public/letters.png";
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
          {/* <h2>CURSOS</h2>

          <h4> Descobre os estados na Alemanha onde Lecionamos.</h4> */}
          <DividerSection
            title="CURSOS"
            subtitle="Descubra cursos que abarcam a Língua Portuguesa"
          />
          <p>
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
            conhecimento cultural e identitário. No ensino superior, a presença
            do português estende-se a 11 cidades alemãs, através do ensino do
            português como língua estrangeira, concretizado em cursos
            universitários que incluem 2 cátedras e 9 protocolos de cooperação
            com instituições de ensino superior. Esta vertente reforça o
            estatuto académico da língua portuguesa e a sua relevância nos
            domínios científico, cultural e internacional. A esta atuação
            juntam-se ainda as parcerias com os projetos bilingues de Berlim e
            Hamburgo, que integram o português em modelos educativos inovadores
            e multiculturais, sendo que a CEPE Alemanha disponibiliza recursos
            humanos para lecionar a disciplina de Português e prestar Apoios
            Linguísticos a lusodescendentes ou outros que integrem o projeto.
            Nestes projetos, os alunos têm a possibilidade de realizar o Abitur
            também em língua portuguesa, contribuindo para uma formação
            plurilingue e para o reconhecimento do português como língua de
            escolarização e de sucesso académico. Desta forma, a ação conjunta
            da Coordenação do Ensino Português da Alemanha e do Camões, I.P.
            abarca a língua portuguesa de forma transversal, contínua e
            estruturada, afirmando-a no panorama educativo alemão e reforçando a
            sua projeção internacional.
          </p>

          <Button href="/cursos">Saber +</Button>
        </div>
      </div>
    </div>
  );
}
