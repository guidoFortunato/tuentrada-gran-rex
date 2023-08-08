import { useContext } from "react";
import { EventosContext } from "./context/EventosProvider";
import { AppRouter } from "./router/AppRouter";
import { NavBar } from "./components/navbar/";
import { Footer } from "./components/footer/";

import "animate.css";

function App() {
  const { dataInfoGeneral } = useContext(EventosContext);
  // console.log({dataInfoGeneral})
  if (dataInfoGeneral.length === 0) return <span></span>;

  return (
    <>
      <NavBar />
      <div className="w-[100%] lg:w-[95%] mx-auto">
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
