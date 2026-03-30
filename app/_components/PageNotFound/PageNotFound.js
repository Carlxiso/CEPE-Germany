import Link from "next/link";
import styles from "./PageNotFound.module.css";

const quotes = [
  {
    text: "Ando sem rumo, como quem não tem destino nem verdade.",
    author: "Fernando Pessoa ",
  },
  {
    text: "Sinto-me nascido a cada momento para a eterna novidade do mundo… mas sempre perdido nela.",
    author: "Fernando Pessoa ",
  },
  {
    text: "Se podes olhar, vê. Se podes ver, repara.",
    author: "José Saramago",
  },
  {
    text: "Dentro de nós há uma coisa que não tem nome, essa coisa é o que somos — e às vezes está perdida.",
    author: "José Saramago",
  },
  {
    text: "Há quem viva perdido sem saber que o está.",
    author: "Miguel Torga",
  },
  {
    text: "O pior exílio é o de quem está perdido dentro de si.",
    author: "Miguel Torga",
  },
  {
    text: "Nunca estamos tão perdidos como quando julgamos saber o caminho.",
    author: "Vergílio Ferreira",
  },
  {
    text: "Procuro-me e não me encontro.",
    author: "Vergílio Ferreira",
  },
  {
    text: "Quem se perdeu de si próprio, perdeu tudo.",
    author: "Sophia de Mello Breyner Andresen",
  },
  {
    text: "Há um instante em que tudo se cala e ficamos perdidos dentro do silêncio.",
    author: "Sophia de Mello Breyner Andresen",
  },
  {
    text: "Andamos todos um pouco perdidos, mas fingimos que sabemos o caminho.",
    author: "Eça de Queirós ",
  },
];

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
export default function PageNotFound() {
  const quote = getRandomQuote();

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.quote}>&quot;{quote.text}&quot;</p>
        <p className={styles.author}>— {quote.author}</p>
        <Link href="/" className={styles.primaryBtn}>
          Back to HomePage
        </Link>
      </div>
    </main>
  );
}
