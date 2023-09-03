import styles from "./patternTwo.module.css";

export default function PatternTwo({
  colorFigureOne,
  colorFigureTwo,
  colorFigureThree,
  margin,
  margina,
  angleFigOne,
  angleFigTwo,
  angleFigThree,
}) {
  return (
    <>
      <div
        style={{
          margin: `${margin}px`,
          transform: `rotate(${angleFigOne}deg)`,
        }}
        className={styles.bigContainerPatternOneWhiteCube}
      >
        <div>
          <div
            style={{
              backgroundColor: colorFigureOne,
              margin: `${margina}px`,
              marginBottom: `${margina * 2}px`,
            }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeLeftTop}`}
          ></div>
          <div
            style={{
              backgroundColor: colorFigureTwo,
              margin: `${margina}px`,
            }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeLeftBottom}`}
          ></div>
        </div>
        <div>
          <div
            style={{
              backgroundColor: colorFigureThree,
              margin: `${margina}px`,
              marginBottom: `${margina * 2}px`,
            }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeRightTop}`}
          ></div>
          <div
            style={{ backgroundColor: colorFigureOne, margin: `${margina}px` }}
            className={`${styles.patternOneWhiteCube} ${styles.whiteCubeRightBottom}`}
          ></div>
        </div>
      </div>

      <div
        style={{
          margin: `${margin}px`,
          transform: `rotate(${angleFigTwo}deg)`,
        }}
        className={styles.bigContainerPatternOneCircle}
      >
        <div
          style={{
            borderColor: colorFigureTwo,
            width: `${margina * 1 + 40}px`,
            height: `${margina * 1 + 40}px`,
          }}
          className={styles.patternOneCircle}
        >
          <div
            style={{ backgroundColor: colorFigureOne }}
            className={styles.patternOneCircleInner}
          ></div>
        </div>
      </div>

      <div
        style={{
          margin: `${margin}px`,
          transform: `rotate(${angleFigThree}deg)`,
        }}
        className={styles.bigContainerPatternOneWave}
      >
        <div
          style={{ backgroundColor: colorFigureThree, margin: `${margina}px` }}
          className={styles.patternOneWaveOne}
        ></div>
        <div
          style={{ backgroundColor: colorFigureThree, margin: `${margina}px` }}
          className={styles.patternOneWaveSub}
        ></div>
        <div
          style={{ backgroundColor: colorFigureThree, margin: `${margina}px` }}
          className={styles.patternOneWaveTwo}
        ></div>
      </div>
    </>
  );
}
