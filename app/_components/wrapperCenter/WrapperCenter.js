import Button from "../UI/Button/Button";
import Heading from "../UI/Heading/Heading";
import styles from "./WrapperCenter.module.css";

function WrapperCenter() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Heading
          h1="Ajuda-nos a aumentar esta Rede."
          heading="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Numquam suscipit eaque consequuntur nisi consectetur iure officia quibusdam quod nemo."
        />
        <Button>Formulário Curso</Button>
      </div>
    </div>
  );
}

export default WrapperCenter;
