import React from "react";
import ReactDOM from "react-dom";
// ReactDOM.render(<App />, document.getElementById("root"));
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
