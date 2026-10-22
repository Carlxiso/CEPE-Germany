import { useState } from "react";
import styles from "./Enroll.module.css";
import EnrollForm_One from "./EnrollForm_One/EnrollForm_One";
import EnrollForm_Two from "./EnrollForm_Two/EnrollForm_Two";
import EnrollForm_Three from "./EnrollForm_Three/EnrollForm_Three";

const stepsConfig = [
  {
    id: 1,
    message: "Informações pessoais",
    Component: EnrollForm_One,
    // component: <EnrollForm_One />,
  },
  {
    id: 2,
    message: "Detalhes adicionais",
    Component: EnrollForm_Two,
    // component: <EnrollForm_Two />,
  },
  {
    id: 3,
    message: "Confirmação final",
    Component: EnrollForm_Three,
    // component: <EnrollForm_Three />,
  },
];

export default function Enroll({ closeModal }) {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");
  const [step, setStep] = useState(1);
  const currentStep = stepsConfig.find((currStep) => currStep.id === step);
  const StepComponent = currentStep.Component;

  const [formData, setFormData] = useState({
    // Step 1
    student: "",
    birthDate: "",
    school: "",
    schoolYear: "",
    attendedEPE: false,
    // Step 2
    guardian: "",
    email: "",
    phone: "",
    city: "",
    postal: "",
    // Step 3
    schoolCity: "",
    consent: false,
    marketing: false,
  });

  const stepProps = {
    data: formData,
    updateFields,
    onSubmit: handleSubmit,
    status,
    errorMsg,
    onClose: closeModal,
  };
  const isFirstStep = step === 1;
  const isLastStep = step === stepsConfig.length;

  function handlePrevious() {
    setStep((prev) => Math.max(prev - 1, 1));
  }

  function handleNext() {
    setStep((prev) => Math.min(prev + 1, stepsConfig.length));
  }

  function updateFields(fields) {
    setFormData((prev) => ({ ...prev, ...fields }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.consent) {
      console.log("BLOQUEADO: sem consentimento");
      setErrorMsg("Precisa aceitar a Politica de Privacidade.");
      return;
    }
    console.log("PASSOU o consentimento");

    try {
      setStatus("loading");
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!result.ok) {
        setStatus("error");
        setErrorMsg(result.error ?? "Ocorreu um erro.");
        return;
      }
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Erro de ligação. Tente Novamente");
    }
  }

  if (status === "success") {
    return <StepComponent {...stepProps} />;
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
        <p className={styles.msg}>{currentStep.message}</p>

        <div>
          <StepComponent
            data={formData}
            updateFields={updateFields}
            onSubmit={handleSubmit}
            status={status}
            errorMsg={errorMsg}
            onClose={closeModal}
          />
        </div>
        {/* <div>{currentStep.component}</div> */}

        <div className={styles.btnEnrollForm}>
          {!isFirstStep && (
            <button className={styles.btnPrev} onClick={handlePrevious}>
              Anterior
            </button>
          )}

          {!isLastStep && (
            <button className={styles.btnNext} onClick={handleNext}>
              Próximo
            </button>
          )}
        </div>
      </div>
    </>
  );
}
