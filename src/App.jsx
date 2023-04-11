import { useEffect } from "react";
import { Footer, Navbar } from "./components";
import { AppRouter } from "./router/AppRouter";
import "animate.css";

function App() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.scrollTo(0, 0);
  //   }, 1000);
  // }, []);
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
