import styles from "../../dashboard.module.css";
export const metadata = { title: "Artigos | CEPE Admin" };

export default function ArtigosPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Artigos</h1>
      <p className={styles.temporary}>
        Gira os artigos do blog. Publique, edite ou archive conteúdos.
      </p>
    </div>
  );
}
