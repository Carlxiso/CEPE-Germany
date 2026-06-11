import styles from "@/app/(dashboard)/dashboard.module.css";

const ROLE_LABEL = {
  admin: "Administrador",
  student: "Aluno",
  teacher: "Professor",
  coordinator: "Coordenador",
};

export default function DashboardHeader({ user }) {
  return (
    <header className={styles.header}>
      <p className={styles.headerGreeting}>
        Olá, <strong>{user?.name ?? "Utilizador"}</strong>
        {user?.role && (
          <span className={styles.headerRole}>
            {ROLE_LABEL[user.role] ?? user.role}
          </span>
        )}
      </p>
    </header>
  );
}
