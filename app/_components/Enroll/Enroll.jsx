import styles from "./Enroll.module.css";

const stepsConfig = ["Step One", "Step Two", "Step Three"];
export default function Enroll() {
  const step = 1;
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
                Este processo de inscrição, não irá garantir que o seu
                progenitor garanta uma vaga nos nossos cursos. Os seus dados
                servirão para determinarmos uma posição no futuro nos nossos
                cursos.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.steps}>
        <div className={styles.numbers}>
          <div className={`${step >= 1 ? styles.active : ""}`}>1</div>
          <div className={`${step >= 2 ? styles.active : ""}`}>2</div>
          <div className={`${step >= 3 ? styles.active : ""}`}>3</div>
        </div>
        <p className={styles.msg}>{stepsConfig[step - 1]}</p>
        <div className={styles.btnEnrollForm}>
          <buttons>Anterior</buttons>
          <buttons>Próximo</buttons>
        </div>
      </div>
    </>
  );
}
