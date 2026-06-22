"use client";

import Image from "next/image";
import styles from "./CreateNewArticle.module.css";
import { useEffect, useState } from "react";
import { supabase } from "@/app/_lib/auth/supabase";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

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
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [loadingArticle, setLoadingArticle] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [user, setUser] = useState(null);
  const searchParams = useSearchParams();
  const articleId = searchParams.get("id");

  const router = useRouter();

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

  const handleThumbnailChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setThumbnail(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const wordCount =
      content
        ?.replace(/<[^>]*>/g, "")
        ?.trim()
        ?.split(/\s+/)?.length || 0;

    const readTime = Math.ceil(wordCount / 200);

    let thumbnailUrl = "";

    if (thumbnail && thumbnail.name) {
      const fileExtension = thumbnail.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExtension}`;
      const filePath = `${user?.id}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from("cepe-blog-bucket")
        .upload(filePath, thumbnail);

      if (uploadError) {
        console.log("Thumbnail Upload Error", uploadError);
        setLoading(false);
        return;
      }

      const { data: publicUrlData } = supabase.storage
        .from("cepe-blog-bucket")
        .getPublicUrl(filePath);
      thumbnailUrl = publicUrlData.publicUrl;
    }

    const slug = title
      ?.toLowerCase()
      ?.trim()
      ?.replace(/[^\w\s-]/g, "") // Remove special caracthers
      .replace(/\s+/g, "-") // Remove spaces with dashes
      .replace(/-+/g, "-"); // Clean up multiple dashes

    // Edit Mode
    if (articleId) {
      const { error } = await supabase
        .from("articles")
        .update({
          title,
          content,
          category_id: category,
          thumbnail: thumbnailUrl || undefined,
          read_time: readTime,
        })
        .eq("id", articleId)
        .eq("profile_id", user?.id);

      if (error) {
        console.log("Update Error:", error);
        setLoading(false);
        return;
      }
      // Success MSG
    } else {
      const { data, error } = await supabase
        .from("articles")
        .insert({
          title,
          content,
          category_id: category,
          thumbnail: thumbnailUrl || undefined,
          read_time: readTime,
          slug,
          profile_id: user?.id,
        })
        .select("id")
        .single();

      if (error) {
        console.log("Failed to Create an Article:", error);
        setLoading(false);
        return;
      }
      // Success MSG - Article Created Successfully
      router.push(`/admin/blog/criar?id=${data.id}`);
    }
    setLoading(false);
  };

  return (
    <section className={styles.createPostSection}>
      <div className={styles.createPostCard}>
        <form className={styles.form} onSubmit={handleSubmit}>
          {/* Thumbnail */}
          <div className={styles.thumbnailSection}>
            <Image
              width={500}
              height={500}
              src={
                thumbnail
                  ? typeof thumbnail === "string"
                    ? thumbnail
                    : URL.createObjectURL(thumbnail)
                  : "/default/defaultArticle.png"
              }
              className={styles.thumbnailPreview}
              alt="Thumbnail Preview"
            />

            <div>
              <input
                type="file"
                id="article-image"
                className={styles.fileInput}
                onChange={handleThumbnailChange}
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
              placeholder="Escreva o titulo do artigo"
              className={styles.input}
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>

          {/* Content */}
          <div className={styles.formGroup}>
            <label htmlFor="content">Conteúdo</label>
            <textarea
              id="content"
              placeholder="Escreva o conteúdo do artigo..."
              className={styles.textarea}
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
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
              {loading ? (
                articleId ? (
                  <>Atualizar Artigo</>
                ) : (
                  <>Criar Artigo</>
                )
              ) : articleId ? (
                <>Atualizar Artigo</>
              ) : (
                <>Criar Artigo</>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
