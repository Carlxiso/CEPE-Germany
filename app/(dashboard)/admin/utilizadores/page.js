import styles from "../../dashboard.module.css";
export const metadata = { title: "Utilizadores | CEPE Admin" };

export default function UtilizadoresPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Utilizadores</h1>
      <p className={styles.temporary}>
        Gira alunos, professores e administradores. Crie contas de professores e
        coordenadores.
      </p>
    </div>
  );
}
