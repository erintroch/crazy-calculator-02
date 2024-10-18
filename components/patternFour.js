import styles from "./patternFour.module.css";

export default function PatternFour({
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
          transform: `rotate(${angleFigOne}deg)`,
          margin: `${margin}px`,
        }}
        className={styles.barComponent}
      >
        {(() => {
          const options = [];

          for (let i = 0; i < 3; i++) {
            options.push(
              <div>
                <div
                  style={{
                    backgroundColor: colorFigureOne,
                    margin: `${2 + margina / 2}px`,
                  }}
                  className={styles.barOne}
                ></div>
                <div
                  style={{
                    backgroundColor: colorFigureTwo,
                    margin: `${2 + margina / 2}px`,
                  }}
                  className={styles.barTwo}
                ></div>
                <div
                  style={{
                    backgroundColor: colorFigureThree,
                    margin: `${2 + margina / 2}px`,
                  }}
                  className={styles.barThree}
                ></div>
              </div>
            );
          }

          return options;
        })()}
      </div>

      <div
        style={{
          transform: `rotate(${angleFigTwo}deg)`,
          margin: `${margin}px`,
        }}
        className={styles.beakComponent}
      >
        <div
          className={styles.beakOne}
          style={{
            margin: `${2 + margina / 2}px`,
            borderColor: colorFigureOne,
          }}
        ></div>
        <div
          className={styles.beakOne}
          style={{
            margin: `${2 + margina / 2}px`,
            borderColor: colorFigureOne,
          }}
        ></div>
        <div
          className={styles.beakOne}
          style={{
            margin: `${2 + margina / 2}px`,
            borderColor: colorFigureOne,
          }}
        ></div>
      </div>

      <div
        style={{
          transform: `rotate(${angleFigThree}deg)`,
          margin: `${margin}px`,
        }}
        className={styles.uComponent}
      >
        <div
          className={styles.uOne}
          style={{
            margin: `${2 + margina / 2}px`,
            borderColor: colorFigureOne,
          }}
        ></div>
        <div
          className={styles.uOne}
          style={{
            margin: `${2 + margina / 2}px`,
            borderColor: colorFigureTwo,
          }}
        ></div>
        <div
          className={styles.uOne}
          style={{
            margin: `${2 + margina / 2}px`,
            borderColor: colorFigureThree,
          }}
        ></div>
      </div>
    </>
  );
}
