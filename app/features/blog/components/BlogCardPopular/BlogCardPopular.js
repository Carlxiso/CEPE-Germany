import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCardPopular.module.css";
import popularArticles from "@/app/_lib/data-popularArticles";

export default function BlogCardPopular() {
  return (
    <div className={styles.handPickedSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Populares</h2>
        <p className={styles.sectionSubtitle}>
          Latest breaking news, pictures, videos and special reports
        </p>
      </div>

      <div className={styles.articlesGrid}>
        {popularArticles?.slice(0, 4).map((article) => (
          <div key={article?.id}>
            <Link href={`/blog/${article.slug}`}>
              <div className={styles.articleCard}>
                <div className={styles.imageWrapper}>
                  <Image
                    width={400}
                    height={400}
                    src={article.category.thumbnail}
                    alt={article.title}
                    className={styles.articleImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className={styles.categoryBadge}>
                    <p>{article?.category.name}</p>
                  </div>
                </div>
                <div className={styles.articleContent}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <div className={styles.articleMeta}>
                    <span>By Charles Fix</span>
                    <span aria-hidden="true">·</span>
                    <span>3min Read</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
