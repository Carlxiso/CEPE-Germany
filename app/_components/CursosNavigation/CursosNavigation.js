"use client";

import { useState } from "react";
import styles from "./CursosNavigation.module.css";

export default function CursosNavigation({ tabs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.tabs}>
      <div className={styles.nav}>
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            className={`${styles.tabButton} ${
              activeIndex === index ? styles.active : ""
            }`}
            onClick={() => setActiveIndex(index)}
            aria-selected={activeIndex === index}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className={styles.contentWrapper}>
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`${styles.content} ${
              activeIndex === index ? styles.show : styles.hide
            }`}
            aria-hidden={activeIndex !== index}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
}
