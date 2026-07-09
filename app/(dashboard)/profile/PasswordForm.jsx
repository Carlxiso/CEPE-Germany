"use client";

import { useState } from "react";
import { supabase } from "@/app/_lib/auth/supabase";
import styles from "./profile.module.css";

const MIN_LENGTH = 8;

export default function PasswordForm({ email }) {
  const [current, setCurrent] = useState("");
  const [next, setNext] = useState("");
  const [confirm, setConfirm] = useState("");
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();

    if (next.length < MIN_LENGTH) return setStatus("short");
    if (next !== confirm) return setStatus("mismatch");
    if (next === current) return setStatus("same");

    setStatus("loading");

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password: current,
    });

    if (signInError) {
      setStatus("wrong");
      return;
    }

    const { error } = await supabase.auth.updateUser({ password: next });

    if (error) {
      console.log("Erro ao mudar password:", error);
      setStatus("error");
      return;
    }

    setCurrent("");
    setNext("");
    setConfirm("");
    setStatus("success");
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="currentPassword">Password atual</label>
        <input
          id="currentPassword"
          type="password"
          value={current}
          onChange={(e) => setCurrent(e.target.value)}
          className={styles.input}
          autoComplete="current-password"
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="newPassword">Nova password</label>
        <input
          id="newPassword"
          type="password"
          value={next}
          onChange={(e) => setNext(e.target.value)}
          className={styles.input}
          autoComplete="new-password"
          required
        />
        <span className={styles.hint}>Mínimo {MIN_LENGTH} caracteres.</span>
      </div>

      <div className={styles.field}>
        <label htmlFor="confirmPassword">Confirmar nova password</label>
        <input
          id="confirmPassword"
          type="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          className={styles.input}
          autoComplete="new-password"
          required
        />
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === "loading"}
      >
        {status === "loading" ? "A alterar..." : "Alterar password"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className={styles.success}>Password alterada com sucesso!</p>
        )}
        {status === "short" && (
          <p className={styles.error}>
            A nova password tem de ter pelo menos {MIN_LENGTH} caracteres.
          </p>
        )}
        {status === "mismatch" && (
          <p className={styles.error}>As passwords não coincidem.</p>
        )}
        {status === "same" && (
          <p className={styles.error}>
            A nova password tem de ser diferente da atual.
          </p>
        )}
        {status === "wrong" && (
          <p className={styles.error}>A password atual está incorreta.</p>
        )}
        {status === "error" && (
          <p className={styles.error}>Algo correu mal. Tenta novamente.</p>
        )}
      </div>
    </form>
  );
}
