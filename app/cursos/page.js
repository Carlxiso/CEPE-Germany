import imgCourse from "@/public/cursos-gps-abc.png";
import Section from "../_components/Layout/Section/Section";
import Footer from "../_components/Layout/Footer/Footer";
import States from "../_components/CursosStates/States/States";
import State from "../_components/CursosStates/State/State";
import Heading from "../_components/UI/Heading/Heading";
import Button from "../_components/UI/Button/Button";
import WrapperCenter from "../_components/wrapperCenter/WrapperCenter";

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
      <Section bgColor="#415364">
        <WrapperCenter />
      </Section>
      <Footer />
    </>
  );
}
