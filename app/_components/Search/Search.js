import styles from "./Search.module.css";

export default function SearchBar({ query, setQuery }) {
  return (
    <div className={styles.searchWrapper}>
      <input
        type="text"
        placeholder="Pesquisar por tópico ou pergunta..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={styles.searchInput}
      />
    </div>
  );
}
