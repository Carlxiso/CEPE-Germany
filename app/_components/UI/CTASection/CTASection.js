"use client";
import { useState } from "react";
import Button from "../Button/Button";
import styles from "./CTASection.module.css";
import HeaderDiagnosticTest from "../../Layout/DiagnosticTest/HeaderDiagnosticTest/HeaderDiagnosticTest";

const ANIMATION_MS = 300;

export default function CTASection({ headline, text, closeModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  function openModal() {
    setIsClosing(false);
    setIsOpen(true);
  }

  function closeModal() {
    setIsClosing(true);
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
            <HeaderDiagnosticTest closeModal={closeModal} />
            {/* <button onClick={closeModal}>Close</button> */}
          </div>
        </div>
      )}
    </>
  );
}
