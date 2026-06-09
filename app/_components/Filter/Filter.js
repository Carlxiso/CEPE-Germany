"use client";
import { useMemo, useState } from "react";
import faqData from "../../_lib/data-faqs";
import styles from "./Filter.module.css";
import SearchBar from "../Search/Search";
import Faq from "../Faq/Faq";

// remove acentos e normaliza para pesquisa tolerante
const normalize = (str) =>
  str
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");

export default function Filter() {
  const [query, setQuery] = useState("");

  const filteredData = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return faqData;

    return faqData
      .map((section) => ({
        ...section,
        items: section.items.filter(
          (item) =>
            normalize(item.question).includes(q) ||
            normalize(item.answer).includes(q) ||
            normalize(section.topic).includes(q),
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [query]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>FAQ&apos;S</h1>
      <p className={styles.subTitle}>
        Aqui pode encontrar algumas das suas perguntas as respostas para uma
        eventual dúvida que possa existir no que diz respeito à educação no
        Ensino do Português do estrangeiro, especificamente na Alemanha. Caso
        não fique esclarecido por favor não hesite em nos contactar.
      </p>

      <SearchBar query={query} setQuery={setQuery} />

      {filteredData.length > 0 ? (
        filteredData.map((section) => (
          <Faq key={section.topic} topic={section.topic} items={section.items} />
        ))
      ) : (
        <p className={styles.noResults}>Nenhum resultado encontrado.</p>
      )}
    </main>
  );
}
