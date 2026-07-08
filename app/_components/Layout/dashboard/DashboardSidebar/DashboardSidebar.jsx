import styles from "@/app/(dashboard)/dashboard.module.css";
import Logo from "../../Logo/Logo";
import DashNav from "../DashNav/DashNav";
import DashFooter from "../DashFooter/DashFooter";
import { DASHBOARD_NAV } from "@/app/_lib/dashboard-nav";

export default function DashboardSidebar({ role }) {
  const items = DASHBOARD_NAV[role] ?? [];

  return (
    <aside className={styles.sidebar}>
      <Logo />
      <DashNav items={items} />
      <DashFooter />
    </aside>
  );
}
