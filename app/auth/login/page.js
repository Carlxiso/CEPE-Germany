"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "@/app/_components/Layout/Footer/Footer";
import Button from "@/app/_components/UI/Button/Button";
import styles from "../auth.module.css";
import Header from "@/app/_components/Layout/Header/Header";
import { useRouter } from "next/navigation";
import supabase from "@/app/_lib/supabase";

const ROLE_HOME = {
  student: "/student",
  teacher: "/teacher",
  coordinator: "/coordinator",
  admin: "/admin",
};

const SUPABASE_ERROR_CODES = {
  invalid_credentials: "Email ou palavra-passe incorretos.",
  email_not_confirmed:
    "Por favor confirme o seu email antes de iniciar sessão.",
  too_many_requests: "Demasiadas tentativas. Aguarde alguns minutos.",
  user_not_found: "Email ou palavra-passe incorretos.",
};

const SUPABASE_ERROR_MESSAGES = {
  "Invalid login credentials": "Email ou palavra-passe incorretos.",
  "Email not confirmed":
    "Por favor confirme o seu email antes de iniciar sessão.",
};

function translateError(error) {
  if (error?.code && SUPABASE_ERROR_CODES[error.code]) {
    return SUPABASE_ERROR_CODES[error.code];
  }
  return (
    SUPABASE_ERROR_MESSAGES[error?.message] ??
    "Ocorreu um erro. Tente novamente."
  );
}

function validate({ email, password }) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Email inválido.";
  if (!password) return "A palavra-passe é obrigatória.";
  return null;
}

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
      const { data, error: loginError } =
        await supabase.auth.signInWithPassword({
          email: form.email,
          password: form.password,
        });

      if (loginError) {
        setError(translateError(loginError));
        return;
      }

      if (!data.session) {
        setError("Por favor confirme o seu email antes de iniciar sessão.");
        return;
      }

      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .single();

      if (profileError || !profile) {
        setError("Conta sem perfil associado. Contacte o suporte.");
        return;
      }

      router.push(ROLE_HOME[profile.role] ?? "/student");
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
            <h1 className={styles.loginTitle}>Iniciar Sessão</h1>
            <p className={styles.loginSubtitle}>
              Bem-vindo de volta. Faça login para continuar.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={styles.loginForm} noValidate>
            {error && (
              <p role="alert" className={styles.errorMessage}>
                {error}
              </p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />

            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Palavra-passe"
                className={styles.input}
                value={form.password}
                onChange={handleChange}
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
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            <Link href="/auth/reset-password" className={styles.forgotLink}>
              Esqueceu a palavra-passe?
            </Link>

            <Button className={styles.loginButton} disabled={loading}>
              {loading ? "A entrar…" : "Entrar"}
            </Button>
          </form>

          <p className={styles.registerText}>
            Ainda não tem conta?{" "}
            <Link className={styles.registerLink} href="/auth/signup">
              Criar uma conta
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
