import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";
import { StateProvider } from "./context/StateProvider";
import { BrowserRouter as Router } from "react-router-dom";
import { initialState } from "./context/initialState";
import reducer from "./context/reducer";
const root = ReactDOM.createRoot(document.getElementById("root"));

ReactDOM.render(
  <Router>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </Router>,
  document.getElementById("root")
);
