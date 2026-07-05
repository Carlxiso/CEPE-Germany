import Image from "next/image";
import { notFound } from "next/navigation";
import stampLettersCepe from "../../../../public/stamp-letters-cepe.jpg";
import Section from "../../../_components/Layout/Section/Section";
import styles from "./page.module.css";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { WatchBeat1Solid, EyeSolid } from "@lineiconshq/free-icons";
import BlogCardPopular from "../../../features/blog/components/BlogCardPopular/BlogCardPopular";
import CommentForm from "../../../features/blog/components/CommentForm/CommentForm";
import LikeButton from "../../../features/blog/components/LikeButton/LikeButton";
import BookmarkButton from "../../../features/blog/components/BookmarkButton/BookmarkButton";
import Footer from "../../../_components/Layout/Footer/Footer";
import {
  getArticleBySlug,
  getArticles,
  incrementArticleViews,
} from "@/app/_lib/articles";
import { getCommentsByArticle } from "@/app/_lib/comments";
import { getLikeInfo } from "@/app/_lib/likes";
import { getBookmarkInfo } from "@/app/_lib/bookmarks";
import { formatDate, readTimeLabel } from "@/app/_lib/blog-format";

const FALLBACK_AVATAR = "/default/defaultAvatar.png";

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);
  if (!article) notFound();

  // Conta esta visita e recebe o total já atualizado.
  const views = await incrementArticleViews(article.id);

  const comments = await getCommentsByArticle(article.id);
  const likeInfo = await getLikeInfo(article.id);
  const bookmarkInfo = await getBookmarkInfo(article.id);

  const articles = await getArticles();
  const populares = [...articles]
    .sort((a, b) => (b.views ?? 0) - (a.views ?? 0))
    .slice(0, 4);

  return (
    <>
      <Section>
        <div className={styles.articleSection}>
          <div className={styles.heroWrapper}>
            <Image
              src={stampLettersCepe}
              alt="Imagem do artigo"
              className={styles.heroImage}
            />
            <h1 className={styles.heroTitle}>{article.title}</h1>
          </div>

          <div className={styles.articleActions}>
            <LikeButton
              articleId={article.id}
              count={likeInfo.count}
              hasLiked={likeInfo.hasLiked}
            />

            <BookmarkButton
              articleId={article.id}
              hasBookmarked={bookmarkInfo.hasBookmarked}
            />

            <div className={styles.infoBadge}>
              <Lineicons
                icon={EyeSolid}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
              <p> {views ?? article.views ?? 0} views</p>
            </div>

            <div className={styles.infoBadge}>
              <Lineicons
                icon={WatchBeat1Solid}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
              <p> {readTimeLabel(article.read_time)}</p>
            </div>
          </div>

          <div className={styles.articleGrid}>
            <div>
              <div className={styles.articleContent}>
                <h1 className={styles.articleTitle}>
                  {article.category?.title}
                </h1>
                {article.content
                  ?.split(/\n+/)
                  .filter((par) => par.trim())
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
                    src={article.author?.avatar_url || FALLBACK_AVATAR}
                    className={styles.authorAvatar}
                    alt="Avatar do autor"
                  />
                  <div>
                    <h1 className={styles.authorName}>
                      {article.author?.full_name ?? "Autor"}
                    </h1>
                    <p>Equipa CEPE</p>
                  </div>
                </div>

                <div>
                  <h1 className={styles.commentTitle}>Deixa um comentário</h1>
                  <CommentForm articleId={article.id} />
                </div>

                <div className={styles.commentsSection}>
                  <h1 className={styles.commentTitle}>
                    {comments.length} Comentários
                  </h1>

                  <div className={styles.commentsList}>
                    {comments.map((comment) => (
                      <div className={styles.commentCard} key={comment.id}>
                        <div className={styles.commentHeader}>
                          <Image
                            width={100}
                            height={100}
                            src={comment.profile?.avatar_url || FALLBACK_AVATAR}
                            className={styles.commentAvatar}
                            alt="Avatar"
                          />
                          <div>
                            <h1 className={styles.commentAuthor}>
                              {comment.profile?.full_name ?? "Utilizador"}
                            </h1>
                            <p className={styles.commentDate}>
                              {formatDate(comment.date_created)}
                            </p>
                          </div>
                        </div>

                        <p className={styles.commentContent}>
                          {comment.comment}
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
        <BlogCardPopular articles={populares} />
      </Section>
      <Footer footerLogoWhite={true} />
    </>
  );
}
