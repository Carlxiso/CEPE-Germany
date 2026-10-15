import { useState } from "react";
import styles from "../Enroll.module.css";

function calculateAge(isoDate) {
  if (!isoDate) return null;
  const today = new Date();
  const birth = new Date(isoDate);
  let age = today.getFullYear() - birth.getFullYear();
  const aindaNaoFezAnos =
    today.getMonth() < birth.getMonth() ||
    (today.getMonth() === birth.getMonth() &&
      today.getDate() < birth.getDate());
  if (aindaNaoFezAnos) age--;
  return age;
}

function EnrollForm_One() {
  const [student, setStudent] = useState("");
  const [birthDate, setBirthDate] = useState(""); // "2015-03-21"
  const [school, setSchool] = useState("");
  const [schoolYear, setSchoolYear] = useState("");
  const [attendedEPE, setAttendedEPE] = useState(false);

  return (
    // <form action="" onSubmit={handleSubmit}>
    <div className={styles.formSection}>
      <form action="" className={styles.form}>
        <label htmlFor="" className={styles.label}>
          Nome Completo
        </label>
        <input
          type="text"
          placeholder="Ex: José Albino Guimarães"
          value={student}
          onChange={(e) => setStudent(e.target.value.trim())}
          className={styles.input}
        />
        <label htmlFor="birthDate" className={styles.label}>
          Data de Nascimento:
        </label>
        <input
          type="date"
          id="birthDate"
          name="birthDate"
          className={`${styles.input} ${!birthDate ? styles.placeholder : ""}`}
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          //   min="2007-01-01"
          //   max="2021-12-31"
          required
        />

        <label htmlFor="" className={styles.label}>
          Ano de Escolaridade
        </label>
        <select
          className={`${styles.input} ${!schoolYear ? styles.placeholder : ""}`}
          name="Escolaridade"
          id=""
          value={schoolYear}
          onChange={(e) => setSchoolYear(e.target.value)}
        >
          <option value="">Selecione o Ano de Escolaridade</option>
          <option value="1">1º Ano de Escolaridade</option>
          <option value="2">2º Ano de Escolaridade</option>
          <option value="3">3º Ano de Escolaridade</option>
          <option value="4">4º Ano de Escolaridade</option>
          <option value="5">5º Ano de Escolaridade</option>
          <option value="6">6º Ano de Escolaridade</option>
          <option value="7">7º Ano de Escolaridade</option>
          <option value="8">8º Ano de Escolaridade</option>
          <option value="9">9º Ano de Escolaridade</option>
          <option value="10">10º Ano de Escolaridade</option>
          <option value="11">11º Ano de Escolaridade</option>
          <option value="12">12º Ano de Escolaridade</option>
        </select>
        <label htmlFor="" className={styles.checkboxRow}>
          <span className={styles.label}>Já frequentou cursos EPE?</span>
          <input
            type="checkbox"
            name=""
            id=""
            className={styles.checkbox}
            onChange={(e) => setAttendedEPE(e.target.checked)}
          />
        </label>
        {attendedEPE && (
          <div className={styles.field}>
            <label htmlFor="" className={styles.label}>
              Em que escola frequentou o curso?
            </label>
            <input
              type="text"
              placeholder="Ex: Escola Europeia - Berlin"
              value={school}
              onChange={(e) => setSchool(e.target.value.trim())}
              className={styles.input}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default EnrollForm_One;
