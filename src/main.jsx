import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import EventosProvider from "./context/EventosProvider";

import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
    <BrowserRouter>
      <EventosProvider>
        <App />
      </EventosProvider>
    </BrowserRouter>
  //</React.StrictMode>
);
