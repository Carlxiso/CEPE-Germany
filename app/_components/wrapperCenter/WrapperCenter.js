import Button from "../UI/Button/Button";
import styles from "./WrapperCenter.module.css";

function WrapperCenter() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        A tua língua é a tua raiz Cultural para o Mundo.
      </h2>
      <p className={styles.subheading}>
        Falar Português é uma herança preciosa. Inscreve-te nos nossos cursos e
        mantém essa ligação sempre viva!.
      </p>
      <Button>Formulário Curso</Button>
    </div>
  );
}

export default WrapperCenter;
