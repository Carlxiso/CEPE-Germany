"use client";
import { useState } from "react";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";
import styles from "./CTASection.module.css";

export default function CTASection({ headline, text, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={styles.ctaContent}>
        <h1>{headline}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.ctaButtons}>
        <Button onClick={() => setIsOpen(true)}>Começar Teste</Button>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        labelledById="diagnostic-test-title"
      >
        {children}
      </Modal>
    </>
  );
}
