import { useContext } from "react";
import { EventosContext } from "./context/EventosProvider";
import { Footer, LoadingVacio, NavBar } from "./components";
import { AppRouter } from "./router/AppRouter";

import "animate.css";

function App() {

  const { dataInfoGeneral } = useContext(EventosContext);
  if (dataInfoGeneral.length === 0) return <LoadingVacio />;

  return (
    <>
      <NavBar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
