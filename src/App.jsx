import React from "react";
import ReactDOM from "react-dom";
import DogWidget from "./DogWidget"
import "./index.css";

const App = () => <div><DogWidget/></div>;

ReactDOM.render(<App />, document.getElementById("app"));
