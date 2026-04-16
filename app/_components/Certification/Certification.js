import DividerSection from "../DividerSection/DividerSection";
import Button from "../UI/Button/Button";
import styles from "./Certification.module.css";

export default function Certification() {
  return (
    <div className={styles.content}>
      <div className={styles.innerContent}>
        <DividerSection
          title="CERTIFICAÇÃO"
          subtitle="O teu futuro começa aqui."
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
          suscipit eaque consequuntur nisi consectetur iure officia quibusdam
          quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium
          similique quaerat vitae, iure!
        </p>
        <Button variant="secondary">Saber + </Button>
      </div>
    </div>
  );
}
