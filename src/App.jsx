import { Footer, Navbar } from "./components";
import { AppRouter } from "./router/AppRouter";
import 'animate.css';
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
