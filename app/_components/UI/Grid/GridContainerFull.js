import Grid from "./Grid";
import GridItem from "./GridItem";
import styles from "./GridContainer.module.css";
import stylesLetters from "./GridContainerFull.module.css";
import SVGLetterE from "../SVGLetter/SVGLetterE";
import SVGLetterF from "../SVGLetter/SVGLetterF";

export default function GridContainerFull() {
  return (
    <Grid>
      <GridItem colStart={1} colEnd={13} rowStart={1} rowEnd={2}>
        <div className={styles.bottomGrid}>
          <SVGLetterE />
          <SVGLetterF />
        </div>
      </GridItem>
    </Grid>
  );
}
