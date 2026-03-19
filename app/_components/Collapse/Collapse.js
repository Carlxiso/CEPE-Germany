import { useState } from "react";
import styles from "./Collapse.module.css";
export default function Collapse({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.collapse}>
      <button className={styles.question} onClick={() => setOpen(!open)}>
        {question}
        <span className={styles.icon}>{open ? "-" : "+"}</span>
      </button>

      {open && <p className={styles.answer}>{answer}</p>}
    </div>
  );
}
