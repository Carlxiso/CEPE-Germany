"use client";

import Image from "next/image";
import styles from "./CreateNewArticle.module.css";
import { useEffect, useState } from "react";
import { supabase } from "@/app/_lib/auth/supabase";
import { useSearchParams } from "next/navigation";
// type BlogPost = {
//   title: string

//   category: Category

//   audience: Audience[]

//   tags: string[]

//   author: string

//   publishedAt: Date

//   featured: boolean
// }

export default function CreateNewArticle() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [loadingArticle, setLoadingArticle] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [user, setUser] = useState(null);
  const searchParams = useSearchParams();
  const articleId = searchParams.get("id");

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    let isCancelled = false;

    const loadCategories = async () => {
      const { data, error } = await supabase.from("categories").select("*");

      if (isCancelled) return;

      if (error) {
        console.error(
          "Error em database. Não foi possivel buscar categories.",
          error,
        );
        return;
      }

      setCategories(data ?? []);
    };

    loadCategories();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!articleId || !user) return;

      setLoadingArticle(true);

      const { data, error } = await supabase
        .from("articles")
        .select("*")
        .eq("id", articleId)
        .eq("profile_id", user.id)
        .single();

      if (error) {
        console.log("Failed to Load Article", error);
      } else {
        setTitle(data?.title);
        setContent(data?.content);
        setThumbnail(data?.thumbnail);
        setCategory(data?.category_id);
      }

      setLoadingArticle(false);
    };

    fetchArticle();
  }, [articleId, user]);

  return (
    <section className={styles.createPostSection}>
      <div className={styles.createPostCard}>
        <form className={styles.form}>
          {/* Thumbnail */}
          <div className={styles.thumbnailSection}>
            <Image
              width={500}
              height={500}
              src="/default/defaultArticle.png"
              className={styles.thumbnailPreview}
              alt="Thumbnail Preview"
            />

            <div>
              <input
                type="file"
                id="article-image"
                className={styles.fileInput}
              />

              <label htmlFor="article-image" className={styles.uploadButton}>
                Upload Imagem
              </label>
            </div>
          </div>

          {/* Title */}
          <div className={styles.formGroup}>
            <label htmlFor="title">Titulo</label>

            <input
              id="title"
              type="text"
              placeholder="Enter a catchy title"
              className={styles.input}
            />
          </div>

          {/* Content */}
          <div className={styles.formGroup}>
            <label htmlFor="content">Conteúdo</label>
            <textarea
              id="content"
              placeholder="Write content..."
              className={styles.textarea}
              required
            />
          </div>

          {/* Category */}
          <div className={styles.categoryRow}>
            <div className={styles.formGroup}>
              <label htmlFor="category">Categoria</label>
              <select
                id="category"
                className={styles.select}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((categoryItem) => (
                  <option key={categoryItem.id} value={categoryItem.id}>
                    {categoryItem.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Submit */}
          <div className={styles.submitWrapper}>
            <button type="submit" className={styles.submitButton}>
              Criar Artigo
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
