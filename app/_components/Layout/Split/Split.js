import Image from "next/image";
import styles from "./Split.module.css";

export default function Split({
  src,
  alt,
  title,
  subtitle,
  text,
  fullscreen = false,
  reverse = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}) {
  return (
    <div
      className={`${styles.split} ${fullscreen ? styles.full : ""} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.image}>
        <Image
          src={src}
          fill
          alt={alt}
          sizes={sizes}
          className={styles.imageElement}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.innerContent}>
          <p className={styles.label}>{title}</p>
          <h2 className={styles.heading}>{subtitle}</h2>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    </div>
  );
}
