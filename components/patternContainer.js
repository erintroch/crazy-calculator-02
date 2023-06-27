import styles from "./patternContainer.module.css";
import PatternOne from "./patternOne";

export default function PatternContainer({
  colorFigureOne,
  colorFigureTwo,
  colorFigureThree,
  angle,
}) {
  return (
    <>
      <div
        style={{ transform: `rotate(${angle}deg)` }}
        className={styles.patternContainer}
      >
        <PatternOne
          colorFigureOne={colorFigureOne}
          colorFigureTwo={colorFigureTwo}
          colorFigureThree={colorFigureThree}
        />
      </div>
    </>
  );
}
