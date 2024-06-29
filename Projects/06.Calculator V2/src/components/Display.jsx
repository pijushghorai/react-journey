import React from "react";
import styles from "./Display.module.css";

function Display({ displayValue }) {
  return (
    <input
      className={styles.display}
      type="display"
      value={displayValue}
      readOnly
    />
  );
}

export default Display;
