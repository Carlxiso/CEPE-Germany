import CreateNewArticle from "../../../../features/blog/components/CreateNewArticle/CreateNewArticle";
import styles from "../CreateArt.module.css";

export default async function CreateArticlePage({ params }) {
  const { slug } = await params;
  if (slug === "criar") {
    return (
      <>
        <h1 className={styles.temporary}>Criar um novo Artigo</h1>
        <CreateNewArticle />;
      </>
    );
  }
  return null;
}
