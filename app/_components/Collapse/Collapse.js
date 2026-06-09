"use client";
import { useId, useState } from "react";
import styles from "./Collapse.module.css";

export default function Collapse({ question, answer }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const panelId = `${id}-panel`;
  const buttonId = `${id}-button`;

  return (
    <div className={styles.collapse}>
      <button
        id={buttonId}
        className={styles.question}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={panelId}
      >
        {question}
        <span className={styles.icon} aria-hidden="true">
          {open ? "−" : "+"}
        </span>
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`${styles.panel} ${open ? styles.open : ""}`}
      >
        <div className={styles.panelInner}>
          <p className={styles.answer}>{answer}</p>
        </div>
      </div>
    </div>
  );
}
