import styles from "../../dashboard.module.css";

export const metadata = { title: "Comments | CEPE Admin" };

export default function CommentsPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Comments</h1>
      <p className={styles.temporary}>
        Comments Page: Gerenciamento de comentários, criação, edição e exclusão
        de conteúdo. plataforma.
      </p>
    </div>
  );
}
