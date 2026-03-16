import Hero from "./_components/Layout/Hero/Hero";
import Section from "./_components/Layout/Section/Section";
import institutionsData from "./_lib/data-institutions";
import certificImg from "../public/abc-letters.png";
import Button from "./_components/UI/Button/Button";
import NewsSection from "./_components/Layout/NewsSection/NewsSection";
import SplitSection from "./_components/Layout/SplitSection/SplitSection";
import SplitSectionGrid from "./_components/Layout/SplitSectionGrid/SplitSectionGrid";
import Institutions from "./_components/Layout/Institutions/Institutions";
import DiagnosticTest from "./_components/Layout/DiagnosticTest/DiagnosticTest";
import Footer from "./_components/Layout/Footer/Footer";
import Form from "./_components/Layout/Form/Form";

export default function Page() {
  return (
    <>
      <Hero />
      <Section fullscreen>
        <NewsSection />
      </Section>
      <SplitSectionGrid fullscreen></SplitSectionGrid>
      <Section fullscreen>
        <Institutions cards={institutionsData}></Institutions>
      </Section>
      <SplitSection fullscreen></SplitSection>
      <Section fullscreen></Section>
      <Section fullscreen bgColor="#005d8d">
        <DiagnosticTest />
      </Section>
      <Section fullscreen></Section>
      <Section fullscreen background={certificImg.src}>
        <div>
          <h3>CERTIFICAÇÃO</h3>
          <h2>O teu futuro começa aqui.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            suscipit eaque consequuntur nisi consectetur iure officia quibusdam
            quod nemo. Ad, eligendi. Quas consectetur dolorum accusantium
            similique quaerat vitae, iure!
          </p>
          <Button variant="secondary">Certificação</Button>
        </div>
      </Section>
      <Section fullscreen>
        <Form />
      </Section>
      <Footer />
    </>
  );
}
