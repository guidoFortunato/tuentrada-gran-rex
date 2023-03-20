import { Navbar } from "./components/Navbar";
import { AppRouter } from "./router/AppRouter";

function LandingApp() {
  return (
    <>
      <Navbar />
      <AppRouter />
    </>
  );
}

export default LandingApp;
