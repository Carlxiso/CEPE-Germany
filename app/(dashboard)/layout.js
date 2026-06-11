import { redirect } from "next/navigation";
import DashboardHeader from "../_components/Layout/dashboard/DashboardHeader/DashboardHeader";
import DashboardSidebar from "../_components/Layout/dashboard/DashboardSidebar/DashboardSidebar";
import { getCurrentUser } from "../_lib/auth/auth";
import styles from "./dashboard.module.css";

export default async function DashboardLayout({ children }) {
  const current = await getCurrentUser();

  if (!current) redirect("/auth/login");

  const user = { name: current.name, role: current.role };

  return (
    <div className={styles.gridContainer}>
      <DashboardSidebar role={current.role} user={user} />
      <DashboardHeader user={user} />
      <main className={styles.main}>{children}</main>
    </div>
  );
}
