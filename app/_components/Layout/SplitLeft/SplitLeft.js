import Image from "next/image";
import styles from "./SplitLeft.module.css";

export default function SplitLeft({
  src,
  alt,
  title,
  text,
  subtitle,
  fullscreen = false,
}) {
  return (
    <div className={`${styles.split} ${fullscreen ? styles.full : ""}`}>
      <div className={styles.image}>
        <Image src={src} fill alt={alt} className={styles.imageElement} />
      </div>

      <div className={styles.content}>
        <div className={styles.innerContent}>
          {/* eyebrow label — não é um heading de secção */}
          <p className={styles.label}>{title}</p>
          <h2 className={styles.heading}>{subtitle}</h2>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
