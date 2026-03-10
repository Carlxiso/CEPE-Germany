import Hero from "./_components/Layout/Hero/Hero";
import Section from "./_components/Layout/Section/Section";
import bgImg from "../public/hero_img.png";

export default function Page() {
  return (
    <>
      <Hero />
      <Section fullscreen background={bgImg.src} />;
    </>
  );
}
