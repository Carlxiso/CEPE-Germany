import styles from "./HeaderRegistration.module.css";
// import quinas from "../../../../../public/quinas.png";
// import Image from "next/image";

export default function HeaderRegistration() {
  return (
    <>
      <div className={styles.header}>
        {/* <Image src={quinas} alt="Quinas Quiz Logo" /> */}
        <div className={styles.testHeader}>
          <h1 id="diagnostic-test-title" className={styles.headerH1}>
            Pré-Inscrição para os cursos de Português
          </h1>
          <div className={styles.subHeaderContainer}>
            <div className={styles.subHeaderText}>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
