"use client";

import { useState } from "react";
import InstructionsDiagnosticTest from "../InstructionsDiagnosticTest/InstructionsDiagnosticTest";
import styles from "./InstructionsOverlay.module.css";

export default function InstructionsOverlay() {
  const [open, setOpen] = useState(true);

  return (
    <>
      {!open && (
        <button
          type="button"
          className={styles.infoButton}
          onClick={() => setOpen(true)}
          aria-label="Ver instruções gerais"
        >
          i
        </button>
      )}

      {open && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-label="Instruções gerais"
        >
          <div className={styles.panel}>
            <InstructionsDiagnosticTest />

            <button
              type="button"
              className={styles.gotItButton}
              onClick={() => setOpen(false)}
            >
              Entendi, vamos começar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
