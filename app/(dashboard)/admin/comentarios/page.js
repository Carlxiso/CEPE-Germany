import styles from "../../dashboard.module.css";
export const metadata = { title: "Comentários | CEPE Admin" };

export default function ComentariosPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Comentários</h1>
      <p className={styles.temporary}>
        Modere os comentários dos alunos nos artigos. Aprove ou rejeite
        conteúdos.
      </p>
    </div>
  );
}
