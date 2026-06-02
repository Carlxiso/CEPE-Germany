import Image from "next/image";
import Button from "@/app/_components/UI/Button/Button";
import styles from "./Hero.module.css";
import imageBg from "@/public/DSC_9384-2.jpg";

export default function Hero() {
  return (
    <div className={styles.hero} aria-labelledby="hero-heading">
      <Image
        src={imageBg}
        alt=""
        fill
        priority
        // sizes="(max-width: 768px) 100vw, 45vw"
        className={styles.heroImage}
      />
      <div className={styles.heroRight}>
        <div className={styles.heroContent}>
          <h1 id="hero-heading">Abarca a Língua Portuguesa</h1>
          <p>
            Abarcar a língua portuguesa é abraçar a nossa história, a família e
            as raízes que nos definem. É manter viva uma herança cultural única
            e, ao mesmo tempo, ganhar uma ferramenta valiosa para o teu futuro
            académico e profissional. Abraça este super poder!
          </p>
        </div>
        <div className={styles.heroButtons}>
          <Button type="button">Pré-Inscrição</Button>
          <Button type="button" variant="outlineSand">
            Saber +
          </Button>
        </div>
      </div>
    </div>
  );
}
