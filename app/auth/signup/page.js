"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "../auth.module.css";
import Footer from "@/app/_components/Layout/Footer/Footer";
import Button from "@/app/_components/UI/Button/Button";
import Header from "@/app/_components/Layout/Header/Header";
import { useRouter } from "next/navigation";
import supabase from "@/app/_lib/auth/supabase";

// Mapeamento por error_code (campo `code` do AuthError — mais fiável que a mensagem)
const SUPABASE_ERROR_CODES = {
  email_address_invalid:
    "O email introduzido não é válido ou o domínio não existe.",
  user_already_exists: "Este email já tem uma conta associada.",
  weak_password:
    "A palavra-passe é demasiado fraca. Use pelo menos 8 caracteres.",
  over_email_send_rate_limit: "Demasiadas tentativas. Aguarde alguns minutos.",
  signup_disabled: "O registo está temporariamente desativado.",
};

// Fallback por mensagem (para versões antigas do SDK que não expõem `code`)
const SUPABASE_ERROR_MESSAGES = {
  "User already registered": "Este email já tem uma conta associada.",
  "Password should be at least 6 characters":
    "A palavra-passe deve ter pelo menos 8 caracteres.",
  "Unable to validate email address: invalid format":
    "Formato de email inválido.",
  "Email rate limit exceeded": "Demasiadas tentativas. Aguarde alguns minutos.",
  "Signup is disabled": "O registo está temporariamente desativado.",
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

// validação extraída numa função pura — fácil de testar e manter
function validate({ name, email, password, confirmPassword }) {
  if (!name.trim()) return "O nome é obrigatório.";

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Email inválido.";

  if (password.length < 8)
    return "A palavra-passe deve ter pelo menos 8 caracteres.";

  if (password !== confirmPassword) return "As palavras-passe não coincidem.";

  return null;
}

export default function SignUp() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: form.email,
        password: form.password,
        options: {
          data: { full_name: form.name.trim() },
        },
      });

      if (signUpError) {
        setError(translateError(signUpError));
        return;
      }

      if (!data.session) {
        setSuccess(true);
        return;
      }

      router.push("/student");
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
        <div className={styles.registerSection}>
          <div className={styles.registerCard}>
            <div className={styles.registerHeader}>
              <h1 className={styles.registerTitle}>Verifique o seu email</h1>
              <p className={styles.registerSubtitle}>
                Enviámos um link de confirmação para{" "}
                <strong>{form.email}</strong>. Aceda ao seu email para ativar a
                conta.
              </p>
            </div>
            <Link href="/auth/login" className={styles.loginLink}>
              Voltar ao login
            </Link>
          </div>
        </div>
        <Footer footerLogoWhite={true} />
      </>
    );
  }

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

          <form
            onSubmit={handleSubmit}
            className={styles.registerForm}
            noValidate
          >
            {error && (
              <p role="alert" className={styles.errorMessage}>
                {error}
              </p>
            )}

            <input
              type="text"
              placeholder="Nome completo"
              name="name"
              className={styles.input}
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
            />

            <input
              type="email"
              placeholder="Email"
              name="email"
              className={styles.input}
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
            />

            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Palavra-passe (mín. 8 caracteres)"
                className={styles.input}
                name="password"
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
                placeholder="Confirmar palavra-passe"
                className={styles.input}
                name="confirmPassword"
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

            <Button
              type="submit"
              className={styles.registerButton}
              disabled={loading}
            >
              {loading ? "A criar conta…" : "Criar conta"}
            </Button>
          </form>

          <p className={styles.loginText}>
            Já tem conta?{" "}
            <Link className={styles.loginLink} href="/auth/login">
              Iniciar sessão
            </Link>
          </p>
        </div>
      </div>
      <Footer footerLogoWhite={true} />
    </>
  );
}
