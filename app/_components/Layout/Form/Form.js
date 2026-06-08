import Button from "@/app/_components/UI/Button/Button";
import styles from "./Form.module.css";
import DividerSection from "@/app/_components/DividerSection/DividerSection";
import ContactForm from "./ContactForm";

export default function Form() {
  return (
    <>
      <DividerSection
        title="Contactos"
        subtitle="Tentaremos ser o mais breves possivel"
      />
      <div className={styles.contact}>
        {/* LEFT COLUMN */}
        <div className={styles.contactCol}>
          <h3>Contacte-nos e abarque a língua portuguesa hoje!</h3>
          <p>
            Se tiver dúvidas ou precisar de mais informações, estamos à sua
            disposição. Entre em contacto connosco e descubra como a nossa
            equipa pode ajudá-lo a abarcar a língua portuguesa de forma
            completa, valorizando o seu percurso de aprendizagem e experiências
            com o português.
          </p>
          <Button href="/contactos">Saber +</Button>
        </div>

        {/* FORM */}
        <ContactForm />
      </div>
    </>
  );
}
