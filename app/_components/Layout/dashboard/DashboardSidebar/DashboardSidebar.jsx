import styles from "@/app/(dashboard)/dashboard.module.css";
import Logo from "../../Logo/Logo";
import DashNavLink from "../DashNavLink/DashNavLink";
import DashFooter from "../DashFooter/DashFooter";
export default function DashboardSidebar() {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <DashNavLink />
      <DashFooter footerLogoWhite={footerLogoWhite} />
    </aside>
  );
}
