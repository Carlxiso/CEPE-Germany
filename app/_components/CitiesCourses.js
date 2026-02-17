import Image from "next/image";
import Link from "next/link";
import img_test from "@/public/img-test.png";

export default function CitiesCourses() {
  return (
    <section className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-secondary-500 font-medium">
          Coordenação do ensino Portugues no estranhgeiro na Alemanha
        </h1>

        <div className="space-y-8">
          <p>
            A Coordenação do Ensino Português no Estrangeiro na Alemanha é uma
            estrutura do Camões – Instituto da Cooperação e da Língua, I.P.,
            responsável pela promoção e desenvolvimento do ensino da língua
            portuguesa no ensino básico e secundário e ensino superior no
            contexto alemão. Atua em 9 dos 16 estados federais junto de escolas,
            docentes, alunos e parceiros institucionais, promovendo o português
            como língua de herança, língua estrangeira e língua de cultura. Em
            articulação com a Embaixada de Portugal e entidades locais,
            desenvolve iniciativas educativas e culturais que reforçam a
            visibilidade, a qualidade e o prestígio da língua portuguesa,
            contribuindo para a sua afirmação no sistema educativo e na
            sociedade alemã e reforçando a ligação às comunidades portuguesas.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image src={img_test} alt="image test 1" quality={80} />
      </div>

      <div className="col-span-2">
        <Image src={img_test} alt="Image Test 2" quality={80} />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-secondary-500 font-medium">
          Missão
        </h1>

        <div className="space-y-8">
          <p>
            A CEPE Alemanha opera com vista a melhorar o posicionamento da
            língua portuguesa na Alemanha e, consequentemente, à escala global,
            através da coordenação e gestão sistemática da rede do ensino básico
            e secundário e da rede do ensino superior no âmbito da língua
            Portuguesa. Assim, a CEPE Alemanha tem por missão: i. fomentar o
            ensino do Português e colocar a Língua Portuguesa na rota do sistema
            educativo alemão; ii. apontar caminhos para o desenvolvimento
            pessoal, profissional e cultural dos aprendentes, em particular de
            lusodescendentes, tendo por base a aprendizagem do Português; iii.
            promover percursos de ensino/ aprendizagem significativos e
            inspiradores; iv. nortear as trajetos didáticos e jornadas de
            formação dos professores e leitores de Português na Alemanha. Em
            suma, contribuir de forma ativa para a valorização da língua
            portuguesa como recurso comunicativo fundamental dinâmico e como
            ferramenta de colaboração para os desafios do mundo globalizado.
          </p>

          <div>
            <Link
              href="/"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explorar
            </Link>
          </div>
        </div>
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-secondary-500 font-medium">
          Valores
        </h1>
      </div>
    </section>
  );
}
