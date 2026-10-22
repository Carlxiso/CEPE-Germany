import styles from "../Enroll.module.css";
import Link from "next/link";
import Button from "@/app/_components/UI/Button/Button";

function EnrollForm_Three({ data, updateFields, onSubmit, status, errorMsg }) {
  // const [schoolCity, setSchoolCity] = useState("");
  // const [consent, setConsent] = useState(false); // obrigatória
  // const [marketing, setMarketing] = useState(false);

  return (
    <div className={styles.formSection}>
      <form action="" className={styles.form} onSubmit={onSubmit}>
        <label htmlFor="" className={styles.label}>
          Localidade do Curso
        </label>
        <select
          className={`${styles.input} ${!data.schoolCity ? styles.placeholder : ""}`}
          name="State"
          id=""
          value={data.schoolCity}
          onChange={(e) => updateFields({ schoolCity: e.target.value })}
        >
          <option value="">Selecione a Localidade do Curso</option>
          <option value="1">Baden-Württemberg</option>
          <option value="2">Baviera</option>
          <option value="3">Berlim</option>
          <option value="4">Hamburgo</option>
          <option value="5">Hessen</option>
          <option value="6">Schleswig-Holstein</option>
          <option value="7">Niedersachsen</option>
          <option value="8">Nordrhein-Westfalen</option>
          <option value="9">Freie Hansestadt Bremen</option>
        </select>

        <label htmlFor="" className={styles.checkboxRow}>
          <span className={styles.label}>
            Li e aceito a Política de Privacidade e autorizo o tratamento dos
            dados para efeitos desta pré-inscrição.
            <Link href="" target="_blank">
              Termos e serviços
            </Link>
          </span>
          <input
            checked={data.consent}
            type="checkbox"
            name="privacidade"
            id=""
            className={styles.checkbox}
            onChange={(e) => updateFields({ consent: e.target.checked })}
            required
          />
        </label>

        <label htmlFor="" className={styles.checkboxRow}>
          <span className={styles.label}>
            Autorizo a CEPE a contactar-me com informações sobre cursos e
            novidades.
          </span>
          <input
            checked={data.marketing}
            type="checkbox"
            name="marketing"
            id=""
            className={styles.checkbox}
            onChange={(e) => updateFields({ marketing: e.target.checked })}
          />
        </label>
        {errorMsg && (
          <p role="alert" className={styles.error}>
            {errorMsg}
          </p>
        )}
        {status === "success" ? (
          <p className={styles.success}>
            Pré-inscrição enviada! Entraremos em contacto. 🎉
          </p>
        ) : (
          <Button type="submit" size="sm" disabled={!data.consent}>
            Submeter a pré-inscrição
          </Button>
        )}
      </form>
    </div>
  );
}

export default EnrollForm_Three;
