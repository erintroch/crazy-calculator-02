import styles from "./patternOne.module.css";

export default function PatternOne({
  colorFigureOne,
  colorFigureTwo,
  colorFigureThree,
}) {
  return (
    <>
      <div className={styles.bigContainerPatternOneWhiteCube}>
        <div>
          <div
            style={{ backgroundColor: colorFigureOne }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeLeftTop}`}
          ></div>
          <div
            style={{ backgroundColor: colorFigureOne }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeLeftBottom}`}
          ></div>
        </div>
        <div>
          <div
            style={{ backgroundColor: colorFigureOne }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeRightTop}`}
          ></div>
          <div
            style={{ backgroundColor: colorFigureOne }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeRightBottom}`}
          ></div>
        </div>
      </div>

      <div className={styles.bigContainerPatternOneCircle}>
        <div
          style={{ borderColor: colorFigureTwo }}
          className={styles.patternOneCircle}
        >
          <div
            style={{ backgroundColor: colorFigureOne }}
            className={styles.patternOneCircleInner}
          ></div>
        </div>
      </div>

      <div className={styles.bigContainerPatternOneWave}>
        <div
          style={{ backgroundColor: colorFigureThree }}
          className={styles.patternOneWaveOne}
        ></div>
        <div
          style={{ backgroundColor: colorFigureThree }}
          className={styles.patternOneWaveSub}
        ></div>
        <div
          style={{ backgroundColor: colorFigureThree }}
          className={styles.patternOneWaveTwo}
        ></div>
      </div>
    </>
  );
}
