import Contact from "../_components/Layout/Contact/Contact";
import Footer from "../_components/Layout/Footer/Footer";
import Section from "../_components/Layout/Section/Section";

export const metadata = {
  title: "Contactos",
};
export default function Page() {
  return (
    <>
      <Section fullscreen>
        <Contact />
      </Section>
      <Footer />
    </>
  );
}
