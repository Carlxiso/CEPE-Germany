import Image from "next/image";
import styles from "./BlogHighlights.module.css";
import Link from "next/link";
import articles from "@/app/_lib/data-popularArticles";
import BlogCardPopular from "../BlogCardPopular/BlogCardPopular";
import Category from "../Category/Category";
export default function BlogHighlights() {
  return (
    <div className={styles.HighlightsSection}>
      <div className={styles.sectionHeader}>
        <h1 className={styles.sectionTitle}>Em Destaque</h1>
        <p className={styles.sectionSubtitle}>
          Latest breaking news, pictures, videos and special reports
        </p>
      </div>
      <div className={styles.layoutGrid}>
        <div className={styles.postsGrid}>
          {articles?.slice(0, 4).map((article) => (
            <div key={article.id} className={styles.articleCard}>
              <Image
                width={400}
                height={400}
                src={article?.thumbnail}
                className={styles.articleImage}
                alt="Article Image"
              />
              <div className={styles.articleContainer}>
                <div className={styles.articleBody}>
                  <div className={styles.categoryBadge}>
                    <p>{article.category.name}</p>
                  </div>
                  <h1 className={styles.articleTitle}>{article?.title}</h1>
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
                    width={100}
                    height={100}
                    className={styles.authorAvatar}
                    src={article?.author.avatar}
                    alt="Author Avatar"
                  />
                  <div>
                    <h1 className={styles.authorName}>
                      {article?.author.name}
                    </h1>
                    <p className={styles.authorRole}>
                      {article?.author.jobTitle || "Content Writer"}
                    </p>
                  </div>
                </div>

                <Link href="/" className={styles.readMoreButton}>
                  Lêr +
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div>
          <Category />

          {/* <div className={styles.recentPosts}>
            <div className={styles.recentHeader}>
              <h1 className={styles.recentTitle}>Recent Posts</h1>

              <p className={styles.recentSubtitle}>
                All recent posts to keep you updated
              </p>
            </div>

            {articles?.slice(0, 3).map((article) => (
              <div key={article.id} className={styles.recentPostItem}>
                <Image
                  width={100}
                  height={100}
                  src={article?.thumbnail}
                  alt="Article Image"
                  className={styles.recentPostImage}
                />

                <div className={styles.recentPostContent}>
                  <h1 className={styles.recentPostTitle}>{article?.title}</h1>

                  <p className={styles.recentPostMeta}>
                    {article?.views} views · {article?.readTime}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
