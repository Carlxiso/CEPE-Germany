import { useState } from "react";
import styles from "../Enroll.module.css";

function EnrollForm_Two() {
  const [guardian, setGuardian] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postal, setPostal] = useState("");

  return (
    // <form action="" onSubmit={handleSubmit}>
    <div className={styles.formSection}>
      <form action="" className={styles.form}>
        <label htmlFor="" className={styles.label}>
          Encarregado de Educação
        </label>
        <input
          type="text"
          placeholder="Ex: José Albino Guimarães"
          value={guardian}
          onChange={(e) => setGuardian(e.target.value.trim())}
          className={styles.input}
        />
        <label htmlFor="" className={styles.label}>
          E-mail
        </label>
        <input
          type="email"
          placeholder="Ex: jose_albino@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value.trim())}
          className={styles.input}
        />
        <label htmlFor="" className={styles.label}>
          Telemóvel
        </label>
        <input
          type="text"
          placeholder="Ex: +49 152 898723"
          value={phone}
          onChange={(e) => setPhone(e.target.value.trim())}
          className={styles.input}
        />
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="" className={styles.label}>
              Localidade
            </label>
            <input
              type="text"
              placeholder="Ex: Hamburgo"
              value={city}
              onChange={(e) => setCity(e.target.value.trim())}
              className={styles.input}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="" className={styles.label}>
              Código Postal
            </label>
            <input
              type="text"
              placeholder="Ex: 10002 - 123"
              value={postal}
              onChange={(e) => setPostal(e.target.value.trim())}
              className={styles.input}
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default EnrollForm_Two;
