import Image from "next/image";
import styles from "./BlogHighlights.module.css";
import Link from "next/link";
import articles from "@/app/_lib/data-popularArticles";
import Category from "../Category/Category";

export default function BlogHighlights() {
  return (
    <div className={styles.HighlightsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Em Destaque</h2>
        <p className={styles.sectionSubtitle}>
          Latest breaking news, pictures, videos and special reports
        </p>
      </div>
      <div className={styles.layoutGrid}>
        <div className={styles.postsGrid}>
          {articles?.slice(0, 4).map((article) => (
            <div key={article.id} className={styles.articleCard}>
              <div className={styles.imageWrapper}>
                <Image
                  width={400}
                  height={400}
                  src={article?.thumbnail}
                  className={styles.articleImage}
                  alt={article.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.categoryBadge}>
                  <p>{article.category.name}</p>
                </div>
              </div>
              <div className={styles.articleContainer}>
                <div className={styles.articleBody}>
                  <h3 className={styles.articleTitle}>{article?.title}</h3>
                  <div className={styles.articleMeta}>
                    <div className={styles.metaItem}>
                      <p>23th August, 2026</p>
                    </div>
                    <div className={styles.metaItem}>
                      <p>{article?.views}</p>
                    </div>
                    <div className={styles.metaItem}>
                      <p>{article?.readTime}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.articleFooter}>
                <div className={styles.authorInfo}>
                  <Image
                    width={32}
                    height={32}
                    className={styles.authorAvatar}
                    src={article?.author.avatar}
                    alt=""
                    sizes="32px"
                  />
                  <div>
                    <p className={styles.authorName}>{article?.author.name}</p>
                    <p className={styles.authorRole}>
                      {article?.author.jobTitle || "Content Writer"}
                    </p>
                  </div>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className={styles.readMoreButton}
                >
                  Lêr +
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Category />
        </div>
      </div>
    </div>
  );
}
