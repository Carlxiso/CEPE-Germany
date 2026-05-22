import Link from "next/link";
import Footer from "@/app/_components/Layout/Footer/Footer";
import Button from "@/app/_components/UI/Button/Button";
import styles from "@/app/auth/auth.module.css";
import Header from "@/app/_components/Layout/Header/Header";
export default function ResetPassword() {
  return (
    <>
      <Header />
      <div className={styles.loginSection}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Recuperar Palavra-passe</h1>
            <p className={styles.loginSubtitle}>
              Introduza o seu email e enviaremos um link de recuperação.
            </p>
          </div>

          <div>
            <p>
              Se o email existir na nossa base de dados, receberá um link de
              recuperação em breve.
            </p>
          </div>

          <form className={styles.loginForm} noValidate>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
              autoComplete="email"
            />
            <Button className={styles.loginButton}>Loading</Button>
          </form>

          <p className={styles.registerText}>
            <Link className={styles.registerLink} href="/auth/login">
              Voltar ao login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
