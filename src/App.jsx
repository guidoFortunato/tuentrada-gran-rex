import { Footer, Navbar } from "./components";
import { AppRouter } from "./router/AppRouter";

function App() {
  return (
    <>
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
