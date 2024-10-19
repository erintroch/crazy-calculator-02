import styles from "./patternContainer.module.css";
import PatternOne from "./patternOne";
import PatternTwo from "./patternTwo";
import PatternThree from "./patternThree";
import PatternFour from "./patternFour";

export default function PatternContainer({
  colorFigureOne,
  colorFigureTwo,
  colorFigureThree,
  angle,
  angleFigOne,
  angleFigTwo,
  angleFigThree,
  margin,
  margina,
  amount,
  patternType,
  sliderState,
}) {
  const array = [];

  const addNumArray = () => {
    for (let i = 0; i < amount * amount; i++) {
      array.push(i);
    }
  };

  addNumArray();

  return (
    <>
      <div
        className={`${styles.patternContainer} ${
          sliderState ? styles.animateLeftMarginIn : styles.animateLeftMarginOut
        }`}
      >
        <div
          style={{
            gridTemplateColumns: `repeat(${amount}, auto)`,
            gridTemplateRows: `repeat(${amount}, auto)`,
          }}
          className={styles.gridContainer}
        >
          {array.map((element) => {
            if (patternType === 1) {
              return (
                <div
                  key={element}
                  style={{ transform: `rotate(${angle}deg)` }}
                  className={styles.patternDiv}
                >
                  <PatternOne
                    colorFigureOne={colorFigureOne}
                    colorFigureTwo={colorFigureTwo}
                    colorFigureThree={colorFigureThree}
                    margin={margin}
                    margina={margina}
                    angleFigOne={angleFigOne}
                    angleFigTwo={angleFigTwo}
                    angleFigThree={angleFigThree}
                  />
                </div>
              );
            }
            if (patternType === 3) {
              return (
                <div
                  key={element}
                  style={{ transform: `rotate(${angle}deg)` }}
                  className={styles.patternDiv}
                >
                  <PatternTwo
                    colorFigureOne={colorFigureOne}
                    colorFigureTwo={colorFigureTwo}
                    colorFigureThree={colorFigureThree}
                    margin={margin}
                    margina={margina}
                    angleFigOne={angleFigOne}
                    angleFigTwo={angleFigTwo}
                    angleFigThree={angleFigThree}
                  />
                </div>
              );
            }
            if (patternType === 4) {
              return (
                <div
                  key={element}
                  style={{ transform: `rotate(${angle}deg)` }}
                  className={styles.patternDiv}
                >
                  <PatternThree
                    colorFigureOne={colorFigureOne}
                    colorFigureTwo={colorFigureTwo}
                    colorFigureThree={colorFigureThree}
                    margin={margin}
                    margina={margina}
                    angleFigOne={angleFigOne}
                    angleFigTwo={angleFigTwo}
                    angleFigThree={angleFigThree}
                  />
                </div>
              );
            }
            if (patternType === 2) {
              return (
                <div
                  key={element}
                  style={{ transform: `rotate(${angle}deg)` }}
                  className={styles.patternDiv}
                >
                  <PatternFour
                    colorFigureOne={colorFigureOne}
                    colorFigureTwo={colorFigureTwo}
                    colorFigureThree={colorFigureThree}
                    margin={margin}
                    margina={margina}
                    angleFigOne={angleFigOne}
                    angleFigTwo={angleFigTwo}
                    angleFigThree={angleFigThree}
                  />
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
