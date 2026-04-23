import Grid from "./Grid";
import GridItem from "./GridItem";
import styles from "./GridContainer.module.css";
import SVGLetterT from "../SVGLetter/SVGLetterT";
import SVGTileOne from "../SVGTile/SVGTileOne";
import SVGLetterA from "../SVGLetter/SVGLetterA";
import SVGTileTwo from "../SVGTile/SVGTileTwo";
import SVGTileThree from "../SVGTile/SVGTileThree";
import SVGTileFour from "../SVGTile/SVGTileFour";
import SVGTileFive from "../SVGTile/SVGTileFive";
import SVGTileSix from "../SVGTile/SVGTileSix";
import SVGTileSeven from "../SVGTile/SVGTileSeven";
import SVGLetterC from "../SVGLetter/SVGLetterC";
import SVGTileEight from "../SVGTile/SVGTileEight";
import SVGTileNine from "../SVGTile/SVGTileNine";
import SVGTileTen from "../SVGTile/SVGTileTen";
import SVGTileEleven from "../SVGTile/SVGTileEleven";
import SVGTileTwelve from "../SVGTile/SVGTileTwelve";
import SVGTileThirteen from "../SVGTile/SVGTileThirteen";
import SVGTileFourteen from "../SVGTile/SVGTileFourteen";
import SVGTilesFifteen from "../SVGTile/SVGTileFifthTeen";

export default function GridContainer() {
  return (
    <Grid>
      {/* <GridItem colStart={1} colEnd={7} rowStart={1} rowEnd={2}></GridItem> */}

      {/*<GridItem colStart={7} colEnd={13} rowStart={1} rowEnd={2}>
        Top Right
      </GridItem> */}

      <GridItem colStart={1} colEnd={13} rowStart={2} rowEnd={4}>
        <div className={styles.bottomGrid}>
          <div className={styles.tile}>
            <SVGTileOne />
          </div>
          <div className={styles.tile}>
            <SVGTileTwo />
          </div>
          <div className={styles.tile}>
            <SVGTileThree />
          </div>
          <div className={styles.tile}>
            <div className={styles.tileA}>
              <SVGLetterA />
            </div>
          </div>
          <div className={styles.tile}>
            <SVGTileFive />
          </div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}></div>
          <div className={styles.tile}>
            <SVGTileFour />
          </div>
          <div className={styles.tile}>
            <SVGLetterC />
          </div>
          <div className={styles.tile}>
            <SVGTileSeven />
          </div>
          <div className={styles.tile}>
            <SVGTileSix />
          </div>
          <div className={styles.tile}>
            <SVGTileEight />
          </div>
          <div className={styles.tile}>
            <SVGTileNine />
          </div>
          <div className={styles.tile}>
            <SVGTileTen />
          </div>
          <div className={styles.tile}>
            <SVGTileEleven />
          </div>
          <div className={styles.tile}>
            <SVGTileTwelve />
          </div>
          <div className={styles.tile}>
            <SVGTileThirteen />
          </div>
          <div className={styles.tile}>
            <SVGTileFourteen />
          </div>
          <div className={styles.tile}>
            <SVGTilesFifteen />
          </div>
        </div>
      </GridItem>
    </Grid>
  );
}
