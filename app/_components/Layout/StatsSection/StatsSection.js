"use client";

import styles from "./StatsSection.module.css";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    id: "alunos",
    value: 55,
    prefix: "+",
    suffix: "",
    label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: "satisfacao",
    value: 98,
    prefix: "",
    suffix: "%",
    label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    id: "cursos",
    value: 150,
    prefix: "+",
    suffix: "",
    label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export default function StatsSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.stats}>
      {stats.map((item, i) => (
        <StatItem key={item.id} item={item} visible={visible} index={i} />
      ))}
    </section>
  );
}

function StatItem({ item, visible, index }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    // respeitar prefers-reduced-motion — salta para o valor final imediatamente
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(item.value);
      return;
    }

    const startTime = performance.now();
    const duration = 1500;
    let frameId;

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = progress * (2 - progress);

      setCount(Math.floor(eased * item.value));

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setCount(item.value);
      }
    }

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [visible, item.value]);

  return (
    <div
      className={`${styles.card} ${visible ? styles.visible : ""}`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      <h2 className={styles.value}>{`${item.prefix}${count}${item.suffix}`}</h2>

      <div className={styles.line} />

      <p className={styles.label}>{item.label}</p>
    </div>
  );
}
