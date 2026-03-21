"use client";
import { useState } from "react";
import styles from "./Slider.module.css";

const projects = [
  {
    title: "Baden-Württemberg",
    image: "/cities1.png",
  },
  {
    title: "Baviera",
    image: "/cities2.png",
  },
  {
    title: "Berlim",
    image: "/cities3.png",
  },

  {
    title: "Bremen",
    image: "/cities4.png",
  },
  {
    title: "Hamburgo",
    image: "/cities5.png",
  },
  {
    title: "Hesse",
    image: "/cities6.png",
  },
  {
    title: "Schwerin",
    image: "/cities7.png",
  },
  {
    title: "Baixa Saxônia",
    image: "/cities8.png",
  },
];

export default function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[index];
  return (
    <div className={styles.wrapper}>
      {/* TOP RIGHT CONTROLS */}
      <div className={styles.controls}>
        <span className={styles.counter}>
          {index + 1} — {projects.length}
        </span>

        <div className={styles.buttons}>
          <button onClick={prev} aria-label="Previous project">
            ←
          </button>
          <button onClick={next} aria-label="Next project">
            →
          </button>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className={styles.imageWrapper}>
        <img
          key={current.image}
          src={current.image}
          alt={current.title}
          className={styles.image}
        />

        {/* CARD */}
        <div className={styles.card}>
          <span className={styles.cardTop}>CIDADES ALEMÂS DO PROJECT</span>
          <h2 className={styles.cardTitle}>{current.title} →</h2>
        </div>
      </div>

      {/* SIDE IMAGE PREVIEW */}
      <div className={styles.preview}>
        <img
          src={projects[(index + 1) % projects.length].image}
          alt="Next City preview"
        />
      </div>
    </div>
  );
}
