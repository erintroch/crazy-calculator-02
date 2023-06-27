import styles from "./sliderAll.module.css";

export default function sliderAll({
  max,
  value,
  onValueChange,
  beforeInfo,
  afterInfo,
}) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.beforeInfo}>{beforeInfo}</div>
        <div className={styles.flexInfo}>
          <input
            type="range"
            min="0"
            max={max}
            onChange={(e) => onValueChange(e.target.value)}
            value={value}
          />
          <div className={styles.afterInfo}>{afterInfo}</div>
        </div>
      </div>
    </>
  );
}
