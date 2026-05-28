import styles from "../../dashboard.module.css";
export const metadata = { title: "Aprovações | CEPE Admin" };

export default function AprovacoesPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Aprovações</h1>
      <p className={styles.temporary}>
        Pedidos pendentes de aprovação: inscrições, certificados e novas contas.
      </p>
    </div>
  );
}
