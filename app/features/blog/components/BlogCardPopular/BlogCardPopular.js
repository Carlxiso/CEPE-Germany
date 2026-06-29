import Link from "next/link";
import Image from "next/image";
import styles from "./BlogCardPopular.module.css";
import { readTimeLabel } from "@/app/_lib/blog-format";

const FALLBACK_IMG = "/default/defaultArticle.png";

export default function BlogCardPopular({ articles = [] }) {
  return (
    <div className={styles.handPickedSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Populares</h2>
        <p className={styles.sectionSubtitle}>
          Os artigos mais vistos pela comunidade
        </p>
      </div>

      <div className={styles.articlesGrid}>
        {articles.slice(0, 4).map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <div className={styles.imageWrapper}>
              <Image
                width={400}
                height={400}
                src={article.thumbnail || FALLBACK_IMG}
                alt={article.title}
                className={styles.articleImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {article.category?.title && (
                <div className={styles.categoryBadge}>
                  <p>{article.category.title}</p>
                </div>
              )}
            </div>
            <div className={styles.articleContent}>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <div className={styles.articleFooter}>
                <div className={styles.articleMeta}>
                  <span>{article.author?.full_name ?? "Autor"}</span>
                  <span aria-hidden="true">·</span>
                  <span>{readTimeLabel(article.read_time)}</span>
                </div>
                <Link
                  href={`/blog/${article.slug}`}
                  className={styles.readMoreButton}
                >
                  Lêr +
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
