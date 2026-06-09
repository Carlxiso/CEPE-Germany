import styles from "../../dashboard.module.css";

export const metadata = { title: "Diagnostic Test | CEPE Admin" };

export default function DiagnosticTestPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Diagnostic Test</h1>
      <p className={styles.temporary}>
        Diagnostic Test Page: Gerenciamento de testes diagnósticos, criação,
        edição e exclusão de conteúdo.
      </p>
    </div>
  );
}
