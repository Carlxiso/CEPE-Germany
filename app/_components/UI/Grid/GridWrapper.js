import GridContainer from "./GridContainer";
import GridSideGraphic from "./GridSideGraphic";
import styles from "./GridWrapper.module.css";

export default function GridWrapper() {
  return (
    <div className={styles.layout}>
      <GridContainer />
      <GridSideGraphic />
    </div>
  );
}
