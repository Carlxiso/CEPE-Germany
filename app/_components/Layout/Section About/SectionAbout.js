import styles from "./SectionAbout.module.css";

export default function SectionAbout({
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
      {children}
    </section>
  );
}
