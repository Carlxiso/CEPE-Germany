import Container from "../Container/Container";
import styles from "./Section.module.css";

export default function Section({ children, background, fullscreen = false }) {
  return (
    <section
      className={`${styles.section} ${fullscreen ? styles.full : ""}`}
      style={{ backgroundImage: background ? `url(${background})` : "none" }}
    >
      <Container>{children}</Container>
    </section>
  );
}
