import Image from "next/image";
import styles from "./BlogCard.module.css";
import { defaultArticle, defaultAvatar } from "../images";
import Link from "next/link";

export default function BlogCard() {
  return (
    <section className={styles.heroBlog}>
      {/** BIG CARD */}
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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            suscipit eaque consequuntur nisi consectetur iure officia quibusdam
            quod nemo.
          </p>

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
      {/** BIG CARD */}
      {/********************************************/}
      {/** GROUP CARDS */}
      {/** CARD1 */}
      <div className={styles.articlesGrid}>
        <div>
          <Link href="/">
            <div className={styles.articleCard}>
              <Image
                width={100}
                height={100}
                src={defaultArticle}
                alt="Article Image"
                className={styles.articleImage}
              />

              <div className={styles.articleGradient}></div>

              <div className={styles.articleContent}>
                <div className={styles.articleCategory}>
                  <i className="fas fa-umbrella"></i>
                  <p>Lifestyle</p>
                </div>

                <h1 className={styles.articleTitle}>Example Article Title</h1>

                <div className={styles.articleMeta}>
                  <p>By Charles Fix</p>
                  <p>.</p>
                  <p>3min Read</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/** CARD1 */}
        {/** CARD2 */}

        <div>
          <Link href="/">
            <div className={styles.articleCard}>
              <Image
                width={100}
                height={100}
                src={defaultArticle}
                alt="Article Image"
                className={styles.articleImage}
              />

              <div className={styles.articleGradient}></div>

              <div className={styles.articleContent}>
                <div className={styles.articleCategory}>
                  <i className="fas fa-umbrella"></i>
                  <p>Lifestyle</p>
                </div>

                <h1 className={styles.articleTitle}>Example Article Title</h1>

                <div className={styles.articleMeta}>
                  <p>By Charles Fix</p>
                  <p>.</p>
                  <p>3min Read</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/** CARD2 */}
        {/** CARD3 */}

        <div>
          <Link href="/">
            <div className={styles.articleCard}>
              <Image
                width={100}
                height={100}
                src={defaultArticle}
                alt="Article Image"
                className={styles.articleImage}
              />

              <div className={styles.articleGradient}></div>

              <div className={styles.articleContent}>
                <div className={styles.articleCategory}>
                  <i className="fas fa-umbrella"></i>
                  <p>Lifestyle</p>
                </div>

                <h1 className={styles.articleTitle}>Example Article Title</h1>

                <div className={styles.articleMeta}>
                  <p>By Charles Fix</p>
                  <p>.</p>
                  <p>3min Read</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/** CARD3 */}
        {/** CARD4 */}

        <div>
          <Link href="/">
            <div className={styles.articleCard}>
              <Image
                width={100}
                height={100}
                src={defaultArticle}
                alt="Article Image"
                className={styles.articleImage}
              />

              <div className={styles.articleGradient}></div>

              <div className={styles.articleContent}>
                <div className={styles.articleCategory}>
                  <i className="fas fa-umbrella"></i>
                  <p>Lifestyle</p>
                </div>

                <h1 className={styles.articleTitle}>Example Article Title</h1>

                <div className={styles.articleMeta}>
                  <p>By Charles Fix</p>
                  <p>.</p>
                  <p>3min Read</p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/** CARD4 */}
      </div>
      {/** GROUP CARDS */}
    </section>
  );
}
