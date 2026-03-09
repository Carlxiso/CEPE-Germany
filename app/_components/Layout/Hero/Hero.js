import Image from "next/image";
import Button from "../../UI/Button/Button";
import Container from "../Container/Container";
import styles from "./Hero.module.css";
import imageBg from "../../../../public/bg-letters.png";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <Image
        src={imageBg}
        alt="Background Image Letters"
        fill
        priority
        className={styles.heroImage}
      />
      <Container>
        <div className={styles.heroContent}>
          <h1>
            Abarca a língua portuguesa <br />
          </h1>
          <p>
            Abarcar a língua portuguesa é abraçar a nossa história, a família e
            as raízes que nos definem. É manter viva uma herança cultural única
            e, ao mesmo tempo, ganhar uma ferramenta valiosa para o teu futuro
            académico e profissional. Abraça este super poder!
          </p>
        </div>
        <div className={styles.heroButtons}>
          <Button>Pré-Inscrição</Button>
          <Button variant="outline">Saber Mais</Button>
        </div>
      </Container>
    </section>
  );
}
