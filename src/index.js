import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./commonResource/css/bootstrap.css";
import "./commonResource/css/styles.css";
import "bootstrap"; // bootstrap 4.4.1
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
