"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/_components/Layout/Footer/Footer";
import Button from "@/app/_components/UI/Button/Button";
import styles from "../auth.module.css";
import Header from "@/app/_components/Layout/Header/Header";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Header />
      <div className={styles.loginSection}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Login</h1>

            <p className={styles.loginSubtitle}>
              Bem vindo de volta. Faça login para continuar.
            </p>
          </div>

          <form action="" className={styles.loginForm}>
            <input
              type="email"
              placeholder="Email"
              className={styles.input}
              required
              autoComplete="email"
            />
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.input}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                aria-label={
                  showPassword
                    ? "Ocultar palavra-passe"
                    : "Mostrar palavra-passe"
                }
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            <Link href="/auth/reset-password" className={styles.forgotLink}>
              Esqueceu a palavra-passe?
            </Link>
            <Button className={styles.loginButton}>Login</Button>
          </form>

          <p className={styles.registerText}>
            Ainda não têm conta?
            <Link className={styles.registerLink} href="/auth/signup">
              Criar uma Conta
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
