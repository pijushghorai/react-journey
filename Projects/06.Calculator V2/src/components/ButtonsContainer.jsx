import React from "react";
import styles from "./Buttons.module.css";

function ButtonsContainer({onButtonClick}) {
  const buttonsNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div className={styles.buttonscontainer}>
      {buttonsNames.map((item, index) => {
        return (
          <button className={styles.button} key={index} onClick={() => onButtonClick(item)}>
            {item}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonsContainer;
