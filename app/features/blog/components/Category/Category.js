"use client";
import Image from "next/image";
import { useState } from "react";
import { defaultArticle, defaultAvatar } from "../images";
import styles from "./Category.module.css";

export default function Category() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "lingua-portuguesa",
      title: "Acordo Ortigráfico da Língua Portuguesa",
      thumbnail: defaultArticle,
      slug: "technology",
    },
    {
      id: 2,
      name: "atividades-pedagogicas",
      title: " As nossas atividades pedagogicas no ano lectivo 2020",
      thumbnail: defaultArticle,
      slug: "health",
    },
    {
      id: 3,
      name: "vida-escolar",
      title: "A vida escolar do Professor na Alemanha",
      thumbnail: defaultArticle,
      slug: "lifestyle",
    },
    {
      id: 4,
      name: "cultura-lusofona",
      title: "A cultura lusofona - Festa Portuguesa 2020",
      thumbnail: defaultArticle,
      slug: "travel",
    },
    {
      id: 5,
      name: "literatura-autores",
      title:
        "A autora 'escritora x' esteve presenta na feira do livro em Berlin",
      thumbnail: defaultArticle,
      slug: "nutrition",
    },
    {
      id: 6,
      name: "eventos-conferencias",
      title: "A conferência do Escritor",
      thumbnail: defaultArticle,
      slug: "fitness",
    },
    {
      id: 7,
      name: "atualidade-sociedade",
      title: "A vida cultural dos Portugueses na Alemanha.",
      thumbnail: defaultArticle,
      slug: "business",
    },
    {
      id: 8,
      name: "Education",
      title: "Latest trends in education and learning",
      thumbnail: defaultArticle,
      slug: "education",
    },
    {
      id: 9,
      name: "comunidade-cepe",
      title: "A comunidsde CEPE comunica.",
      thumbnail: defaultArticle,
      slug: "entertainment",
    },
  ]);
  return (
    <>
      <div className={styles.categoriesWrapper}>
        <h1 className={styles.categoriesTitle}>Trending Categories</h1>

        <p className={styles.categoriesSubtitle}>
          Latest breaking news, pictures, videos and special reports
        </p>

        <div className={styles.categoriesList}>
          {categories?.map((category) => (
            <div key={category?.id} className={styles.categoryCard}>
              {/* <Image
                src={category?.thumbnail}
                alt={category?.name}
                width={100}
                height={100}
                className={styles.categoryImage}
              /> */}

              <div className={styles.categoryOverlay} />

              <h1 className={styles.categoryName}>{category.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
