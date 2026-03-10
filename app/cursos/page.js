import imgCourse from "@/public/cursos-gps-abc.png";
import Section from "../_components/Layout/Section/Section";
import Container from "../_components/Layout/Container/Container";

export const metadata = {
  title: "Cursos",
};
export default function Page() {
  return (
    <Section fullscreen background={imgCourse.src}>
      <Container>
        <h1>TEST</h1>
      </Container>
    </Section>
  );
}
