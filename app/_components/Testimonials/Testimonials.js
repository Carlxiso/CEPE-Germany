"use client";
import Image from "next/image";
import styles from "./Testimonials.module.css";
import testimonials from "@/app/_lib/data-testimonials";
import { useEffect, useRef, useState } from "react";
import DividerSection from "@/app/_components/DividerSection/DividerSection";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(null);
  const total = testimonials.length;

  useEffect(() => {
    if (isPaused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total, index]);

  function next() {
    setIndex((i) => (i + 1) % total);
  }

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  // swipe em mobile
  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? next() : prev();
    }
    touchStartX.current = null;
  }

  return (
    <>
      <DividerSection
        title="Testemunhos"
        subtitle="Estas foram as pessoas que fizeram os nossos cursos recomendam-nos a amigos e familiares"
      />

      <div
        className={styles.testimonials}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* slider */}
        <div className={styles.slider}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {testimonials.map((item) => (
              <div key={item.name} className={styles.slide}>
                <div className={styles.card}>
                  <p className={styles.text}>{item.text}</p>

                  <div className={styles.user}>
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      width={48}
                      height={48}
                      className={styles.avatar}
                    />
                    <div>
                      <p className={styles.userName}>{item.name}</p>
                      <p className={styles.userLocation}>{item.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className={styles.controls}
          role="group"
          aria-label="Controlos do slider de testemunhos"
        >
          <button
            className={styles.btn}
            onClick={prev}
            aria-label="Testemunho anterior"
          >
            ←
          </button>

          <div className={styles.dots}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para testemunho ${i + 1} de ${total}`}
                aria-current={i === index}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>

          <button
            className={styles.btn}
            onClick={next}
            aria-label="Próximo testemunho"
          >
            →
          </button>
        </div>
      </div>
    </>
  );
}
