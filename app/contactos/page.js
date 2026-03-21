import Contact from "../_components/Layout/Contact/Contact";
import ContactForm from "../_components/Layout/ContactForm.js/ContactForm";
import Footer from "../_components/Layout/Footer/Footer";
import Section from "../_components/Layout/Section/Section";
import Slider from "../_components/Slider/Slider";

export const metadata = {
  title: "Contactos",
};
export default function Page() {
  return (
    <>
      <Section fullscreen>
        <Contact />
      </Section>
      <Section bgColor="#415364">
        <ContactForm />
      </Section>
      <Section>
        <Slider />
      </Section>
      <Footer />
    </>
  );
}
