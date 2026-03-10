import Section from "./Section";
import bgImg from "../public/hero_img.png";

const meta = {
  title: "Layout/Section",
  component: Section,
};

export default meta;

export const Default = () => (
  <Section>
    <h2>Section Content</h2>
  </Section>
);
export const MobileMenuOpen = () => (
  <Section fullScreen background={bgImg.src}>
    <h1>Hero Section</h1>
  </Section>
);
