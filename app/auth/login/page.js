"use client";
import Link from "next/link";
import Footer from "../../_components/Layout/Footer/Footer";
import Button from "../../_components/UI/Button/Button";
import styles from "../auth.module.css";
import { useState } from "react";
export default function page() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
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
              placeholder="Email Address"
              className={styles.input}
            />
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className={styles.input}
              />
              <button
                type="button"
                className={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            <Button className={styles.loginButton}>Login</Button>
          </form>

          <p className={styles.registerText}>
            Don&apos;t you have an account yet?
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
