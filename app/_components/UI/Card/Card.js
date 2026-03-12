import Image from "next/image";
import styles from "./Card.module.css";
import Link from "next/link";

export default function Card({ image, title, text, name, link }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrapper}>
        <Image src={image} alt={title} className={styles.image}></Image>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
        <Link href={link} className={styles.link}>
          Saiba mais sobre o {name}
        </Link>
      </div>
    </article>
  );
}
