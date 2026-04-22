import Image from "next/image";
import styles from "./Center.module.css";
import DividerSection from "../../DividerSection/DividerSection";

export default function Center({ src, alt, title, text, fullscreen = false }) {
  return (
    <>
      <DividerSection
        title="Equipa de Professores"
        subtitle="Pautamos pelo falar nas costas e corte e costura"
      />
      <div className={`${styles.split} ${fullscreen ? styles.full : ""}`}>
        <div className={styles.image}>
          <Image src={src} fill alt={alt} className={styles.imageElement} />
        </div>
      </div>
    </>
  );
}
