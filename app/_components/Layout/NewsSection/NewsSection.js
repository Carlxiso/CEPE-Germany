"use client";
import { useEffect, useState, useCallback } from "react";
import Button from "../../UI/Button/Button";
import styles from "./NewsSection.module.css";

const news = [
  {
    titulo:
      " 01 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
  {
    titulo:
      " 02 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
  {
    titulo:
      " 03 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
  {
    titulo:
      " 04 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
  {
    titulo:
      " 05 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
  {
    titulo:
      " 06 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
  {
    titulo:
      " 07 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
  {
    titulo:
      " 08 - Commodi accusamus, ducimus ullam voluptatum doloribus dolor.",
    subtitle: "Reiciendis veniam corrupti tenetur voluptatum incidunt?",
    intro:
      " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi accusamus, ducimus ullam voluptatum doloribus dolor. Odio, illum voluptas, obcaecati maiores corrupti eos alias assumenda unde quaerat ratione dolor molestias, impedit quod illo hic aspernatur. Reiciendis veniam corrupti tenetur voluptatum incidunt?",
  },
];
export default function NewsSection() {
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false);
  const [direction, setDirection] = useState("");

  const visibleCards = news.slice(index, index + 4);

  //   function nextStep() {
  //     if (index + 4 >= news.length) {
  //       setIndex(0);
  //     } else {
  //       setIndex(index + 4);
  //     }
  //   }
  //   function prevStep() {
  //     setIndex(Math.max(index - 4, 0));
  //   }

  const nextStep = useCallback(() => {
    setDirection("next");
    setIndex((prev) => Math.min(prev + 4, news.length - 4));
  }, []);

  const prevStep = useCallback(() => {
    setDirection("prev");
    setIndex((prev) => Math.max(prev - 4, 0));
  }, []);

  /** Auto Animation */
  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      nextStep();
    }, 5000);
    return () => clearInterval(interval);
  }, [index, nextStep, pause]);

  return (
    <>
      <div className={styles.news}>
        <h2>Últimas Notícias</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum cumque
          qui quam voluptatibus enim autem?
        </p>
      </div>
      {/* <div
        className={styles.cards}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      > */}
      <div className={`${styles.cards} ${styles[direction]}`}>
        {visibleCards.map((item) => (
          <div className={styles.card} key={item.titulo}>
            <h3>{item.titulo}</h3>
            <h5>{item.subtitle}</h5>
            <p>{item.intro}</p>
            <Button variant="outline">Lêr +</Button>
          </div>
        ))}
      </div>

      <div className={styles.paginationBtns}>
        <button className={styles.btnPagination} onClick={prevStep}>
          Anterior
        </button>
        <button className={styles.btnPagination} onClick={nextStep}>
          Próximo
        </button>
      </div>
    </>
  );
}
