"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./Slider.module.css";
import { cities } from "@/app/_lib/data-cities";

export default function Slider() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % cities.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + cities.length) % cities.length);

  const current = cities[index];

  return (
    <div className={styles.wrapper}>
      {/* CONTROLS */}
      <div className={styles.controls}>
        <span className={styles.counter}>
          {index + 1} — {cities.length}
        </span>

        <div className={styles.buttons}>
          <button onClick={prev} aria-label="Cidade anterior">
            ←
          </button>
          <button onClick={next} aria-label="Próxima cidade">
            →
          </button>
        </div>
      </div>

      {/* MAIN IMAGE */}
      <div className={styles.imageWrapper}>
        <Image
          key={current.image}
          src={current.image}
          alt={current.title}
          fill
          sizes="100vw"
          className={styles.image}
        />

        <div className={styles.card}>
          <span className={styles.cardTop}>Cidades Alemãs do Projeto</span>
          <h2 className={styles.cardTitle}>{current.title} →</h2>
        </div>
      </div>
    </div>
  );
}
