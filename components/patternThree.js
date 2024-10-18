import styles from "./patternThree.module.css";

export default function PatternThree({
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
        <div className={styles.coolBall}>
          <div
            style={{
              backgroundColor: colorFigureOne,
              margin: `${margina / 2}px`,
            }}
            className={styles.ballOne}
          ></div>
          <div
            style={{
              backgroundColor: colorFigureThree,
              margin: `${margina / 2}px`,
            }}
            className={styles.ballTwo}
          ></div>
          <div
            style={{
              backgroundColor: colorFigureThree,
              margin: `${margina / 2}px`,
            }}
            className={styles.ballThree}
          ></div>
          <div
            style={{
              backgroundColor: colorFigureTwo,
              margin: `${margina / 2}px`,
            }}
            className={styles.ballFour}
          ></div>
        </div>
        <div className={styles.surroundHorizontal}>
          <div
            style={{
              margin: `${margin}px`,
              transform: `rotate(${angleFigOne}deg)`,
            }}
            className={styles.surroundFirst}
          >
            <div
              style={{
                backgroundColor: colorFigureOne,
                margin: `${margina}px`,
              }}
              className={styles.elipse}
            ></div>
            <div className={styles.circleMoveContainer}>
              <div
                style={{
                  borderColor: colorFigureOne,
                  backgroundColor: colorFigureThree,
                  margin: `${margina}px`,
                }}
                className={styles.circleMoveOne}
              ></div>
              <div
                style={{
                  borderColor: colorFigureOne,
                  backgroundColor: colorFigureTwo,
                  margin: `${margina}px`,
                }}
                className={styles.circleMoveTwo}
              ></div>
            </div>
          </div>
          <div
            style={{
              margin: `${margin}px`,
              transform: `rotate(${angleFigTwo}deg)`,
            }}
            className={styles.figTwo}
          >
            <div
              style={{ borderColor: colorFigureTwo }}
              className={styles.cube}
            >
              <div
                style={{ backgroundColor: colorFigureThree }}
                className={styles.innerCube}
              ></div>
            </div>
            <div
              style={{
                backgroundColor: colorFigureOne,
                margin: `${margina - 1 + 6}px`,
              }}
              className={styles.stripe}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
