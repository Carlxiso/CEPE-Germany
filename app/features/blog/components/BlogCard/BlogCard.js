import Image from "next/image";
import styles from "./BlogCard.module.css";
import { defaultArticle, defaultAvatar } from "../images";

export default function BlogCard() {
  return (
    <section className={styles.heroBlog}>
      <div className={styles.heroContainer}>
        <Image
          width={100}
          height={100}
          src={defaultArticle}
          alt="Hero Image"
          className={styles.heroImage}
        />

        <div className={styles.heroOverlay}>
          <div className={styles.category}>
            <i className="fas fa-umbrella"></i>
            <p>Lifestyle</p>
          </div>

          <h1 className={styles.heroTitle}>Example Article Title</h1>

          <div className={styles.authorInfo}>
            <Image
              width={100}
              height={100}
              className={styles.authorAvatar}
              src={defaultAvatar}
              alt=""
            />

            <p>25th August, 2026</p>
            <p>.</p>
            <p>John Dom</p>
            <p>.</p>
            <p>3min Read</p>
          </div>
        </div>
      </div>
    </section>
  );
}
