import { redirect } from "next/navigation";
import { getMyProfile } from "@/app/_lib/profile";
import ProfileForm from "./ProfileForm";
import styles from "./profile.module.css";

export const metadata = { title: "O meu perfil | CEPE" };

export default async function ProfilePage() {
  const profile = await getMyProfile();

  // 2.ª linha de defesa (o middleware/layout já protegem, mas garantimos).
  if (!profile) redirect("/auth/login");

  return (
    <div className={styles.page}>
      <header className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>O meu perfil</h1>
        <p className={styles.pageSubtitle}>
          Atualiza a tua informação a qualquer momento.
        </p>
      </header>

      <ProfileForm profile={profile} />
    </div>
  );
}
