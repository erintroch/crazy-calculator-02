import styles from "./colorInput.module.css";

export default function ColorInput({ value, onValueChange, beforeInfo }) {
  return (
    <>
      <div className={styles.inputText}>
        <div className={styles.beforeInfo}>{beforeInfo}</div>
        <div className={styles.colorInputContainer}>
          <input
            className={styles.colorInput}
            type="color"
            id="favcolor"
            name="favcolor"
            onChange={(e) => onValueChange(e.target.value)}
            value={value}
          />
        </div>
      </div>
    </>
  );
}
