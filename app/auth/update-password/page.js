"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Footer from "@/app/_components/Layout/Footer/Footer";
import Button from "@/app/_components/UI/Button/Button";
import styles from "@/app/auth/auth.module.css";
import Header from "@/app/_components/Layout/Header/Header";
import supabase from "@/app/_lib/auth/supabase";

function validate({ password, confirmPassword }) {
  if (password.length < 8)
    return "A palavra-passe deve ter pelo menos 8 caracteres.";
  if (password !== confirmPassword) return "As palavras-passe não coincidem.";
  return null;
}

export default function UpdatePasswordPage() {
  const router = useRouter();
  const [form, setForm] = useState({ password: "", confirmPassword: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [sessionReady, setSessionReady] = useState(false);

  // O Supabase redireciona um token no URL (formato hash: #access_token=...).
  // O SDK detecta-o automaticamente e cria uma sessão
  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "PASSWORD_RECOVERY" && session) {
          setSessionReady(true);
        }
      },
    );
    return () => listener.subscription.unsubscribe();
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const { error: updateError } = await supabase.auth.updateUser({
        password: form.password,
      });

      if (updateError) {
        setError(
          "Não foi possível actualizar a palavra-passe. Tente novamente.",
        );
        return;
      }

      setSuccess(true);

      setTimeout(() => router.push("/auth/login"), 3000);
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <>
        <Header />
        <div className={styles.loginSection}>
          <div className={styles.loginCard}>
            <div className={styles.resetPassHeader}>
              <h1 className={styles.loginTitle}>Palavra-passe actualizada</h1>
              <p className={styles.resetPassSubtitle}>
                A sua palavra-passe foi alterada com sucesso.
              </p>
              <p className={styles.resetPassSubtitle}>
                Será redireccionado para o login em instantes…
              </p>
            </div>
            <p className={styles.registerText}>
              <Link className={styles.registerLink} href="/auth/login">
                Ir para o login agora
              </Link>
            </p>
          </div>
        </div>
        <Footer footerLogoWhite={true} />
      </>
    );
  }

  if (!sessionReady) {
    return (
      <>
        <Header />
        <div className={styles.loginSection}>
          <div className={styles.loginCard}>
            <div className={styles.resetPassHeader}>
              <h1 className={styles.loginTitle}>A verificar…</h1>
              <p className={styles.resetPassSubtitle}>
                A validar o link de recuperação. Aguarde um momento.
              </p>
            </div>
            <p className={styles.registerText}>
              Link expirado ou inválido?{" "}
              <Link className={styles.registerLink} href="/auth/reset-password">
                Pedir novo link
              </Link>
            </p>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <div className={styles.loginSection}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Nova Palavra-passe</h1>
            <p className={styles.loginSubtitle}>
              Introduza a sua nova palavra-passe.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.loginForm} noValidate>
            {error && (
              <p role="alert" className={styles.errorMessage}>
                {error}
              </p>
            )}

            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Nova palavra-passe (mín. 8 caracteres)"
                className={styles.input}
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                aria-label={
                  showPassword
                    ? "Ocultar palavra-passe"
                    : "Mostrar palavra-passe"
                }
                onClick={() => setShowPassword((v) => !v)}
                className={styles.togglePassword}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirmar nova palavra-passe"
                className={styles.input}
                value={form.confirmPassword}
                onChange={handleChange}
                autoComplete="new-password"
              />
              <button
                type="button"
                aria-label={
                  showConfirmPassword
                    ? "Ocultar palavra-passe"
                    : "Mostrar palavra-passe"
                }
                onClick={() => setShowConfirmPassword((v) => !v)}
                className={styles.togglePassword}
              >
                {showConfirmPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <Button className={styles.loginButton} disabled={loading}>
              {loading ? "A actualizar…" : "Actualizar palavra-passe"}
            </Button>
          </form>

          <p className={styles.registerText}>
            <Link className={styles.registerLink} href="/auth/login">
              Voltar ao login
            </Link>
          </p>
        </div>
      </div>
      <Footer footerLogoWhite={true} />
    </>
  );
}
