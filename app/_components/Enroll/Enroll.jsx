import { useState } from "react";
import styles from "./Enroll.module.css";
import EnrollForm_One from "./EnrollForm_One/EnrollForm_One";

const stepsConfig = [
  {
    id: 1,
    message: "Informações pessoais",
    component: <EnrollForm_One />,
  },
  {
    id: 2,
    message: "Detalhes adicionais",
    //   component: <Form2 />,
  },
  {
    id: 3,
    message: "Confirmação final",
    // component: <Form3 />,
  },
];

export default function Steps() {
  const [step, setStep] = useState(1);

  const currentStep = stepsConfig.find((currStep) => currStep.id === step);

  function handlePrevious() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  function handleNext() {
    setStep((prev) => Math.min(prev + 1, stepsConfig.length));
  }

  return (
    <>
      <div className={styles.header}>
        <div className={styles.testHeader}>
          <h1 id="pre-inscricao" className={styles.headerH1}>
            Pré-Inscrição para os cursos de Português
          </h1>
          <div className={styles.subHeaderContainer}>
            <div className={styles.subHeaderText}>
              <span>
                Este processo de inscrição, não irá garantir que o seu //
                progenitor garanta uma vaga nos nossos cursos. Os seus dados //
                servirão para determinarmos uma posição no futuro nos nossos //
                cursos.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.steps}>
        <p className={styles.msg}>{currentStep.message}</p>
        <div className={styles.numbers}>
          {stepsConfig.map((currStep) => (
            <div
              key={currStep.id}
              className={step >= currStep.id ? styles.active : ""}
            >
              {currStep.id}
            </div>
          ))}
        </div>

        <div>{currentStep.component}</div>

        <div className={styles.btnEnrollForm}>
          <button onClick={handlePrevious} disabled={step === 1}>
            Previous
          </button>
          <button onClick={handleNext} disabled={step === stepsConfig.length}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
