import Image from "next/image";
import styles from "./BlogHighlights.module.css";
import Link from "next/link";
import Category from "../Category/Category";
import { formatDate, readTimeLabel } from "@/app/_lib/blog-format";

const FALLBACK_IMG = "/default/defaultArticle.png";
const FALLBACK_AVATAR = "/default/defaultAvatar.png";

export default function BlogHighlights({ articles = [] }) {
  return (
    <div className={styles.HighlightsSection}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Em Destaque</h2>
        <p className={styles.sectionSubtitle}>
          Os artigos mais recentes do ensino do Português na Alemanha
        </p>
      </div>
      <div className={styles.layoutGrid}>
        <div className={styles.postsGrid}>
          {articles.slice(0, 4).map((article) => (
            <div key={article.id} className={styles.articleCard}>
              <div className={styles.imageWrapper}>
                <Image
                  width={400}
                  height={400}
                  src={article.thumbnail || FALLBACK_IMG}
                  className={styles.articleImage}
                  alt={article.title}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {article.category?.title && (
                  <div className={styles.categoryBadge}>
                    <p>{article.category.title}</p>
                  </div>
                )}
              </div>
              <div className={styles.articleContainer}>
                <div className={styles.articleBody}>
                  <h3 className={styles.articleTitle}>{article.title}</h3>
                  <div className={styles.articleMeta}>
                    <div className={styles.metaItem}>
                      <p>{formatDate(article.date_created)}</p>
                    </div>
                    <div className={styles.metaItem}>
                      <p>{article.views ?? 0} views</p>
                    </div>
                    <div className={styles.metaItem}>
                      <p>{readTimeLabel(article.read_time)}</p>
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
                    src={article.author?.avatar_url || FALLBACK_AVATAR}
                    alt=""
                    sizes="32px"
                  />
                  <div>
                    <p className={styles.authorName}>
                      {article.author?.full_name ?? "Autor"}
                    </p>
                    <p className={styles.authorRole}>Equipa CEPE</p>
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
