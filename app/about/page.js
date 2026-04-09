import Footer from "../_components/Layout/Footer/Footer";
import Section from "../_components/Layout/Section/Section";
import Heading from "../_components/UI/Heading/Heading";
import Message from "../_components/Message/Message";
import SplitSection from "../_components/Layout/SplitLeft/SplitLeft";
import SplitLeft from "../_components/Layout/SplitLeft/SplitLeft";
import SplitRigth from "../_components/SplitRigth/SplitRigth";
import SectionAbout from "../_components/Layout/Section About/SectionAbout";
import Center from "../_components/Layout/Center/Center";
import Team from "../_components/Layout/Team/Team";
import Apply from "../_components/Apply/Apply";

export const metadata = {
  metadataBase: new URL("https://cepealemanha.de/about"),

  title: {
    default: "Sobre o CEPE Alemanha | Ensino de Português na Alemanha",
    template: "%s | Português na Alemanha - CEPE",
  },

  description:
    "Conheça o CEPE Alemanha, responsável pela coordenação do ensino do português na Alemanha, incluindo cursos, apoio educativo e certificação.",

  keywords: [
    "CEPE Alemanha",
    "ensino português na Alemanha",
    "coordenação ensino português estrangeiro",
    "Camões I.P. Alemanha",
    "ensino português no estrangeiro Alemanha",
    "instituição português Alemanha",
  ],

  authors: [
    { name: "Coordenação do Ensino do Português no Estrangeiro - Alemanha" },
  ],
  creator: "Carl-iso",

  openGraph: {
    type: "website",
    locale: "pt_PT",
    url: "https://cepealemanha.de/about",
    siteName: "CEPE Alemanha",
    title: "Sobre o CEPE Alemanha",
    description:
      "Saiba mais sobre a missão, estrutura e ensino do português na Alemanha.",
    images: [
      {
        url: "/cepelogo.png",
        width: 1200,
        height: 630,
        alt: "Sobre o CEPE Alemanha",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sobre o CEPE Alemanha",
    description:
      "Conheça a instituição responsável pelo ensino do português na Alemanha.",
    images: ["/cepelogo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://cepealemanha.de/about",
  },

  icons: {
    icon: "/icon.png",
  },
};
export default function Page() {
  return (
    <>
      <Section fullscreen>
        <Heading
          h1="Transformamos aprendizagem em comunicação real"
          heading="Não ensinamos apenas regras — ajudamos-te a usar o português no mundo real, com confiança e naturalidade."
        />
      </Section>
      <Section fullscreen>
        <Message>
          <Message.Image
            src="/director.jpg"
            alt="Coordenadora do Ensino do Português na Alemanha"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <Message.Content>
            <h3>Lorem ipsum dolor sit.</h3>
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              suscipit eaque consequuntur nisi consectetur iure officia
              quibusdam quod nemo. Ad, eligendi. Quas consectetur dolorum
              accusantium similique quaerat vitae, iure a, excepturi nihil alias
              obcaecati iste itaque dolores maiores voluptatem tempora quam.
              Impedit illo accusamus architecto neque minima, autem quae modi
              dolor rerum at quo nisi aut ea tempore eligendi obcaecati corrupti
              esse magnam! Exercitationem, ullam ducimus id sint quod expedita
              cum ab. Incidunt exercitationem veritatis doloribus libero esse
              quisquam alias consectetur modi voluptate eligendi illum ipsum,
              nemo nostrum vero nesciunt, quidem perferendis! Reiciendis
              consectetur doloribus ipsa, deleniti officiis ducimus et! Impedit
              illo accusamus architecto neque minima, autem quae modi dolor
              rerum at quo nisi aut ea tempore eligendi obcaecati corrupti esse
              magnam! Exercitationem, ullam ducimus id sint quod expedita cum
              ab. Incidunt exercitationem veritatis doloribus libero esse
              quisquam alias consectetur modi voluptate eligendi illum ipsum,
              nemo nostrum vero nesciunt, quidem perferendis! Reiciendis
              consectetur doloribus ipsa, deleniti officiis ducimus et!
            </p>
          </Message.Content>
        </Message>
      </Section>
      <Section>
        <SplitLeft
          src="/DSC_2786.jpg"
          alt="Ensino do Português"
          title="Coordenação do ensino Portugues no estranhgeiro na Alemanha"
          text="A Coordenação do Ensino Português no Estrangeiro na Alemanha é uma
        estrutura do Camões – Instituto da Cooperação e da Língua, I.P.,
        responsável pela promoção e desenvolvimento do ensino da língua
        portuguesa no ensino básico e secundário e ensino superior no
        contexto alemão. Atua em 9 dos 16 estados federais junto de
        escolas, docentes, alunos e parceiros institucionais, promovendo o
        português como língua de herança, língua estrangeira e língua de
        cultura. Em articulação com a Embaixada de Portugal e entidades
        locais, desenvolve iniciativas educativas e culturais que reforçam
        a visibilidade, a qualidade e o prestígio da língua portuguesa,
        contribuindo para a sua afirmação no sistema educativo e na
        sociedade alemã e reforçando a ligação às comunidades portuguesas."
        />
      </Section>
      <SectionAbout>
        <SplitSection
          // style={{ flexDirection: "row-reverse" }}
          src="/DSC_2691.jpg"
          alt="Ensino do Portugês"
          title="Missão"
          text="A CEPE Alemanha opera com vista a melhorar o posicionamento da
        língua portuguesa na Alemanha e, consequentemente, à escala
        global, através da coordenação e gestão sistemática da rede do
        ensino básico e secundário e da rede do ensino superior no âmbito
        da língua Portuguesa. Assim, a CEPE Alemanha tem por missão: i.
        fomentar o ensino do Português e colocar a Língua Portuguesa na
        rota do sistema educativo alemão; ii. apontar caminhos para o
        desenvolvimento pessoal, profissional e cultural dos aprendentes,
        em particular de lusodescendentes, tendo por base a aprendizagem
        do Português; iii. promover percursos de ensino/ aprendizagem
        significativos e inspiradores; iv. nortear as trajetos didáticos e
        jornadas de formação dos professores e leitores de Português na
        Alemanha. Em suma, contribuir de forma ativa para a valorização da
        língua portuguesa como recurso comunicativo fundamental dinâmico e
        como ferramenta de colaboração para os desafios do mundo
        globalizado."
        />
      </SectionAbout>
      <SectionAbout>
        <SplitRigth
          // style={{ flexDirection: "row-reverse" }}
          src="/DSC_2806.jpg"
          alt="Ensino do Portugês"
          title="Valores"
          text=" O código de conduta do Camões, I.P. assente nos princípios da
        igualdade, imparcialidade, isenção, transparência, integridade e
        criteriosa afetação dos recursos públicos, identifica como valores
        fundamentais: i. A excelência, assente no rigor, na qualidade, na
        eficiência do ensino e da gestão sistemática; ii. A verdade,
        integridade e transparência; iii. A equidade, imparcialidade,
        isenção e justiça; iv. A qualidade e a produtividade do trabalho,
        a igualdade de oportunidades e de tratamento de pessoas e a
        não-discriminação. Além dos valores fundamentais do Camões, I.P., e no âmbito do
        ensino, a CEPE Alemanha identifica ainda: V. O saber, saber-fazer, saber-estar, saber-ser, saber-aprender
        vi. A abertura e respeito pela identidade e diversidade cultural;
        vii. A cidadania ativa e contribuição para o desenvolvimento
        pessoal, profissional e cultural numa sociedade pluralista;"
        />
      </SectionAbout>
      <Section>
        <Center src="/teachers.jpg" alt="Fotografia de grupo de Professores" />
      </Section>
      <Section>
        <Team />
      </Section>
      <Section>
        <Apply />
      </Section>
      <Footer />
    </>
  );
}
