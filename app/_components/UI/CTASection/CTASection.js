"use client";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./CTASection.module.css";

// Tem de bater certo com a duração das animações no CSS (0.3s).
const ANIMATION_MS = 300;

export default function CTASection({ headline, text }) {
  const [isOpen, setIsOpen] = useState(false); // está montado no DOM?
  const [isClosing, setIsClosing] = useState(false); // a correr a saída?

  function openModal() {
    setIsClosing(false); // garante a animação de entrada
    setIsOpen(true);
  }

  function closeModal() {
    // 1) dispara a animação de saída...
    setIsClosing(true);
    // 2) ...e só desmonta quando ela termina.
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, ANIMATION_MS);
  }

  return (
    <>
      <div className={styles.ctaContent}>
        <h1>{headline}</h1>
        <p>{text}</p>
      </div>
      <div className={styles.ctaButtons}>
        <Button onClick={openModal}>Começar Teste</Button>
      </div>

      {isOpen && (
        <div
          className={`${styles.modalOverlay} ${
            isClosing ? styles.fadeOut : styles.fadeIn
          }`}
          onClick={closeModal}
        >
          <div
            className={`${styles.modalContent} ${
              isClosing ? styles.slideDown : styles.slideUp
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
