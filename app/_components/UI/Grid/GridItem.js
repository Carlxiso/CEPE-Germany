import styles from "./Grid.module.css";

export default function GridItem({
  children,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
}) {
  const style = {
    gridColumn: colStart && colEnd ? `${colStart} / ${colEnd}` : undefined,
    gridRow: rowStart && rowEnd ? `${rowStart} / ${rowEnd}` : undefined,
  };

  return (
    <div className={styles.item} style={style}>
      {children}
    </div>
  );
}
