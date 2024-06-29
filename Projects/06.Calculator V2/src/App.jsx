import React, { useState } from "react";
import "./App.css";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalValue('')
    } else if (buttonText === '=') {
      const result = eval(calValue)
      setCalValue(result)
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue)
    }
  }

  return (
    <>
      <div className={styles.calculator}>
        <Display displayValue={calValue} />
        <ButtonsContainer onButtonClick={onButtonClick} />
      </div>
    </>
  );
}

export default App;
