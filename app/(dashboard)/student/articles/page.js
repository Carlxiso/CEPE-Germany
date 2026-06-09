import styles from "../../dashboard.module.css";

export const metadata = { title: "Analytics | CEPE Admin" };

export default function ArticlesPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Articles</h1>
      <p className={styles.temporary}>
        Articles Page: Gerenciamento de artigos, criação, edição e exclusão de
        conteúdo.
      </p>
    </div>
  );
}
