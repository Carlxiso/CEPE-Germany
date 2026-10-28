import styles from "./FaqTable.module.css";

export default function FaqTable({ data }) {
  if (!data) return null; // sem tabela? não renderiza nada

  return (
    <div className={styles.faqTableWrapper}>
      <table className={styles.faqTable}>
        <thead>
          <tr>
            {data.headers.map((column, i) => (
              <th key={i}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
