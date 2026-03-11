import Hero from "./_components/Layout/Hero/Hero";
import Section from "./_components/Layout/Section/Section";

import certificImg from "../public/abc-letters.png";
import Button from "./_components/UI/Button/Button";
import NewsSection from "./_components/Layout/NewsSection/NewsSection";
import SplitSection from "./_components/Layout/SplitSection/SplitSection";

export default function Page() {
  return (
    <>
      <Hero />
      <Section fullscreen>
        <NewsSection />
      </Section>
      <Section fullscreen></Section>
      <SplitSection fullscreen></SplitSection>
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
    </>
  );
}
