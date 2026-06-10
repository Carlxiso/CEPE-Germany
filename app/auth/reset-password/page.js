"use client";

import Link from "next/link";
import Footer from "@/app/_components/Layout/Footer/Footer";
import Button from "@/app/_components/UI/Button/Button";
import styles from "@/app/auth/auth.module.css";
import Header from "@/app/_components/Layout/Header/Header";
import { useState } from "react";
import supabase from "@/app/_lib/auth/supabase";

const REDIRECT_URL =
  typeof window !== "undefined"
    ? `${window.location.origin}/auth/update-password`
    : "https://cepe-germany.vercel.app/auth/update-password";

function validate(email) {
  if (!email.trim()) return "O email é obrigatório.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Email inválido.";
  return null;
}

export default function ResetPasswordPage() {
  const [form, setForm] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    const validationError = validate(form.email);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    try {
      const { error: resetError } = await supabase.auth.resetPasswordForEmail(
        form.email,
        { redirectTo: REDIRECT_URL },
      );

      if (resetError) {
        setError("Não foi possível enviar o email. Tente novamente.");
        return;
      }

      setSent(true);
    } catch {
      setError("Erro inesperado. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      <div className={styles.loginSection}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <h1 className={styles.loginTitle}>Recuperar Palavra-passe</h1>

            {!sent && (
              <p className={styles.loginSubtitle}>
                Introduza o seu email e enviaremos um link de recuperação.
              </p>
            )}
          </div>

          {sent ? (
            <div className={styles.resetPassHeader}>
              <p className={styles.resetPassSubtitle}>
                Se o email <strong>{form.email}</strong> existir na nossa base
                de dados, receberá um link de recuperação em breve.
              </p>
              <p className={styles.resetPassSpam}>
                Verifique também a pasta de spam.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className={styles.loginForm}
              noValidate
            >
              {error && (
                <p role="alert" className={styles.errorMessage}>
                  {error}
                </p>
              )}

              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                name="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
              />
              <Button className={styles.loginButton} disabled={loading}>
                {loading ? "A enviar…" : "Enviar link de recuperação"}
              </Button>
            </form>
          )}

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
