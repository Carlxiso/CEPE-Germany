"use client";

import Image from "next/image";
import styles from "./CreateNewArticle.module.css";
import { useEffect, useState } from "react";
import { supabase } from "@/app/_lib/auth/supabase";
// type BlogPost = {
//   title: string

//   category: Category

//   audience: Audience[]

//   tags: string[]

//   author: string

//   publishedAt: Date

//   featured: boolean
// }

// type Category =
//   | 'lingua-portuguesa'
//   | 'atividades-pedagogicas'
//   | 'vida-escolar'
//   | 'cultura-lusofona'
//   | 'literatura-autores'
//   | 'eventos-conferencias'
//   | 'atualidade-sociedade'
//   | 'comunidade-cepe'

export default function CreateNewArticle() {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // const fetchCategories = async () => {
  //   const { data, error } = await supabase.from("categories").select("*");

  //   if (error) {
  //     console.log(
  //       "Error em database. Não foi possivel buscar categories.",
  //       error,
  //     );
  //     return;
  //   }

  //   const normalizedCategories = data ?? [];
  //   setCategories(normalizedCategories);

  //   if (normalizedCategories.length > 0 && !category) {
  //     setCategory(normalizedCategories[0].id);
  //   }
  // };

  // useEffect(() => {
  //   fetchCategories();
  // }, []);
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
