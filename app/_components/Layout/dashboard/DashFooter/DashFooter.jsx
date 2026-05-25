import styles from "@/app/(dashboard)/dashboard.module.css";

function DashFooter() {
  return (
    <div className={styles.sidebarFooter}>
      <p className={styles.userName}>USERNAME</p>
      <form action="/auth/logout">
        <button type="submit" className={styles.logoutBtn}>
          Terminar sessão
        </button>
      </form>
    </div>
  );
}

export default DashFooter;
