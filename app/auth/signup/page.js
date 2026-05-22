"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../auth.module.css";
import Footer from "@/app/_components/Layout/Footer/Footer";
import Button from "@/app/_components/UI/Button/Button";
import Header from "@/app/_components/Layout/Header/Header";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Header />
      <div className={styles.registerSection}>
        <div className={styles.registerCard}>
          <div className={styles.registerHeader}>
            <h1 className={styles.registerTitle}>Criar Conta</h1>

            <p className={styles.registerSubtitle}>
              Registe-se para aceder à plataforma.
            </p>
          </div>

          <form action="" className={styles.registerForm}>
            <input
              type="text"
              placeholder="Nome completo"
              className={styles.input}
              required
              autoComplete="name"
            />

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
                placeholder="Palavra-passe (mín. 8 caracteres)"
                className={styles.input}
                required
                autoComplete="new-password"
              />

              <button
                type="button"
                aria-label={
                  showPassword
                    ? "Ocultar palavra-passe"
                    : "Mostrar palavra-passe"
                }
                onClick={() => setShowPassword(!showPassword)}
                className={styles.togglePassword}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirmar palavra-passe"
                className={styles.input}
                required
                autoComplete="new-password"
              />

              <button
                type="button"
                aria-label={
                  showConfirmPassword
                    ? "Ocultar palavra-passe"
                    : "Mostrar palavra-passe"
                }
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className={styles.togglePassword}
              >
                {showConfirmPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>
            <Button className={styles.registerButton} disabled={loading}>
              {loading ? "A criar conta…" : "Criar conta"}
            </Button>
          </form>

          <p className={styles.loginText}>
            Já tem conta?
            <Link className={styles.loginLink} href="/auth/login">
              Iniciar sessão
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
