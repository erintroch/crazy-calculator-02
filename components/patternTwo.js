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
      <div>
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
              style={{
                backgroundColor: colorFigureOne,
                margin: `${margina}px`,
              }}
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
          <div className={styles.starContainer}>
            <div
              style={{
                backgroundColor: colorFigureTwo,
                height: `${margina * 2 - 12 + 40}px`,
              }}
              className={styles.starArmOne}
            ></div>
            <div
              style={{
                backgroundColor: colorFigureTwo,
                height: `${margina * 2 - 12 + 40}px`,
              }}
              className={styles.starArmTwo}
            ></div>
            <div
              style={{
                backgroundColor: colorFigureThree,
                height: `${margina * 2 - 12 + 24}px`,
              }}
              className={styles.starArmThree}
            ></div>
            <div
              style={{
                backgroundColor: colorFigureOne,
                height: `${margina * 2 - 12 + 24}px`,
              }}
              className={styles.starArmFour}
            ></div>
          </div>
        </div>
      </div>
      <div
        style={{
          margin: `${margin}px`,
          transform: `rotate(${angleFigThree}deg)`,
        }}
      >
        <div
          style={{
            borderColor: colorFigureOne,
            width: `${50 + margina / 2}px`,
            height: `${50 + margina / 2}px`,
          }}
          className={styles.halfCircle}
        >
          <div
            style={{
              backgroundColor: colorFigureThree,
            }}
            className={styles.eyeball}
          >
            <div
              style={{
                backgroundColor: colorFigureTwo,
                margin: `${margina / 4 + 4}px`,
              }}
              className={styles.innerEye}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
