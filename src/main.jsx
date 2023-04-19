import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import EventosProvider from "./context/EventosProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EventosProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </EventosProvider>
  </React.StrictMode>
);
