"use client";
import { useState } from "react";
import faqData from "../../_lib/data-faqs";
import styles from "./Filter.module.css";
import SearchBar from "../Search/Search";
import Faq from "../Faq/Faq";

export default function Filter() {
  const [query, setQuery] = useState("");

  const filteredData = faqData
    .map((section) => {
      const filteredItems = section.items.filter(
        (item) =>
          item.question.toLowerCase().includes(query.toLowerCase()) ||
          item.answer.toLowerCase().includes(query.toLowerCase()) ||
          section.topic.toLowerCase().includes(query.toLowerCase()),
      );

      return {
        ...section,
        items: filteredItems,
      };
    })
    .filter((section) => section.items.length > 0);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>FAQ&apos;S</h1>
      <h3 className={styles.subTitle}>
        Aqui pode encontar algumas das suas perguntas as respostas para uma
        eventual dúvida que possa existir no que diz respeito à educação no
        Ensino do Português do estrangeiro, especificamente na Alemanha. Caso
        não fique esclarecido por favor não hesite em nos contactar.
      </h3>

      <SearchBar query={query} setQuery={setQuery} />

      {filteredData.length > 0 ? (
        filteredData.map((section, index) => (
          <Faq key={index} topic={section.topic} items={section.items} />
        ))
      ) : (
        <p className={styles.noResults}>Nenhum resultado encontrado.</p>
      )}
    </main>
  );
}
