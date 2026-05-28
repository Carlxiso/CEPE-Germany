import styles from "../../dashboard.module.css";

export const metadata = { title: "Analytics | CEPE Admin" };

export default function AnalyticsPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Analytics</h1>
      <p className={styles.temporary}>
        Estatísticas de inscrições, progresso dos alunos e actividade da
        plataforma.
      </p>
    </div>
  );
}
