import React from "react";
import ReactDOM from "react-dom/client";
// import { Adsense } from "@ctrl/react-adsense";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import EventosProvider from "./context/EventosProvider";

import "normalize.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <EventosProvider>
        <App />
        {/* <Adsense
          client="ca-pub-3241865431125040"
          slot="8133563126"
          style={{ display: "block", height: "150px" }}
          format="fluid"
        /> */}
      </EventosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
