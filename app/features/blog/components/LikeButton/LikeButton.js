"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/_lib/auth/supabase";
import { Lineicons } from "@lineiconshq/react-lineicons";
import { ThumbsUp3Bulk } from "@lineiconshq/free-icons";
import styles from "./LikeButton.module.css";

export default function LikeButton({ articleId, count, hasLiked }) {
  const router = useRouter();
  const [liked, setLiked] = useState(hasLiked);
  const [total, setTotal] = useState(count);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    if (loading) return;
    setLoading(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setLoading(false);
      console.log("Precisas de iniciar sessão para gostar.");
      return;
    }

    const prevLiked = liked;
    const prevTotal = total;

    setLiked(!prevLiked);
    setTotal(prevLiked ? prevTotal - 1 : prevTotal + 1);

    const { error } = prevLiked
      ? await supabase
          .from("likes")
          .delete()
          .eq("article_id", articleId)
          .eq("profile_id", user.id)
      : await supabase
          .from("likes")
          .insert({ article_id: articleId, profile_id: user.id });

    if (error) {
      setLiked(prevLiked);
      setTotal(prevTotal);
      console.log("Erro no like:", error);
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
      aria-pressed={liked}
      className={`${styles.likeButton} ${liked ? styles.liked : ""}`}
    >
      <Lineicons
        icon={ThumbsUp3Bulk}
        size={24}
        color={liked ? "#009fe3" : "black"}
        strokeWidth={1.5}
      />
      <span>{total}</span>
    </button>
  );
}
