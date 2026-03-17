"use client";

import styles from "./StatsSection.module.css";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 55,
    suffix: "+",
    label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    value: 98,
    suffix: "%",
    label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
  {
    value: 150,
    suffix: "+",
    label: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
  },
];

export default function Stats() {
  const [visible, setVisible] = useState(false);
  const ref = useRef();

  // trigger animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className={styles.stats}>
      {stats.map((item, i) => (
        <StatItem key={i} item={item} visible={visible} />
      ))}
    </section>
  );
}

function StatItem({ item, visible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const duration = 1500;
    const increment = item.value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= item.value) {
        setCount(item.value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [visible, item.value]);

  return (
    <div className={styles.card}>
      <h2 className={styles.value}>
        {item.suffix === "+" && "+"}
        {count}
        {item.suffix === "%" && "%"}
      </h2>

      <div className={styles.line} />

      <p className={styles.label}>{item.label}</p>
    </div>
  );
}
