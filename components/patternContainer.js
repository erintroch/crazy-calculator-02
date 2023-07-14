import styles from "./patternContainer.module.css";
import PatternOne from "./patternOne";

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
      <div className={styles.patternContainer}>
        <div
          style={{
            gridTemplateColumns: `repeat(${amount}, auto)`,
            gridTemplateRows: `repeat(${amount}, auto)`,
          }}
          className={styles.gridContainer}
        >
          {array.map((element) => (
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
          ))}
        </div>
      </div>
    </>
  );
}
