import Container from "../Container/Container";
import styles from "./Section.module.css";

export default function Section({
  children,
  background,
  bgColor,
  fullscreen = false,
  withContainer = true,
}) {
  const sectionStyle = {
    backgroundImage: background ? `url(${background})` : undefined,
    backgroundColor: bgColor || undefined,
  };

  const content = withContainer ? <Container>{children}</Container> : children;
  return (
    <section
      className={`${styles.section} ${fullscreen ? styles.full : ""}`}
      style={sectionStyle}
    >
      {content}
    </section>
  );
}
