"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/_lib/auth/supabase";
import styles from "./CommentForm.module.css";

export default function CommentForm({ articleId }) {
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("idle");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    if (!comment.trim()) return;

    setStatus("loading");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setStatus("auth");
      return;
    }

    const { error } = await supabase.from("comments").insert({
      comment: comment.trim(),
      article_id: articleId,
      profile_id: user.id,
    });

    if (error) {
      console.log("Erro ao criar comentário:", error);
      setStatus("error");
      return;
    }

    setComment("");
    setStatus("success");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className={styles.commentForm}>
      <div className={styles.formGroup}>
        <label htmlFor="comment">O teu comentário</label>
        <textarea
          id="comment"
          className={styles.textarea}
          placeholder="Escreve o teu comentário..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === "loading"}
      >
        {status === "loading" ? "A enviar..." : "Comentar"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className={styles.success}>Comentário publicado!</p>
        )}
        {status === "auth" && (
          <p className={styles.error}>
            Precisas de iniciar sessão para comentar.
          </p>
        )}
        {status === "error" && (
          <p className={styles.error}>Algo correu mal. Tenta novamente.</p>
        )}
      </div>
    </form>
  );
}
