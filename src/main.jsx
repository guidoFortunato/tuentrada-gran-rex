import React from "react";
import ReactDOM from "react-dom/client";
import LandingApp from "./LandingApp";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <LandingApp />
    </BrowserRouter>
  </React.StrictMode>
);
