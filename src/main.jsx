import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import 'normalize.css'
import "./index.css";

import { BrowserRouter, HashRouter } from "react-router-dom";
import EventosProvider from "./context/EventosProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <EventosProvider>
        <App />
      </EventosProvider>
    </HashRouter>
  </React.StrictMode>
);
