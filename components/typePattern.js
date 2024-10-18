import styles from "./typePattern.module.css";

export default function TypePattern({ value, onValueChange }) {
  const amountOfTypes = [1, 2, 3, 4];

  const clickType = (e) => {
    onValueChange(parseInt(e.currentTarget.id));
  };

  return (
    <>
      <div className={styles.patternTypeContainer}>
        <div className={styles.beforeInfo}>Pattern Type</div>
        <div className={styles.patternTypeSelectors}>
          {amountOfTypes.map((i) => {
            if (value === i) {
              return (
                <div
                  id={i}
                  key={i}
                  onClick={clickType}
                  className={`${styles.patternTypeDiv} ${styles.patternTypeDivActive}`}
                >
                  {i}
                </div>
              );
            } else {
              return (
                <div
                  id={i}
                  key={i}
                  onClick={clickType}
                  className={`${styles.patternTypeDiv}`}
                >
                  {i}
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}
