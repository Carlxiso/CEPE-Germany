import { getNotifications } from "@/app/_lib/notifications";
import NotificationsList from "@/app/_components/Layout/dashboard/NotificationsList/NotificationsList";
import styles from "./admin.module.css";

export const metadata = { title: "Painel | CEPE Admin" };

// As notificações mudam a cada like
// export const dynamic = "force-dynamic";

export default async function AdminDashboard() {
  const notifications = await getNotifications();

  return (
    <div className={styles.dashboardSection}>
      <header>
        <h1 className={styles.sectionTitle}>Notificações</h1>
        <p className={styles.sectionSubtitle}>Atividade recente nos artigos.</p>
      </header>

      <NotificationsList notifications={notifications} />
    </div>
  );
}
