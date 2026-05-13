import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCardPopular.module.css";
import popularArticles from "@/app/_lib/data-popularArticles";

export default function BlogCardPopular() {
  return (
    <div className={styles.handPickedSection}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Populares</h1>

        <p className={styles.sectionSubtitle}>
          Latest breaking news, pictures, videos and special reports
        </p>
      </div>

      <div>
        <div className={styles.articlesGrid}>
          {popularArticles?.slice(0, 4).map((article) => (
            <div key={article?.id}>
              <Link href="/">
                <div className={styles.articleCard}>
                  <Image
                    width={400}
                    height={400}
                    src={article.category.thumbnail}
                    alt="Article Image"
                    className={styles.articleImage}
                  />

                  <div className={styles.imageOverlay}></div>

                  <div className={styles.articleContent}>
                    <div className={styles.categoryBadge}>
                      <p>{article?.category.name}</p>
                    </div>

                    <h1 className={styles.articleTitle}>{article.title}</h1>

                    <div className={styles.articleMeta}>
                      <p>By Charles Fix</p>
                      <p>.</p>
                      <p>3min Read</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
