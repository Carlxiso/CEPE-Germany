import Image from "next/image";
import styles from "./SplitRigth.module.css";

export default function SplitRigth({
  src,
  alt,
  title,
  subtitle,
  text,
  fullscreen = false,
}) {
  return (
    <div className={`${styles.split} ${fullscreen ? styles.full : ""}`}>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <p className={styles.label}>{title}</p>
          <h2 className={styles.heading}>{subtitle}</h2>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.image}>
        <Image src={src} fill alt={alt} className={styles.imageElement} />
      </div>
    </div>
  );
}
