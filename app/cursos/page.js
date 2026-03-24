import imgCourse from "@/public/cursos-gps-abc.png";
import Section from "../_components/Layout/Section/Section";
import Footer from "../_components/Layout/Footer/Footer";
import States from "../_components/CursosStates/States/States";
import State from "../_components/CursosStates/State/State";

export const metadata = {
  title: "Cursos",
};
export default function Page() {
  return (
    <>
      <Section fullscreen background={imgCourse.src}></Section>

      <States>
        <State></State>
      </States>

      <Footer />
    </>
  );
}
