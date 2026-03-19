import Section from "../_components/Layout/Section/Section";
import Footer from "../_components/Layout/Footer/Footer";
import faqImage from "../../public/artboard.png";
import Filter from "../_components/Filter/Filter";

export const metadata = {
  title: "Faq´s",
};
export default function Page() {
  return (
    <>
      <Section fullscreen background={faqImage.src}></Section>
      <Section>
        <Filter />
      </Section>
      <Footer />
    </>
  );
}
