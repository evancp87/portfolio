import React from "react";
// import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./store/store.js";
import "./styles/style.css";
import reportWebVitals from "./reportWebVitals.js";

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

reportWebVitals();
