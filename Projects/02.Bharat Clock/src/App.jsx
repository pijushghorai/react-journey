import React from "react";
import './App.css'
import ClockHeading from "./components/ClockHeading";
import ClockSloogan from "./components/ClockSloogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <>
      <center>
        <ClockHeading />
        <ClockSloogan />
        <CurrentTime />
      </center>
    </>
  );
}

export default App;
