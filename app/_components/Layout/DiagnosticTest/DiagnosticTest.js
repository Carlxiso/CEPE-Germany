import Container from "../../Layout/Container/Container";
import CTASection from "../../UI/CTASection/CTASection";

const cta = {
  headline: " Cada palavra conta. Descubra o seu domínio da Língua Portuguesa.",
  text: "   O Teste Diagnóstico de Língua Portuguesa foi criado para quem quer saber, de forma rápida e precisa, o seu verdadeiro domínio do idioma. Em apenas alguns minutos, poderá avaliar as suas competências linguísticas, identificar pontos fortes e perceber onde pode evoluir — tudo de forma simples, intuitiva e totalmente online.",
};
export default function DiagnosticTest() {
  return (
    <Container>
      <CTASection headline={cta.headline} text={cta.text} />
    </Container>
  );
}
