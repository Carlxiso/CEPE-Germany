import styles from "@/app/(dashboard)/dashboard.module.css";

function DashFooter({ user }) {
  return (
    <div className={styles.sidebarFooter}>
      <p className={styles.userName}>{user?.name ?? "Utilizador"}</p>
      <form action="/auth/logout" method="post">
        <button type="submit" className={styles.logoutBtn}>
          Terminar sessão
        </button>
      </form>
    </div>
  );
}

export default DashFooter;
