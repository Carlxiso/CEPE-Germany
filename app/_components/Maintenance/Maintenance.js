import Image from "next/image";
import styles from "./Maintenance.module.css";
import imageMantainence from "../../../public/DSC_9809-2.png";

export default function Maintenance({ section }) {
  return (
    <div className={styles.container}>
      <Image
        src={imageMantainence}
        alt={imageMantainence.name}
        fill
        priority
        className={styles.bg}
      />
      {/* <div className={styles.overlay} /> */}
      <div className={styles.card}>
        <h1 className={styles.title}>{section} em manutenção</h1>
        <p className={styles.subTitle}>
          Estamos a preparar algo incrivel. Volta em Breve
        </p>
      </div>
    </div>
  );
}
