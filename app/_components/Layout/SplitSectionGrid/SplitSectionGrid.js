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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            suscipit eaque consequuntur nisi consectetur iure officia quibusdam
            quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium
            similique quaerat vitae, iure a, excepturi nihil alias obcaecati
            iste itaque dolores maiores voluptatem tempora quam. Impedit illo
            accusamus architecto neque minima, autem quae modi dolor rerum at
            quo nisi aut ea tempore eligendi obcaecati corrupti esse magnam!
            Exercitationem, ullam ducimus id sint quod expedita cum ab. Incidunt
            exercitationem veritatis doloribus libero esse quisquam alias
            consectetur modi voluptate eligendi illum ipsum, nemo nostrum vero
            nesciunt, quidem perferendis!
          </p>

          <Button>Saber +</Button>
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
