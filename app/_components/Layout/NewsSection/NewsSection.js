"use client";
import { useEffect, useState } from "react";
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

  const visibleCards = news.slice(index, index + 4);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function next() {
    if (index + 4 >= news.length) {
      setIndex(0);
    } else {
      setIndex(index + 4);
    }
  }
  function prev() {
    setIndex(Math.max(index - 4, 0));
  }

  /** Auto Animation */
  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [index, next, pause]);

  return (
    <>
      <div className={styles.news}>
        <h2>Últimas Notícias</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum cumque
          qui quam voluptatibus enim autem?
        </p>
      </div>
      <div
        className={styles.cards}
        onMouseEnter={() => setPause(true)}
        onMouseLeave={() => setPause(false)}
      >
        {visibleCards.map((item, idx) => (
          <div className={styles.card} key={idx}>
            <h3>{item.titulo}</h3>
            <h5>{item.subtitle}</h5>
            <p>{item.intro}</p>
            <Button variant="outline">Lêr +</Button>
          </div>
        ))}
      </div>

      <div className={styles.paginationBtns}>
        <button className={styles.btnPagination} onClick={prev}>
          Anterior
        </button>
        <button className={styles.btnPagination} onClick={next}>
          Próximo
        </button>
      </div>
    </>
  );
}
