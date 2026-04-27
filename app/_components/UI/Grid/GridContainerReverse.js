import Grid from "./Grid";
import GridItem from "./GridItem";
import styles from "./GridContainer.module.css";

import SVGTileSixTeen from "../SVGTile/SVGTileSixTeen";
import SVGTileSevenTeen from "../SVGTile/SVGTileSevenTeen";
import SVGTileEight from "../SVGTile/SVGTileEight";
import SVGTileEightTeen from "../SVGTile/SVGTileEightTeen";
import SVGTileNineTeen from "../SVGTile/SVGTileNineTeen";
import SVGTileTweenty from "../SVGTile/SVGTileTweenty";
import SVGTileTweentyOne from "../SVGTile/SVGTileTweentyOne";
import SVGTileTweentyTwo from "../SVGTile/SVGTileTweentyTwo";
import SVGTileTweentyThree from "../SVGTile/SVGTileTweentyThree";
import SVGTileTweentyFour from "../SVGTile/SVGTileTweentyFour";
import SVGTileTweentyFive from "../SVGTile/SVGTileTweentyFive";
import SVGTileTweentySix from "../SVGTile/SVGTileTweentySix";
import SVGTileTweentySeven from "../SVGTile/SVGTileTweentySeven";
import SVGTileTweentyEight from "../SVGTile/SVGTileTweentyEight";
import SVGTileTweentyNine from "../SVGTile/SVGTileTweentyNine";
import SVGTileThirty from "../SVGTile/SVGTileThirty";

export default function GridContainerReverse() {
  return (
    <Grid>
      <GridItem colStart={1} colEnd={13} rowStart={2} rowEnd={4}>
        <div className={styles.bottomGrid}>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileSevenTeen />
          </div>
          <div className={styles.tile}>
            <SVGTileEightTeen />
          </div>
          <div className={styles.tile}>
            <SVGTileEight />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileNineTeen />
          </div>
          <div className={styles.tile}>
            <SVGTileTweenty />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileTweentyOne />
          </div>
          <div className={styles.tile}>
            <SVGTileSixTeen />
          </div>
          <div className={styles.tile}>
            <SVGTileTweentyThree />
          </div>
          <div className={styles.tile}>
            <SVGTileTweentyFour />
          </div>
          <div className={styles.tile}>
            <SVGTileTweentyFive />
          </div>
          <div className={styles.tile}>
            <SVGTileTweentySix />
          </div>
          <div className={styles.tile}>
            <SVGTileTweentySeven />
          </div>
          <div className={styles.tile}>
            <SVGTileTweentyEight />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileTweentyNine />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileThirty />
          </div>
          <div className={styles.tile}>
            <SVGTileTweentyTwo />
          </div>
          <div className={styles.tile}></div>
        </div>
      </GridItem>
    </Grid>
  );
}
