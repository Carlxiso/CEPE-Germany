"use client";
import styles from "./Testimonials.module.css";
import testimonials from "../../_lib/data-testimonials";
import { useEffect, useState } from "react";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, total]);

  function next() {
    setIndex((i) => (i + 1) % total);
  }

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  return (
    <div
      className={styles.testimonials}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.slider}>
        <div
          className={styles.track}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {testimonials.map((item, i) => (
            <div key={i} className={styles.slide}>
              <div className={styles.card}>
                <p className={styles.text}>{item.text}</p>

                <div className={styles.user}>
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className={styles.avatar}
                  />

                  <div>
                    <h4>{item.name}</h4>
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={prev}>←</button>
        <button onClick={next}>→</button>
      </div>
    </div>
  );
}
