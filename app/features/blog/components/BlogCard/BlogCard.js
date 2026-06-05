import Image from "next/image";
import styles from "./BlogCard.module.css";
import Link from "next/link";
import {
  heroArticle,
  featuredArticles,
} from "@/app/_lib/data-featuredArticles";

export default function BlogCard() {
  return (
    <div className={styles.heroBlog}>
      {/* HERO CARD */}
      <div className={styles.heroContainer}>
        <div className={styles.heroImageWrapper}>
          <Image
            fill
            src={heroArticle.image}
            alt={heroArticle.title}
            className={styles.heroImage}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className={styles.category}>
            <p>{heroArticle.category}</p>
          </div>
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{heroArticle.title}</h1>
          <p className={styles.heroText}>{heroArticle.text}</p>
          <div className={styles.authorInfo}>
            <Image
              width={32}
              height={32}
              className={styles.authorAvatar}
              src={heroArticle.author.avatar}
              alt=""
              sizes="32px"
            />
            <span>{heroArticle.publishedAt}</span>
            <span aria-hidden="true">·</span>
            <span>{heroArticle.author.name}</span>
            <span aria-hidden="true">·</span>
            <span>{heroArticle.readTime}</span>
          </div>
        </div>
      </div>

      {/* ARTICLE GRID */}
      <div className={styles.articlesGrid}>
        {featuredArticles.map((article) => (
          <Link key={article.id} href={`/blog/${article.slug}`}>
            <div className={styles.articleCard}>
              <div className={styles.articleImageWrapper}>
                <Image
                  fill
                  src={article.image}
                  alt={article.title}
                  className={styles.articleImage}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={styles.articleCategory}>
                  <p>{article.category}</p>
                </div>
              </div>
              <div className={styles.articleContent}>
                <h2 className={styles.articleTitle}>{article.title}</h2>
                <div className={styles.articleMeta}>
                  <span>By {article.author.name}</span>
                  <span aria-hidden="true">·</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
