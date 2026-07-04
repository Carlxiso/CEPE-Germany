import Image from "next/image";
import Link from "next/link";
import { getBookmarkedArticles } from "@/app/_lib/bookmarks";
import { excerpt, readTimeLabel } from "@/app/_lib/blog-format";
import styles from "./saved.module.css";

export const metadata = { title: "Os meus guardados | CEPE" };

const FALLBACK_IMG = "/default/defaultArticle.png";

export default async function SavedArticlesPage() {
  const articles = await getBookmarkedArticles();

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Os meus guardados</h1>
        <p className={styles.pageSubtitle}>
          {articles.length === 0
            ? "Ainda não guardaste nenhum artigo."
            : `${articles.length} ${
                articles.length === 1 ? "artigo guardado" : "artigos guardados"
              }`}
        </p>
      </header>

      {articles.length === 0 ? (
        <div className={styles.emptyState}>
          <p>Guarda artigos no blog para os encontrares aqui mais tarde.</p>
          <Link href="/blog" className={styles.emptyLink}>
            Ir para o blog
          </Link>
        </div>
      ) : (
        <div className={styles.grid}>
          {articles.map((article) => (
            <Link
              key={article.id}
              href={`/blog/${article.slug}`}
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <Image
                  fill
                  src={article.thumbnail || FALLBACK_IMG}
                  alt={article.title}
                  className={styles.image}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {article.category?.title && (
                  <span className={styles.category}>
                    {article.category.title}
                  </span>
                )}
              </div>
              <div className={styles.content}>
                <h2 className={styles.cardTitle}>{article.title}</h2>
                <p className={styles.cardExcerpt}>{excerpt(article.content)}</p>
                <span className={styles.readTime}>
                  {readTimeLabel(article.read_time)}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
