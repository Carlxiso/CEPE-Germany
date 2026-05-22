import DashboardHeader from "../_components/Layout/dashboard/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../_components/Layout/dashboard/DashboardSidebar/DashboardSidebar";
import styles from "./dashboard.module.css";
export default function DashboardLayout({ children }) {
  return (
    <div className={styles.gridContainer}>
      <DashboardHeader />
      <DashboardSidebar />
      <main className={styles.main}>DASHBOARD</main>
    </div>
  );
}
