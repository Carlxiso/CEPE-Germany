import styles from "@/app/(dashboard)/dashboard.module.css";

function DashFooter() {
  return (
    <div className={styles.sidebarFooter}>
      <p className={styles.userName}>USERNAME</p>
      {/* method="post" → bate certo com a rota app/auth/logout/route.js (POST) */}
      <form action="/auth/logout" method="post">
        <button type="submit" className={styles.logoutBtn}>
          Terminar sessão
        </button>
      </form>
    </div>
  );
}

export default DashFooter;
