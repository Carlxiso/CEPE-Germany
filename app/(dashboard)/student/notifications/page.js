import styles from "../../dashboard.module.css";

export const metadata = { title: "Notifications | CEPE Admin" };

export default function NotificationsPage() {
  return (
    <div>
      <h1 className={styles.temporary}>Notifications</h1>
      <p className={styles.temporary}>
        Notifications Page: Gerenciamento de notificações, criação, edição e
        exclusão de conteúdo.
      </p>
    </div>
  );
}
