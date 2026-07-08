import Link from "next/link";
import styles from "@/app/(dashboard)/dashboard.module.css";

function DashFooter() {
  return (
    <div className={styles.sidebarFooter}>
      <Link href="/profile" className={styles.settingsLink}>
        Definições
      </Link>
      <form action="/auth/logout" method="post">
        <button type="submit" className={styles.logoutBtn}>
          Terminar sessão
        </button>
      </form>
    </div>
  );
}

export default DashFooter;
