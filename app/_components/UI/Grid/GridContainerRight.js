import SVGTilesFifteen from "../SVGTile/SVGTileFifthTeen";
import SVGTileFourteen from "../SVGTile/SVGTileFourteen";
import Grid from "./Grid";
import GridItem from "./GridItem";
import styles from "./GridContainer.module.css";
import SVGTileSeven from "../SVGTile/SVGTileSeven";
import SVGTileNine from "../SVGTile/SVGTileNine";
import SVGTileOne from "../SVGTile/SVGTileOne";
import SVGTileTwo from "../SVGTile/SVGTileTwo";
import SVGTileThree from "../SVGTile/SVGTileThree";
export default function GridContainerRight() {
  return (
    <Grid>
      <GridItem colStart={7} colEnd={13} rowStart={1} rowEnd={2}>
        <div className={styles.bottomGrid}>
          <div className={styles.tile}>
            <SVGTilesFifteen />
          </div>
          <div className={styles.tile}>
            <SVGTileFourteen />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileSeven />
          </div>

          <div className={styles.tile}>
            <SVGTileNine />
          </div>
          <div className={styles.tile}>
            <SVGTileOne />
          </div>
          <div className={styles.tile}>
            <SVGTileTwo />
          </div>
          <div className={styles.tile}>
            <SVGTileThree />
          </div>
        </div>
      </GridItem>
    </Grid>
  );
}
