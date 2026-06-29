import Image from "next/image";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import { excerpt, formatDate, readTimeLabel } from "@/app/_lib/blog-format";

const FALLBACK_IMG = "/default/defaultArticle.png";
const FALLBACK_AVATAR = "/default/defaultAvatar.png";

export default function BlogCard({ articles = [] }) {
  if (!articles.length) return null;

  // primeiro artigo = hero, os 4 seguintes = grelha de destaque
  const [hero, ...rest] = articles;
  const featured = rest.slice(0, 4);

  return (
    <div className={styles.heroBlog}>
      {/* HERO CARD */}
      <div className={styles.heroContainer}>
        <div className={styles.heroImageWrapper}>
          <Image
            fill
            src={hero.thumbnail || FALLBACK_IMG}
            alt={hero.title}
            className={styles.heroImage}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          {hero.category?.title && (
            <div className={styles.category}>
              <p>{hero.category.title}</p>
            </div>
          )}
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{hero.title}</h1>
          <p className={styles.heroText}>{excerpt(hero.content)}</p>
          <div className={styles.heroFooter}>
            <div className={styles.authorInfo}>
              <Image
                width={32}
                height={32}
                className={styles.authorAvatar}
                src={hero.author?.avatar_url || FALLBACK_AVATAR}
                alt=""
                sizes="32px"
              />
              <span>{formatDate(hero.date_created)}</span>
              <span aria-hidden="true">·</span>
              <span>{hero.author?.full_name ?? "Autor"}</span>
              <span aria-hidden="true">·</span>
              <span>{readTimeLabel(hero.read_time)}</span>
            </div>
            <Link href={`/blog/${hero.slug}`} className={styles.readMoreButton}>
              Lêr +
            </Link>
          </div>
        </div>
      </div>

      {/* ARTICLE GRID */}
      <div className={styles.articlesGrid}>
        {featured.map((article) => (
          <div key={article.id} className={styles.articleCard}>
            <div className={styles.articleImageWrapper}>
              <Image
                fill
                src={article.thumbnail || FALLBACK_IMG}
                alt={article.title}
                className={styles.articleImage}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              {article.category?.title && (
                <div className={styles.articleCategory}>
                  <p>{article.category.title}</p>
                </div>
              )}
            </div>
            <div className={styles.articleContent}>
              <h2 className={styles.articleTitle}>{article.title}</h2>
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
