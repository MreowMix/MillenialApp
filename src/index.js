import React from "react";
import { render } from "react-dom";
import MillennialApp from "./MillennialApp";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <MillennialApp />
  </div>
);

render(<App />, document.getElementById("root"));
