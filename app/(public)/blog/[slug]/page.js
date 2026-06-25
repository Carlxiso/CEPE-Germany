import Image from "next/image";
import { getArticleBySlug } from "@/app/_lib/articles";
import { notFound } from "next/navigation";
import { readTimeLabel } from "@/app/_lib/blog-format";
import stampLettersCepe from "../../../../public/stamp-letters-cepe.jpg";
import Section from "../../../_components/Layout/Section/Section";
import { defaultAvatar } from "../../../features/blog/components/images";
import styles from "./page.module.css";
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  WatchBeat1Solid,
  Bookmark1Solid,
  EyeSolid,
  ThumbsUp3Bulk,
} from "@lineiconshq/free-icons";
import BlogCardPopular from "../../../features/blog/components/BlogCardPopular/BlogCardPopular";
import Footer from "../../../_components/Layout/Footer/Footer";

const comments = [
  {
    profile: { fullName: "John Doe", image: defaultAvatar },
    article_id: 1,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugiat.",
    date: "2026-08-23",
  },
  {
    profile: { fullName: "Other User", image: defaultAvatar },
    article_id: 2,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugiat.",
    date: "2025-04-30",
  },
  {
    profile: { fullName: "User", image: defaultAvatar },
    article_id: 3,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugiat.",
    date: "2026-07-05",
  },
  {
    profile: { fullName: "User Full", image: defaultAvatar },
    article_id: 4,
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, fugiat.",
    date: "2026-04-03",
  },
];

const FALLBACK_IMG = "/default/defaultArticle.png";
const FALLBACK_AVATAR = "/default/defaultAvatar.png";

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();
  return (
    <>
      <Section>
        <div className={styles.articleSection}>
          <div className={styles.heroWrapper}>
            <Image
              // width={100}
              // height={100}
              src={stampLettersCepe}
              alt="Stamp Letters Cepe Image"
              className={styles.heroImage}
            />

            {/* <div className={styles.heroOverlay} /> */}

            <h1 className={styles.heroTitle}>{article.title}</h1>
          </div>

          <div className={styles.articleActions}>
            <button className={styles.iconButton}>
              <Lineicons
                icon={ThumbsUp3Bulk}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
              {/* {article.thumbnail || FALLBACK_IMG} */}
            </button>

            <button className={styles.iconButton}>
              <Lineicons
                icon={Bookmark1Solid}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
            </button>

            <div className={styles.infoBadge}>
              <Lineicons
                icon={EyeSolid}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
              <p> {article.views} views</p>
            </div>

            <div className={styles.infoBadge}>
              <Lineicons
                icon={WatchBeat1Solid}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
              <p> Leitura de {readTimeLabel(article.read_time)}minutos</p>
            </div>
          </div>

          <div className={styles.articleGrid}>
            <div>
              <div className={styles.articleContent}>
                <h1 className={styles.articleTitle}>
                  {article.category?.title}
                </h1>
                {article.content
                  ?.split(/\n+/) // parte onde há quebras de linha
                  .filter((par) => par.trim()) // descarta linhas vazias
                  .map((par, i) => (
                    <p key={i} className={styles.paragraph}>
                      {par}
                    </p>
                  ))}
              </div>

              <div className={styles.articleMeta}>
                <div className={styles.authorCard}>
                  <Image
                    width={100}
                    height={100}
                    src={defaultAvatar}
                    className={styles.authorAvatar}
                    alt="Avatar"
                  />
                  {/* {article.author?.avatar_url || FALLBACK_AVATAR} */}
                  <div>
                    <h1 className={styles.authorName}>
                      {article.author?.full_name}
                    </h1>

                    <p>Writer at Cepe</p>
                  </div>
                </div>

                <div>
                  <h1 className={styles.commentTitle}>
                    Leave a Comment Section
                  </h1>

                  <div className={styles.commentForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="comment">Full Name</label>

                      <input
                        className={styles.input}
                        type="text"
                        id="comment"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="comment">Your Comment</label>

                      <textarea
                        id="comment"
                        placeholder="Your Comment"
                        className={styles.textarea}
                      />
                    </div>

                    <div>
                      <button className={styles.submitButton}>
                        Submit Content
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className={styles.commentsSection}>
                  <h1 className={styles.commentTitle}>
                    {comments.length} Comments
                  </h1>

                  <div className={styles.commentsList}>
                    {comments?.map((comment) => (
                      <div
                        className={styles.commentCard}
                        key={comment?.article_id}
                      >
                        <div className={styles.commentHeader}>
                          <Image
                            width={100}
                            height={100}
                            src={comment?.profile?.image}
                            className={styles.commentAvatar}
                            alt="avatar"
                          />

                          <div>
                            <h1 className={styles.commentAuthor}>
                              {comment?.profile?.fullName}
                            </h1>

                            <p className={styles.commentDate}>
                              {formatDate(comment?.date)}
                            </p>
                          </div>
                        </div>

                        <p className={styles.commentContent}>
                          {comment?.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section withContainer={false}>
        <BlogCardPopular />
      </Section>
      <Footer footerLogoWhite={true} />
    </>
  );
}

function formatDate(date) {
  if (!date) return "";
  const parsed = new Date(date);
  return parsed.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
