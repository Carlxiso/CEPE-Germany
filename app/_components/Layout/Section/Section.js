import Container from "../Container/Container";
import styles from "./Section.module.css";

export default function Section({
  children,
  background,
  bgColor,
  fullscreen = false,
}) {
  const sectionStyle = {
    backgroundImage: background ? `url(${background})` : undefined,
    backgroundColor: bgColor || undefined,
  };
  return (
    <section
      className={`${styles.section} ${fullscreen ? styles.full : ""}`}
      style={sectionStyle}
    >
      <Container>{children}</Container>
    </section>
  );
}
