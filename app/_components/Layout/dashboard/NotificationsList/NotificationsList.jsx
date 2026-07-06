"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { supabase } from "@/app/_lib/auth/supabase";
import { formatDate } from "@/app/_lib/blog-format";
import styles from "./NotificationsList.module.css";

const FALLBACK_AVATAR = "/default/defaultAvatar.png";

const MESSAGE = {
  like: "gostou do artigo",
};

export default function NotificationsList({ notifications = [] }) {
  const [items, setItems] = useState(notifications);

  const unreadCount = items.filter((n) => !n.is_read).length;

  async function markAsRead(id) {
    setItems((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_read: true } : n)),
    );

    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("id", id);

    if (error) {
      setItems((prev) =>
        prev.map((n) => (n.id === id ? { ...n, is_read: false } : n)),
      );
      console.log("Erro ao marcar como lida:", error);
    }
  }

  async function markAllAsRead() {
    const previous = items;
    setItems((prev) => prev.map((n) => ({ ...n, is_read: true })));

    const { error } = await supabase
      .from("notifications")
      .update({ is_read: true })
      .eq("is_read", false);

    if (error) {
      setItems(previous);
      console.log("Erro ao marcar todas como lidas:", error);
    }
  }

  if (items.length === 0) {
    return (
      <div className={styles.empty}>
        <p>Ainda não há notificações.</p>
      </div>
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.toolbar}>
        <span className={styles.count}>
          {unreadCount > 0 ? `${unreadCount} por ler` : "Tudo em dia"}
        </span>
        {unreadCount > 0 && (
          <button
            type="button"
            className={styles.markAllBtn}
            onClick={markAllAsRead}
          >
            Marcar todas como lidas
          </button>
        )}
      </div>

      <ul className={styles.list}>
        {items.map((n) => (
          <li
            key={n.id}
            className={`${styles.item} ${!n.is_read ? styles.unread : ""}`}
          >
            <Image
              width={40}
              height={40}
              src={n.actor?.avatar_url || FALLBACK_AVATAR}
              alt=""
              className={styles.avatar}
            />
            <div className={styles.body}>
              <p className={styles.text}>
                <strong>{n.actor?.full_name ?? "Alguém"}</strong>{" "}
                {MESSAGE[n.type] ?? "interagiu com"}{" "}
                {n.article?.slug ? (
                  <Link
                    href={`/blog/${n.article.slug}`}
                    className={styles.link}
                  >
                    {n.article?.title ?? "um artigo"}
                  </Link>
                ) : (
                  <span>{n.article?.title ?? "um artigo"}</span>
                )}
              </p>
              <span className={styles.date}>{formatDate(n.created_at)}</span>
            </div>

            {!n.is_read && (
              <button
                type="button"
                className={styles.readBtn}
                onClick={() => markAsRead(n.id)}
                aria-label="Marcar como lida"
              >
                Marcar como lida
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
