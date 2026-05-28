import styles from "../dashboard.module.css";
export const metadata = { title: "Documentos | CEPE" };

export default function DocumentosPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Documentos</h1>
      <p className={styles.temporary}>
        Faça upload e gira os documentos dos seus cursos.
      </p>
    </div>
  );
}
