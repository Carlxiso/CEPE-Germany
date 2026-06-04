import SVGTilesFifteen from "../SVGTile/SVGTileFifthTeen";
import SVGTileFourteen from "../SVGTile/SVGTileFourteen";
import Grid from "./Grid";
import GridItem from "./GridItem";
import styles from "./GridContainer.module.css";
import SVGTileSeven from "../SVGTile/SVGTileSeven";
import SVGTileNine from "../SVGTile/SVGTileNine";

export default function GridContainerLeft() {
  return (
    <Grid ariaHidden>
      <GridItem colStart={1} colEnd={7} rowStart={1} rowEnd={2}>
        <div className={styles.bottomGrid}>
          <div className={styles.tile}>
            <SVGTileFourteen />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileSeven />
          </div>
          <div className={styles.tile}>
            <SVGTilesFifteen />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileNine />
          </div>
        </div>
      </GridItem>
    </Grid>
  );
}
