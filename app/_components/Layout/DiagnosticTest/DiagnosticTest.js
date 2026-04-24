import CTASection from "../../UI/CTASection/CTASection";

const cta = {
  headline:
    "Cada palavra conta. Até que ponto o seu conhecimento abarca a língua portuguesa?",
  text: "A língua portuguesa une culturas, histórias e continentes. Aceite o desafio e descubra até que ponto o seu conhecimento abarca a língua portuguesa. Faça o teste diagnóstico e explore a diversidade, a riqueza e a vitalidade de uma língua verdadeiramente global.",
};
export default function DiagnosticTest() {
  return <CTASection headline={cta.headline} text={cta.text} />;
}
