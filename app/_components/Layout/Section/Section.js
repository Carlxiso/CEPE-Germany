import Container from "../Container/Container";
import styles from "./Section.module.css";

export default function Section({ children, background, fullscreen = false }) {
  console.log("DEBUG - BACKGROUND", background);
  console.log("DEBUG - FULLSCREEN", fullscreen);

  return (
    <section
      className={`${styles.section} ${fullscreen ? styles.full : ""}`}
      style={{ backgroundImage: background ? `url(${background})` : "none" }}
    >
      <Container>{children}</Container>
    </section>
  );
}
