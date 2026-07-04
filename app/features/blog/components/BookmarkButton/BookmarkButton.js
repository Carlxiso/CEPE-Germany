"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/_lib/auth/supabase";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { Bookmark1Solid } from "@lineiconshq/free-icons";
import styles from "./BookmarkButton.module.css";

export default function BookmarkButton({ articleId, hasBookmarked }) {
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(hasBookmarked);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    if (loading) return;
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      console.log("Precisas de iniciar sessão para guardar.");
      return;
    }

    const prevBookmarked = bookmarked;

    setBookmarked(!prevBookmarked);

    const { error } = prevBookmarked
      ? await supabase
          .from("bookmarks")
          .delete()
          .eq("article_id", articleId)
          .eq("profile_id", user.id)
      : await supabase
          .from("bookmarks")
          .insert({ article_id: articleId, profile_id: user.id });

    if (error) {
      setBookmarked(prevBookmarked);
      console.log("Erro no bookmark:", error);
    } else {
      router.refresh();
    }

    setLoading(false);
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={loading}
      aria-pressed={bookmarked}
      aria-label={bookmarked ? "Remover dos guardados" : "Guardar artigo"}
      className={`${styles.bookmarkButton} ${
        bookmarked ? styles.bookmarked : ""
      }`}
    >
      <Lineicons
        icon={Bookmark1Solid}
        size={24}
        color={bookmarked ? "#009fe3" : "black"}
        strokeWidth={1.5}
      />
    </button>
  );
}
