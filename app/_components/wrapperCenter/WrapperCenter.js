import Button from "../UI/Button/Button";
import styles from "./WrapperCenter.module.css";

function WrapperCenter() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Ajuda-nos a aumentar esta Rede.</h2>
      <p className={styles.subheading}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
        suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod
        nemo.
      </p>
      <Button>Formulário Curso</Button>
    </div>
  );
}

export default WrapperCenter;
