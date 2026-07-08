"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/_lib/auth/supabase";
import styles from "./profile.module.css";

const FALLBACK_AVATAR = "/default/defaultAvatar.png";
const BUCKET = "cepe-blog-bucket";

// Só formatos raster — SVG é excluído por segurança (pode conter scripts).
const ALLOWED_TYPES = ["image/png", "image/jpeg", "image/webp"];

export default function ProfileForm({ profile }) {
  const router = useRouter();

  const [fullName, setFullName] = useState(profile.full_name);
  const [bio, setBio] = useState(profile.bio);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatar_url);
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [status, setStatus] = useState("idle");

  function handleFileChange(e) {
    const selected = e.target.files?.[0];
    if (!selected) return;

    if (!ALLOWED_TYPES.includes(selected.type)) {
      setStatus("format");
      return;
    }

    setStatus("idle");
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    let newAvatarUrl = avatarUrl;

    if (file) {
      const ext = file.name.split(".").pop();
      const filePath = `${profile.id}/avatar-${Date.now()}.${ext}`;

      const { error: uploadError } = await supabase.storage
        .from(BUCKET)
        .upload(filePath, file);

      if (uploadError) {
        console.log("Erro no upload do avatar:", uploadError);
        setStatus("error");
        return;
      }

      const { data } = supabase.storage.from(BUCKET).getPublicUrl(filePath);
      newAvatarUrl = data.publicUrl;
    }

    const { error } = await supabase
      .from("profiles")
      .update({
        full_name: fullName.trim(),
        bio: bio.trim(),
        avatar_url: newAvatarUrl,
      })
      .eq("id", profile.id);

    if (error) {
      console.log("Erro ao atualizar perfil:", error);
      setStatus("error");
      return;
    }

    setAvatarUrl(newAvatarUrl);
    setFile(null);
    setPreview("");
    setStatus("success");
    router.refresh();
  }

  const shownAvatar = preview || avatarUrl || FALLBACK_AVATAR;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.avatarRow}>
        <Image
          width={80}
          height={80}
          src={shownAvatar}
          alt="O teu avatar"
          className={styles.avatar}
        />
        <label htmlFor="avatar" className={styles.uploadButton}>
          Mudar foto
          <input
            id="avatar"
            type="file"
            accept="image/png, image/jpeg, image/webp"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
        </label>
      </div>

      <div className={styles.field}>
        <label htmlFor="fullName">Nome</label>
        <input
          id="fullName"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className={styles.input}
          required
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="bio">Bio</label>
        <textarea
          id="bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className={styles.textarea}
          rows={4}
          maxLength={280}
          placeholder="Conta um pouco sobre ti..."
        />
        <span className={styles.hint}>{bio.length}/280</span>
      </div>

      <div className={styles.field}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={profile.email}
          className={styles.input}
          disabled
          readOnly
        />
        <span className={styles.hint}>O email não pode ser alterado aqui.</span>
      </div>

      <button
        type="submit"
        className={styles.submitButton}
        disabled={status === "loading"}
      >
        {status === "loading" ? "A guardar..." : "Guardar alterações"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className={styles.success}>Perfil atualizado!</p>
        )}
        {status === "error" && (
          <p className={styles.error}>Algo correu mal. Tenta novamente.</p>
        )}
        {status === "format" && (
          <p className={styles.error}>
            Formato não suportado. Usa PNG, JPG ou WEBP.
          </p>
        )}
      </div>
    </form>
  );
}
