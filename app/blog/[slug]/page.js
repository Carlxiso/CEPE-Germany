import Image from "next/image";
import stampLettersCepe from "../../../public/stamp-letters-cepe.png";
import Section from "../../_components/Layout/Section/Section";
import {
  defaultArticle,
  defaultAvatar,
} from "../../features/blog/components/images";
import styles from "./page.module.css";
import { Lineicons } from "@lineiconshq/react-lineicons";
import {
  WatchBeat1Solid,
  Bookmark1Bulk,
  Bookmark1Outlined,
  Bookmark1Duotone,
  Bookmark1Solid,
  EyeBulk,
  EyeOutlined,
  EyeDuotone,
  EyeSolid,
  ThumbsUp3Bulk,
  ThumbsUp3Outlined,
  ThumbsUp3Duotone,
  ThumbsUp3Solid,
  Home2Outlined,
  CloudBolt1Bulk,
  CloudBolt1Outlined,
  CloudBolt1Duotone,
  CloudBolt1Solid,
} from "@lineiconshq/free-icons";
import BlogCardPopular from "../../features/blog/components/BlogCardPopular/BlogCardPopular";
import Footer from "../../_components/Layout/Footer/Footer";

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
export default function page() {
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

            <h1 className={styles.heroTitle}>Article Title</h1>
          </div>

          <div className={styles.articleActions}>
            <button className={styles.iconButton}>
              <Lineicons
                icon={ThumbsUp3Bulk}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
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
              <p> 0 views</p>
            </div>

            <div className={styles.infoBadge}>
              <Lineicons
                icon={WatchBeat1Solid}
                size={24}
                color="black"
                strokeWidth={1.5}
              />
              <p> Leitura de 10 minutos</p>
            </div>
          </div>

          <div className={styles.articleGrid}>
            <div>
              <div className={styles.articleContent}>
                <h1 className={styles.articleTitle}>Article Title</h1>
                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <h1 className={styles.articleTitle}>Article Title</h1>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <h1 className={styles.articleTitle}>Article Title</h1>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>

                <p className={styles.paragraph}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit culpa ea sapiente neque rem earum eius inventore aut
                  esse dolorum nemo autem omnis aliquid vero dolorem molestiae
                  sequi, facilis ab laborum, quidem ipsam debitis. Commodi odit
                  pariatur eum aspernatur. Maxime, modi, mollitia perferendis
                  obcaecati maiores recusandae necessitatibus aliquam velit sunt
                  commodi nulla eveniet repellat quas ad adipisci minima cum
                  dolorum! Nemo ipsum iusto reiciendis odit perspiciatis dolorem
                  perferendis obcaecati non cupiditate corrupti quas modi nulla,
                  facilis impedit beatae ut suscipit autem? Animi nulla illo
                  dolorum, natus delectus ratione provident culpa eius nesciunt!
                  Officia accusantium natus ea maiores iusto voluptates nemo?
                </p>
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

                  <div>
                    <h1 className={styles.authorName}>By Author Last Name</h1>

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
      <Footer />
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
