import styles from "./HeaderDiagnosticTest.module.css";
import quinas from "../../../../../public/quinas.png";
import Image from "next/image";

export default function HeaderDiagnosticTest({ closeModal }) {
  return (
    <>
      <div className={styles.header}>
        <Image src={quinas} alt="Quinas Quiz Logo" />
        <div className={styles.testHeader}>
          <h1 className={styles.headerH1}>Teste Diagnóstico de Português</h1>
          <div className={styles.subHeaderContainer}>
            <div className={styles.subHeaderText}>
              <span>
                <strong>Duração sugerida: </strong> 60–90 minutos
              </span>
              <span>
                <strong>Variante: </strong> Português Europeu
              </span>
            </div>
          </div>
        </div>
        <div className={styles.headerCloseBtn}>
          <button
            className={styles.closeBtn}
            onClick={closeModal}
            aria-label="Fechar modal"
          ></button>
        </div>
      </div>
    </>
  );
}
