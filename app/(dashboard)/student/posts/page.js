import styles from "../../dashboard.module.css";

export const metadata = { title: "Analytics | CEPE Admin" };

export default function PostPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Post Page</h1>
      <p className={styles.temporary}>
        POST PAGE: Gerenciamento de posts, criação, edição e exclusão de
        conteúdo.
      </p>
    </div>
  );
}
