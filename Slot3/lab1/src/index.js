import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Exercise1 from "./exercise/Exercise1";
import Exercise2 from "./exercise/Exercise2";
import Exercise3 from "./exercise/Exercise3";
import Exercise4 from "./exercise/Exercise4";
import Exercise5 from "./exercise/Exercise5";
import Exercise6 from "./exercise/Exercise6";
import Exercise7 from "./exercise/Exercise7";
import Exercise8 from "./exercise/Exercise8";
import Exercise9 from "./exercise/Exercise9";
import Exercise10 from "./exercise/Exercise10";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <h2>Exercise 1</h2>
    <Exercise1 />
    <h2>Exercise 2</h2>
    <Exercise2 />
    <h2>Exercise 3</h2>
    <Exercise3 />
    <h2>Exercise 4</h2>
    <Exercise4 />
    <h2>Exercise 5</h2>
    <Exercise5 />
    <h2>Exercise 6</h2>
    <Exercise6 />
    <h2>Exercise 7</h2>
    <Exercise7 />
    <h2>Exercise 8</h2>
    <Exercise8 />
    <h2>Exercise 9</h2>
    <Exercise9 />
    <h2>Exercise 10</h2>
    <Exercise10 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
