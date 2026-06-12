import styles from "../../dashboard.module.css";
import Button from "@/app/_components/UI/Button/Button";
export const metadata = { title: "Artigos | CEPE Admin" };

export default function BlogPage() {
  return (
    <div>
      <h1 className={styles.temporary}>BLOG PAGE</h1>
      <p className={styles.temporary}>
        Gira os artigos do blog. Publique, edite ou archive conteúdos.
      </p>
      <Button variant="primary" href="/admin/blog/criar">
        Criar novo artigo
      </Button>
    </div>
  );
}
