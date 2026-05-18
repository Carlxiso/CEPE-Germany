"use client";
import Link from "next/link";
import styles from "../auth.module.css";
import { useState } from "react";
import Button from "../../_components/UI/Button/Button";
import Footer from "../../_components/Layout/Footer/Footer";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <>
      <div className={styles.registerSection}>
        <div className={styles.registerCard}>
          <div className={styles.registerHeader}>
            <h1 className={styles.registerTitle}>Criar Conta</h1>

            <p className={styles.registerSubtitle}>
              Bem vindo. Registe-se para continuar.
            </p>
          </div>

          <form action="" className={styles.registerForm}>
            <input
              type="text"
              placeholder="Full Name"
              className={styles.input}
            />

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
                onClick={() => setShowPassword(!showPassword)}
                className={styles.togglePassword}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <div className={styles.passwordWrapper}>
              <input
                type="password"
                placeholder="Confirm Password"
                className={styles.input}
              />

              <button
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                type="button"
                className={styles.togglePassword}
              >
                {showConfirmPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            <Button className={styles.registerButton}>Criar uma conta</Button>
          </form>

          <p className={styles.loginText}>
            Já é titular de uma conta?
            <Link className={styles.loginLink} href="/auth/Login">
              Login
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
